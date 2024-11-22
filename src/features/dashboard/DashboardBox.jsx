import { Children } from "react";


const DashboardBox = function ({ Children }) {
  return (
    <>
      <div className="bg-grey-0 border border-grey-100 rounded-md">
      {Children}
      </div>

      </>
  )
}


export default DashboardBox;
