import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "./../Shared/NavBar/NavBar";
import Banner from "./../Components/Banner/Banner";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Outlet /> {/* This will render the child routes */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
