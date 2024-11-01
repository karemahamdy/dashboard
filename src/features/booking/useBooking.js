import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  // const { bookingId } = useParams();

  const {
    isLoading,
    data: Bookings,
    error,
  } = useQuery({
    queryKey: ["Booking"],
    queryFn:  getBooking(),
    retry: false,
  });

  return { isLoading, error, Bookings };
}
