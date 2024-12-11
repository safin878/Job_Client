import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Dropdown, Avatar } from "flowbite-react";
import Swal from "sweetalert2";
// import useRole from "./../../Hooks/useRole/useRole";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { User, logOut } = useAuth();
  // const [role, isLoading, refetch] = useRole();

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Detect when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sign Out Successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/lessons"
          className={({ isActive }) =>
            isActive
              ? "font-semibold border-b-4 border-blue-500"
              : "font-semibold"
          }
        >
          Lessons
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tutorials"
          className={({ isActive }) =>
            isActive
              ? "font-semibold border-b-4 border-blue-500"
              : "font-semibold"
          }
        >
          Tutorials
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className={`navbar bg-base-100 ${isScrolled ? "scrolled" : ""}`}>
        {/* Navbar start */}
        <div className="navbar-start">
          {/* Dropdown for mobile */}
          <div className="dropdown">
            <button
              type="button"
              tabIndex={0}
              onClick={handleDropdownToggle}
              className="btn btn-ghost lg:hidden"
            >
              <svg
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
            </button>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navOptions}
              </ul>
            )}
          </div>

          <Link to="/">
            <div className="text-xl flex items-center justify-center gap-2 ">
              <div>
                <img
                  className="w-12 rounded-full"
                  src="https://i.postimg.cc/0QsW4v9h/1.png"
                  alt=""
                />
              </div>

              <div>
                Vocab<span className="text-blue-400">Sakura</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Navbar center (for desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        {/* Navbar end */}
        {/* <div className="navbar-end gap-2">
          <Link to="/login">
            <a className="btn">Login</a>
          </Link>
          <Link to="/register">
            <a className="btn">Register</a>
          </Link>
        </div> */}
        <div className="navbar-end gap-3">
          {!User && (
            <div className="flex gap-4">
              <Link to="/login">
                <button className="btn  ">Sign In</button>
              </Link>
              <Link to="/register">
                <button className="btn  ">Sign Up</button>
              </Link>
            </div>
          )}
          {User && (
            <div>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={User?.photoURL} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{User?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {User?.email}
                  </span>
                </Dropdown.Header>
                {/* {role === "admin" && (
                  <Link to="/dashboard/adminProfile">
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                  </Link>
                )} */}

                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
