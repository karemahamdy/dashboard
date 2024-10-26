import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import './App.css'

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Applayout from "./ui/AppLayout";
import Checkin from "./pages/Checkin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Applayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "bookings/:bookingId",
        element: <Bookings />,
      },
      {
        path: "checkin/:bookingId",
        element: <Checkin />,
      },
      {
        path: "cabins",
        element: <Cabins />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  const queryClient = new QueryClient ({
    defaultOptions: {
      queries: {
        staleTime: 0 
      }
    }
  })

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>

    </>
  )
}

export default App
