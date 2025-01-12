import React from "react";
import { FaCalendar, FaList, FaShoppingCart } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {

    const [cart] = useCart();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-yellow-700">
        <ul className="menu ">
          <li className="hover:text-white">
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>My Cart [ {cart.length} ]
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/dashboard/userhome">
              <FaHouse></FaHouse> User Home
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/dashboard/payment">
              <FaHouse></FaHouse>Payment History
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/dashboard/review">
              <FaHouse></FaHouse>Add Review
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/dashboard/mybooking">
              <FaHouse></FaHouse>My Booking
            </NavLink>
          </li>
        </ul>
        <div className="divider  w-44 mx-auto"></div>
        <ul className="menu ">
          <li>
            <Link to="/"> <FaHouse></FaHouse> Home</Link>
          </li>
          <li>
            <Link to="/menu"><FaCalendar></FaCalendar>Menu</Link>
          </li>
          <li>
            <Link to="/order"><FaList></FaList>Order</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
