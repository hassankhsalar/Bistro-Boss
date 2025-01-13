import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Menu/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../secret/Secret";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/cart/Cart";
import AllUsers from "../pages/Dashboard/cart/allUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>,
      },

    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      },


      //admin routes
      {
        path: '/dashboard/allusers',
        element: <AllUsers></AllUsers>
      }
    ]
  },
]);
