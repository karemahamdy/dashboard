import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  // const { bookingId } = useParams();

  const {
    isLoading,
    data: Bookings,
    error,
  } = useQuery({
    queryKey: ["Booking",],
    queryFn:  getBooking(),
    retry: false,
  });

  return { isLoading, error, Bookings };
}
