import { useState } from "react";
import { isFuture, isPast, isToday } from "date-fns";
import supabase from "../services/supabase";
import Button from "../ui/Button";
import { subtractDates } from "../utils/helpers";

import { bookings } from "./data-bookings";
import { cabins } from "./data-cabins";
import { guests } from "./data-guests";

// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };

// async function deleteGuests() {
//   const { error } = await supabase.from("Guests").delete().gt("id", 0);
//   if (error) console.error(error.message);
// }

// async function deleteCabins() {
//   const { error } = await supabase.from("Cabins").delete().gt("id", 0);
//   if (error) console.error(error.message);
// }

async function deleteBookings() {
  const { error } = await supabase.from("Bookings").delete().gt("id", 0);
  if (error) console.error(error.message);
}

async function createGuests() {
  const { error } = await supabase.from("Guests").insert(guests);
  if (error) console.error(error.message);
}

async function createCabins() {
  const { error } = await supabase.from("Cabins").insert(cabins);
  if (error) console.error(error.message);
}

async function createBookings() {
  // Bookings need a guestId and a cabinId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds and cabinIds, and then replace the original IDs in the booking data with the actual ones from the DB
  const { data: guestsIds } = await supabase
    .from("Guests")
    .select("id")
    .order("id");
  const allGuestIds = guestsIds.map((cabin) => cabin.id);
  const { data: cabinsIds } = await supabase
    .from("Cabins")
    .select("id")
    .order("id");
  const allCabinIds = cabinsIds.map((cabin) => cabin.id);

  const finalBookings = bookings.map((booking) => {
    // Here relying on the order of cabins, as they don't have and ID yet
    const cabin = cabins.at(booking.cabinId - 1);
    const numNight = subtractDates(booking.enddate, booking.startdate);
    const cabinPrice = numNight * (cabin.regularPrice - cabin.discount);
    const extrasPrice = booking.hasBreakfast
      ? numNight * 15 * booking.numGuests
      : 0; // hardcoded breakfast price
    const totalPrice = extrasPrice;

    let status;
    if (
      isPast(new Date(booking.enddate)) &&
      !isToday(new Date(booking.enddate))
    )
      status = "checked-out";
    if (
      isFuture(new Date(booking.startdate)) ||
      isToday(new Date(booking.startdate))
    )
      status = "unconfirmed";
    if (
      (isFuture(new Date(booking.enddate)) ||
        isToday(new Date(booking.enddate))) &&
      isPast(new Date(booking.startdate)) &&
      !isToday(new Date(booking.startdate))
    )
      status = "checked-in";

    return {
      ...booking,
      numNight,
      cabinPrice,
      extrasPrice,
      totalPrice,
      guestsId: allGuestIds.at(booking.guestsId - 1),
      cabinId: allCabinIds.at(booking.cabinId - 1),
      status,
    };
  });

  console.error(finalBookings);

  const { error } = await supabase.from("Bookings").insert(finalBookings);
  if (error) console.error(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // Bookings need to be deleted FIRST
    await deleteBookings();
    // await deleteGuests();
    // await deleteCabins();

    // Bookings need to be created LAST
    await createGuests();
    await createCabins();
    await createBookings();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button>

      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings ONLY
      </Button>
    </div>
  );
}

export default Uploader;
