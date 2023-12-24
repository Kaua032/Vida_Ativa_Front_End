import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyled } from "./GlobalStyled.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Home from "./Pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
