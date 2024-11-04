import { Calendar, Mail, User } from 'lucide-react';

const BookingsRow = ({
  booking: {
    id: bookingId,
    created_at,
    startdate,
    enddate,
    numNight,
    numGuests,
    totalPrice,
    status,
    // Guests: { fullname: guestname, email },
    Cabins: { name: Cabinsname },
  },
}) => {

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusStyles = (status) => {
    const styles = {
      unconfirmed: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-green-100 text-green-800',
      checkedout: 'bg-gray-100 text-gray-800',
      canceled: 'bg-red-100 text-red-800'
    };
    return styles[status.toLowerCase()] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="grid grid-cols-[1.5fr,2fr,2fr,1fr,1fr,1fr] gap-4 px-6 py-4 items-center bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-gray-500" />
          {/* <span className="font-medium text-gray-900">{guestname}</span> */}
        </div>
        <span className="text-sm text-gray-500">Cabin: {Cabinsname}</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4 text-gray-500" />
        {/* <span className="text-gray-600">{email}</span> */}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="font-medium">{formatDate(startdate)}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>➔</span>
          <span>{formatDate(enddate)}</span>
          <span className="text-gray-400">·</span>
          <span>{numNight} nights</span>
        </div>
      </div>
      <div>
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusStyles(status)}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="font-mono font-medium">
        ${totalPrice}
      </div>
      <div className="flex items-center gap-1">
      
        <span className="text-gray-600">{numGuests}</span>
      </div>
    </div>
  );
};

export default BookingsRow;
