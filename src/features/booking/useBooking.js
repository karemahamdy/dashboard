import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  // const { bookingId } = useParams();

  const {
    isLoading,
    data: Bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn:  getBooking,

  });

  return { isLoading, error, Bookings };
}
