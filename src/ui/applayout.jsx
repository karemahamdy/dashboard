import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"


const Applayout = () => {
  return (
    <div className="grid grid-cols-[15rem,1fr] grid-rows-[auto,1fr] h-[100vh]" >
      <Header />
      <Sidebar />
      <main className="p-4 bg-gray-100">
      <Outlet />
      </main>

    </div>
  )
}

export default Applayout
