
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";


function BookingsRow({
  Bookings: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    Guests: { fullName: guestName, email },
    Cabins: { name: cabinName },
  },
}) {

  return (
    <>
      <div  className="grid grid-cols-7 gap-4 px-8 py-4 items-center bg-white p">
      
        <div className="font-semibold text-black text-lg font-sono">
          {cabinName}
        </div>
        
        <div className="font-semibold text-black text-lg font-sono">
          <span>{guestName}</span>
          <span>{email}</span>
        </div>
        
        <div className="font-semibold text-black text-lg font-sono">
          {startDate} {endDate}
        </div>

      </div> 
    
    </>
  );
}

export default BookingsRow;
