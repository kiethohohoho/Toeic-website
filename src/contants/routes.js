import Admin from "features/Admin/Admin";
import AdminProfile from "features/Admin/AdminProfile";
import ForgotPassword from "features/Auth/ForgotPassword";
import Login from "features/Auth/Login";
import Register from "features/Auth/Register";
import Contact from "features/MainPage/Contact";
import Course from "features/MainPage/Coures";
import CourseDetail from "features/MainPage/Coures/CourseDetail";
import HomePage from "features/MainPage/HomePage";
import NotFound from "features/MainPage/NotFound";
import Review from "features/MainPage/Review";
import Student from "features/Student/Student";
import StudentProfile from "features/Student/StudentProfile";

// main route
const MAIN_ROUTE = [
  {
    role: "page",
    path: "/",
    element: <HomePage />,
  },
  {
    role: "page",
    path: "/contact",
    element: <Contact />,
  },
  {
    role: "page",
    path: "/review",
    element: <Review />,
  },
  {
    role: "page",
    path: "/contact",
    element: <Contact />,
  },
  {
    role: "page",
    path: "/courses",
    element: <Course />,
  },
  {
    role: "page",
    path: "/courses/:id",
    element: <CourseDetail />,
  },

  { role: "page", path: "/*", element: <NotFound /> },
];

//auth route
const AUTH_ROUTE = [
  { role: "auth", path: "/login", element: <Login /> },
  { role: "auth", path: "/register", element: <Register /> },
  { role: "auth", path: "/forgot_password", element: <ForgotPassword /> },
];

// admin route
const ADMIN_ROUTE = [
  { role: "admin", path: "/admin", element: <Admin /> },
  { role: "admin", path: "/admin/profile", element: <AdminProfile /> },
];

// Student route
const STUDENT_ROUTE = [
  { role: "user", path: "/student", element: <Student /> },
  { role: "user", path: "/student/profile", element: <StudentProfile /> },
];

export { MAIN_ROUTE, AUTH_ROUTE, ADMIN_ROUTE, STUDENT_ROUTE };
