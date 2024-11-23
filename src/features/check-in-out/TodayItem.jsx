import { Link } from "react-router-dom";

import Button from "../../ui/Button";
// import CheckoutButton from "./CheckoutButton";

function TodayItem({ activity }) {
  const { id, status, Guests, numNights } = activity;

  return (
    <li className="grid grid-cols-[9rem_2rem_1fr_7rem_9rem] gap-4 items-center text-sm py-2 border-b border-gray-100 first:border-t first:border-gray-100">
      {/* Status */}
      {status === "unconfirmed" && <span className="w-fit uppercase text-[1.1rem] font-semibold py-[0.4rem] px-[1.2rem] rounded-full" type="green">Arriving</span>}
      {status === "checked-in" && <span className="w-fit uppercase text-[1.1rem] font-semibold py-[0.4rem] px-[1.2rem] rounded-full" type="blue">Departing</span>}

      {/* Flag */}
      <img className="max-w-[2rem] rounded-[var(--border-radius-tiny)] block border border-gray-100" src={Guests.countryflag} alt={`Flag of ${Guests.country}`} />

      {/* Guest Name */}
      <div className="font-medium">{Guests.fullname}</div>

      {/* Nights */}
      <div>{numNights} nights</div>

      {/* Action buttons */}
      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {/* {status === "checked-in" && <CheckoutButton bookingId={id} />} */}
    </li>
  );
}

export default TodayItem;
