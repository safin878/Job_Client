// import React, { useState } from "react";
// import "./NavBar.css";

// const NavBar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const navOptions = (
//     <>
//       <li>
//         <a href="#lessons">Lessons</a>
//       </li>
//       <li>
//         <a href="#tutorials">Tutorials</a>
//       </li>
//     </>
//   );

//   return (
//     <div>
//       <div className="navbar bg-base-100">
//         {/* Navbar start */}
//         <div className="navbar-start">
//           {/* Dropdown for mobile */}
//           <div className="dropdown">
//             <button
//               type="button"
//               tabIndex={0}
//               onClick={handleDropdownToggle}
//               className="btn btn-ghost lg:hidden"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </button>
//             {isDropdownOpen && (
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//               >
//                 {navOptions}
//               </ul>
//             )}
//           </div>
//           {/* Brand name */}
//           <a className="btn btn-ghost text-xl">VocabSakura</a>
//         </div>

//         {/* Navbar center (for desktop) */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navOptions}</ul>
//         </div>

//         {/* Navbar end */}
//         <div className="navbar-end gap-2">
//           <a className="btn">Login</a>
//           <a className="btn">Sing Up</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navOptions = (
    <>
      <li>
        <a href="#lessons" className="font-semibold">
          Lessons
        </a>
      </li>
      <li>
        <a href="#tutorials" className="font-semibold">
          Tutorials
        </a>
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
          {/* Brand name */}
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
        </div>

        {/* Navbar center (for desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        {/* Navbar end */}
        <div className="navbar-end gap-2">
          <a className="btn">Login</a>
          <a className="btn">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
