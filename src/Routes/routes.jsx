import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"; // Assuming this is your layout component
import Home from "../Pages/Home/Home/Home"; // Importing Home component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Your layout or wrapper component
    children: [
      {
        path: "/", // Route for Home
        element: <Home />,
      },
    ],
  },
]);

export default router;
