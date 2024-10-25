// import { HiSquare2Stack, HiPencil, HiTrash } from "react-icons/hi";
import { formatCurrency } from "../../utils/helpers";

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  return (
    <>
      <div
        role="row"
        className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-6 items-center py-4 px-6 border-b border-gray-100 last:border-0"
      >
        <img
          src={image}
          alt={`${name} cabin`}
          className="block w-16 aspect-[3/2] object-cover transform scale-150 -translate-x-1.5"
        />
        <div className="font-semibold text-gray-600 text-lg font-sono">
          {name}
        </div>
        <div>Fits up to {maxCapacity} guests</div>
        <div className="font-semibold font-sono">{formatCurrency(regularPrice)}</div>
        {discount ? (
          <div className="font-medium font-sono text-green-700">
            {formatCurrency(discount)}
          </div>
        ) : (
          <span>&mdash;</span>
        )}
        
      </div> 
    
    </>
  );
}

export default CabinRow;
