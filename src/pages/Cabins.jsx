import CabinTable from "../features/cabin/CabinTable";
import CreateCabin from "../features/cabin/CreateCabin";

export default function Cabin() {

  return (
    <div>
      <div className="flex justify-between my-4 px-1">
        <h5 className="font-bold text-xl">All Cabins</h5>  
        <span className=""> filter/sort
        </span>  
      </div>
      <CreateCabin/>
      <CabinTable/>
    </div>
  )
}
