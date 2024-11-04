import Empty from "../../ui/empty";
import Loader from "../../ui/Loader";
import BookingsRow from "./BookingsRow";
import { useBooking } from "./useBooking";

function BookingsTable() {
  const { isLoading, Bookings } = useBooking();

  if (isLoading) return <Loader/>;
  if (!Bookings.length) return <Empty resourceName="bookings" />;

  return (
    <>
    
    <div
      role="table"
      className="w-full rounded-lg border border-gray-200 overflow-hidden"
      >
    
        {/* Header */}
        <header className="grid grid-cols-7 gap-4 bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        
      </header>
      {Bookings.map((booking) => (
        <BookingsRow booking={booking} key={booking.id} />
      ))}
    
      </div>
      </>
  );
}

export default BookingsTable;
