import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "./../Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet /> {/* This will render the child routes */}
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
