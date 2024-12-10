import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "./../Shared/NavBar/NavBar";
import Banner from "./../Components/Banner/Banner";

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
