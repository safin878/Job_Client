// import { NavLink, Link, Outlet } from "react-router";
// import { CiLogout } from "react-icons/ci";
// import { CgProfile } from "react-icons/cg";
// import { FaUsers } from "react-icons/fa";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { LuGitPullRequestClosed } from "react-icons/lu";
// import { LuTicket } from "react-icons/lu";
// import useAuth from "../Hooks/useAuth/useAuth";

// const Dashboard = () => {
//   const { logOut } = useAuth();
//   const handleLogOut = () => {
//     logOut();
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Sign Out Successful",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };
//   return (
//     <div className="flex gap-10 ">
//       <div className="w-64  min-h-screen bg-[#39d8d0] flex flex-col justify-between ">
//         <div>
//           <ul className="menu">
//             <>
//               <li>
//                 <NavLink to="/dashboard/adminProfile">
//                   <CgProfile />
//                   Admin Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/mangeMembers">
//                   <FaUsers></FaUsers>
//                   Mange Members
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/makeAnnouncement">
//                   <TfiAnnouncement></TfiAnnouncement>
//                   Make Announcement
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/AgreementReq">
//                   <LuGitPullRequestClosed />
//                   Agreement Request
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/manageCoupon">
//                   <LuTicket></LuTicket>
//                   Manage Coupon
//                 </NavLink>
//               </li>
//             </>
//           </ul>
//         </div>

//         <div className="divider">OR</div>

//         <div>
//           <ul className="menu">
//             <li>
//               <Link onClick={handleLogOut}>
//                 <CiLogout />
//                 LogOut
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex-1">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { NavLink, Link, Outlet, useNavigate } from "react-router";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { LuGitPullRequestClosed } from "react-icons/lu";
import { LuTicket } from "react-icons/lu";
import useAuth from "../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import Lessons from "./../Pages/Home/Lessons/Lessons";

const Dashboard = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const from = "/login";
  const handleLogOut = () => {
    logOut();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sign Out Successful",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate(from);
  };

  return (
    <div className="flex gap-10 min-h-screen">
      {/* Sidebar with glassy effect */}
      <div className="w-64 min-h-screen bg-black bg-opacity-80 backdrop-blur-lg flex flex-col justify-between  p-4">
        <div>
          <ul className="menu space-y-4">
            <li>
              <NavLink
                to="lessonsD"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <CgProfile />
                Lessons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="addLessons"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <FaUsers />
                Add Lessons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="addVocab"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <TfiAnnouncement />
                Add Vocabularies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="users"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <TfiAnnouncement />
                Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="LManage"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <LuGitPullRequestClosed />
                Lesson Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="VManage"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <LuTicket />
                Vocabulary Management
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <ul className="menu">
            <li>
              <Link
                onClick={handleLogOut}
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
              >
                <CiLogout />
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1  ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
