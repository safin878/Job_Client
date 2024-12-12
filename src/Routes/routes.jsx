import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Lessons from "../Pages/Home/Lessons/Lessons";
import Tutorials from "../Pages/Home/Tutorials/Tutorials";
import PrivateRoute from "./PrivateRoute";
import LessonsD from "../Dasboard/LessonsD";
import Dashboard from "./../Dasboard/Dasboard";
import Add_Lessons from "./../Dasboard/Add_Lessons";
import Add_Vocabularies from "./../Dasboard/Add_Vocabularies";
import LManage from "./../Dasboard/LManage";
import VManage from "./../Dasboard/VManage";
import Users from "./../Dasboard/Users";
import LessonCard from "./../Pages/LessonCard/LessonCard";

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
      {
        path: "/addLessons/:lessonNumber",
        element: <LessonCard />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "lessonsD",
        element: <LessonsD></LessonsD>,
      },
      {
        path: "addLessons",
        element: <Add_Lessons></Add_Lessons>,
      },
      {
        path: "addVocab",
        element: <Add_Vocabularies></Add_Vocabularies>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "LManage",
        element: <LManage></LManage>,
      },
      {
        path: "VManage",
        element: <VManage></VManage>,
      },
    ],
  },
]);

export default router;
