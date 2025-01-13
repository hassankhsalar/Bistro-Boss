import React from "react";
import { FaBook, FaCalendar, FaList, FaMailBulk, FaShoppingCart, FaUsers, FaUtensilSpoon, FaVoicemail } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {

    const [cart] = useCart();

    //todo: get isAdmin value from the database
    const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-yellow-700">
        
        <ul className="menu ">
        {
            isAdmin ? 
            <>
            {/* Admin links */}
          <li className="hover:text-white">
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>My Cart [ {cart.length} ]
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/dashboard/adminhome">
              <FaHouse></FaHouse> Admin Home
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/dashboard/additems">
              <FaUtensilSpoon></FaUtensilSpoon> Add items
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/dashboard/manageitems">
              <FaList></FaList> Manage Items
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/dashboard/bookings">
              <FaBook></FaBook> Manage Bookings
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/dashboard/allusers">
              <FaUsers></FaUsers> All Users
            </NavLink>
          </li>
            </> 
            : 
            <>
            {/* user links */}
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
            </>
        }
            
        </ul>
        <div className="divider  w-44 mx-auto"></div>
        {/* shared links */}
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
          <li>
            <Link to="/contact"><FaMailBulk></FaMailBulk> Contact</Link>
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
