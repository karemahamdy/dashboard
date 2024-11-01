
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import Button from "../../ui/Button";
// import { formatCurrency } from "../../utils/helpers";
// import { deleteCabins } from "../../services/apiCabins";
// import toast from "react-hot-toast";


// function BookingsRow({
//   Bookings: {
//     id: bookingId,
//     created_at,
//     startdate,
//     endDate,
//     numNight,
//     numGuests,
//     totalPrice,
//     status,
//     Guests: { fullname: guestName, email },
//     Cabins: { name: cabinName },
//   },
// }) {

//   return (
//     <>
//       <div  className="grid grid-cols-7 gap-4 px-8 py-4 items-center bg-white p">
      
//         <div className="font-semibold text-black text-lg font-sono">
//           {cabinName}
//         </div>
        
//         <div className="font-semibold text-black text-lg font-sono">
//           <span>{guestName}</span>
//           <span>{email}</span>
//         </div>
        
//         <div className="font-semibold text-black text-lg font-sono">
//           {startdate} {endDate}
//         </div>

//       </div> 
    
//     </>
//   );
// }

// export default BookingsRow;

const BookingsRow = ({ booking }) => {
  const {
    id,
    created_at,
    startdate,
    enddate,
    numNight,
    numGuests,
    totalPrice,
    status,
    Guests,
    Cabins,
  } = booking;

  return (
    <div className="grid grid-cols-7 gap-4 px-8 py-4 items-center bg-white border-b border-gray-200">
      <div className="font-semibold text-black text-lg font-sono">
        {Cabins?.name}
      </div>

      <div className="font-semibold text-black text-lg font-sono">
        <div>{Guests?.fullname}</div>
        <div className="text-sm text-gray-500">{Guests?.email}</div>
      </div>

      <div className="font-semibold text-black text-lg font-sono">
        <div>{startdate}</div>
        <div className="text-sm text-gray-500">{enddate}</div>
      </div>

      <div className="font-semibold text-black text-lg font-sono">
        {status}
      </div>

      <div className="font-semibold text-black text-lg font-sono">
        ${totalPrice}
      </div>

      <div></div>
    </div>
  );
};

export default BookingsRow;