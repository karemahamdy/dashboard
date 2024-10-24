import { NavLink } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

function MainNav() {
  return (
    <nav className="pt-5">
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink
            to="/dashboard"
            className="flex items-center gap-3 p-3 text-gray-600 font-medium transition-colors duration-300 hover:text-gray-800 hover:bg-gray-100 rounded-md"
          >
            <HiOutlineHome className="w-6 h-6 text-[#db3025] transition-colors duration-300" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className="flex items-center gap-3 p-3 text-gray-600 font-medium transition-colors duration-300 hover:text-gray-800 hover:bg-gray-100 rounded-md"
          >
            <HiOutlineCalendarDays className="w-6 h-6 text-[#db3025] transition-colors duration-300" />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className="flex items-center gap-3 p-3 text-gray-600 font-medium transition-colors duration-300 hover:text-gray-800 hover:bg-gray-100 rounded-md"
          >
            <HiOutlineHomeModern className="w-6 h-6 text-[#db3025] transition-colors duration-300" />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className="flex items-center gap-3 p-3 text-gray-600 font-medium transition-colors duration-300 hover:text-gray-800 hover:bg-gray-100 rounded-md"
          >
            <HiOutlineUsers className="w-6 h-6 text-[#db3025] transition-colors duration-300" />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="flex items-center gap-3 p-3 text-gray-600 font-medium transition-colors duration-300 hover:text-gray-800 hover:bg-gray-100 rounded-md"
          >
            <HiOutlineCog6Tooth className="w-6 h-6 text-[#db3025] transition- duration-300" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
