import { NavLink } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex gap-10">
      <div className="w-64 min-h-screen bg-[#d89339] flex flex-col justify-between ">
        <div>
          <ul className="menu">
            <>
              <li>
                <NavLink to="/dashboard/adminProfile">
                  <CgProfile />
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mangeMembers">
                  <FaUsers></FaUsers>
                  Mange Members
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAnnouncement">
                  <TfiAnnouncement></TfiAnnouncement>
                  Make Announcement
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/AgreementReq">
                  <LuGitPullRequestClosed />
                  Agreement Request
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCoupon">
                  <LuTicket></LuTicket>
                  Manage Coupon
                </NavLink>
              </li>
            </>
          </ul>
        </div>

        <div className="divider">OR</div>

        <div>
          <ul className="menu">
            <li>
              <Link onClick={handleLogOut}>
                <CiLogout />
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
