import Loader from "../../ui/Loader";
import CabinRow from "./CabinRow";
import { useCabins } from "./UseCabins";

function CabinTable() {
  const { isLoading, Cabins } = useCabins();

  if (isLoading) return <Loader/>;

  return (
    <div
      role="table"
      className="w-full rounded-lg border border-gray-200 overflow-hidden"
    >
    
        {/* Header */}
        <header className="grid grid-cols-7 gap-4 bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div>Image</div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </header>
      { Cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
      </div>
  );
}

export default CabinTable;
