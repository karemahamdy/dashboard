
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    price,
    discount,
    image,
    description,
  } = cabin;

  return (
    <>
      <div  className="grid grid-cols-7 gap-4 px-8 py-4 items-center bg-white p">
        <img
          src={image}
          alt={`${name} cabin`}
          className="block w-16 aspect-[3/2] object-cover transform scale-150 -translate-x-1.5"
        />
        <div className="font-semibold text-black text-lg font-sono">
          {name}
        </div>
        
        <div>Fits up to {maxCapacity} guests</div>
        
        <div className="font-semibold font-sono">{formatCurrency(price)}</div>
        {discount ? (
          <div className="font-medium font-sono text-gn-700">
            {formatCurrency(discount)}
          </div>
        ) : (
          <span>&mdash;</span>
        )}
        <Button bg="bg-red-600" hover="hover:bg-red-700">Delete</Button>
        <Button bg="bg-blue-600" hover="hover:bg-blue-700">Edit</Button>
      </div> 
    
    </>
  );
}

export default CabinRow;
