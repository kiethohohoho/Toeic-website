import ForgotPassword from "containers/Auth/ForgotPassword";
import Login from "containers/Auth/Login";
import Register from "containers/Auth/Register";
import HomePage from "containers/MainPage/HomePage";
import NotFound from "containers/MainPage/NotFound";
import Courses from "containers/Courses";
import Course from "containers/Course";

export const SIMPLE_PAGES = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "forgot_password",
    element: <ForgotPassword />,
  },
  {
    path: "courses",
    element: <Courses />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const PARAM_PAGES = [
  {
    param: "course",
    current: "courses",
    element: <Course />,
  },
];
