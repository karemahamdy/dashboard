import { Outlet } from "react-router-dom"


const Applayout = () => {
  return (
    <div>
      <h1 className="bg-orange-500">karema</h1>
      <Outlet/>
    </div>
  )
}

export default Applayout
