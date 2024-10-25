
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

function CabinTable() {
  const { isLoading, Cabins } = useCabins();

  if (isLoading) return <span>loading </span>;

  return (
    <div
      role="table"
      className="border border-gray-200 text-[1.4rem] bg-gray-50 rounded-lg overflow-hidden"
    >
      <header
        role="row"
        className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-6 items-center bg-gray-50 border-b border-gray-100 uppercase tracking-wide font-semibold text-gray-600 py-4 px-6"
      >
        <div></div>
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
