import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Applayout from './ui/AppLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
  },
      {
        path: "*",
      element: <h1>nothing here</h1>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  
  </StrictMode>,
);
