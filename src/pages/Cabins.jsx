import CabinTable from "../features/cabin/CabinTable";

export default function Cabin() {

  return (
    <div>
      <div className="flex justify-between my-4 px-1">
        <h5 className="font-bold text-xl">All Cabins</h5>  
        <span className=""> filter/sort
        </span>  
      </div>
      <CabinTable/>
    </div>
  )
}
