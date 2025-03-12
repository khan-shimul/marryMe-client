import { useState } from "react";
import { Link, NavLink } from "react-router";
// import logo from "../../../assets/images/logo/logo-b.png";
import logo2 from "../../../assets/images/logo/logo-2.png";
import Button from "../../../components/Button/Button";

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
          All Profiles
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
    <div className="navbar font-poppins uppercase font-medium py-5 md:px-10 lg:px-20">
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
                : "menu menu-sm dropdown-content bg-base-100 rounded-box z-[20] mt-3 w-52 p-2 shadow "
            }`}
          >
            {navMenu}
            <Link to="login">
              <Button text="Join Now" />
            </Link>
          </ul>
        </div>
        <Link to="/" className="text-2xl flex items-center gap-x-2">
          <img className="h-8 md:h-14" src={logo2} alt="" />
          <span className="text-[#B57F3E] font-cinzel font-semibold">
            MarryMe
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end hidden md:flex">
        <Link to="login">
          <Button text="Join Now" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
