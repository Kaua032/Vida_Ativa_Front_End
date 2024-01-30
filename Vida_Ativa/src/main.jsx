import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyled } from "./GlobalStyled.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import UserProvider from "./Context/UserContext.jsx";
import Teachers from "./Pages/Teachers/Teachers.jsx";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  let navigate = useNavigate();
  let token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);

  return token ? null : children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Login />,
      </PrivateRoute>
    ),
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/teachers",
    element: <Teachers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
