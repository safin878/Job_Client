import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Lessons from "../Pages/Home/Lessons/Lessons";
import Tutorials from "../Pages/Home/Tutorials/Tutorials";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lessons",
        element: (
          <PrivateRoute>
            <Lessons />
          </PrivateRoute>
        ),
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            <Tutorials />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
