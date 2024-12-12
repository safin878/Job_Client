import { NavLink, Link, Outlet, useNavigate } from "react-router";
import { CiLogout } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import useAuth from "../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { MdLibraryBooks } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";

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
    <div className="flex gap-100 min-h-screen">
      {/* Sidebar with glassy effect */}
      <div className="w-64 min-h-screen bg-black bg-opacity-80 backdrop-blur-lg flex flex-col justify-between  p-4 ">
        <div>
          <ul className="menu space-y-4">
            <li>
              <NavLink
                to="lessonsD"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <MdLibraryBooks />
                Lessons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="addLessons"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <MdAddTask />
                Add Lessons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="addVocab"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <MdAddTask />
                Add Vocabularies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="users"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <FaUsers />
                Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="LManage"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <MdManageHistory />
                Lesson Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="VManage"
                className="text-white hover:bg-black hover:text-white p-2 rounded-md transition duration-300"
                activeClassName="bg-black text-white"
              >
                <MdManageHistory />
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
