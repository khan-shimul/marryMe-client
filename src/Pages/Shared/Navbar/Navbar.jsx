import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [clicked, setClicked] = useState(null);
  const navMenu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-[#68471F]"
          }
          onClick={() => setClicked(!clicked)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="bio-data"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-[#68471F]"
          }
          onClick={() => setClicked(!clicked)}
        >
          Biodatas
        </NavLink>
      </li>
      <li>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-[#68471F]"
          }
          onClick={() => setClicked(!clicked)}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-[#68471F]"
          }
          onClick={() => setClicked(!clicked)}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 font-poppins">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              onClick={() => setClicked(!clicked)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`${
              !clicked
                ? "hidden"
                : "menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            }`}
          >
            {navMenu}
            <Link to="login" className="btn btn-sm">
              Login
            </Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">MarryMe</a>
      </div>
      <div className="navbar-center hidden hover:bg-none lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end hidden md:flex">
        <Link to="login" className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
