import Accordion from "components/DashBoard/views/base/accordion/Accordion";
import Breadcrumbs from "components/DashBoard/views/base/breadcrumbs/Breadcrumbs";
import Revenue from "components/DashBoard/views/dashboard/Dashboard";
import Colors from "components/DashBoard/views/theme/colors/Colors";
import Typography from "components/DashBoard/views/theme/typography/Typography";
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
import Teacher from "features/Teacher/Teacher";
import TeacherProfile from "features/Teacher/TeacherProfile";

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
  // { role: "admin", path: "/admin/theme", element: <Colors /> },
];

const DASHBOARD_ROUTE = [
  {
    role: "admin",
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "theme/colors", element: <Colors /> },
      { path: "theme/typography", element: <Typography /> },
      { path: "base/accordion", element: <Accordion /> },
      { path: "base/breadcrumbs", element: <Breadcrumbs /> },
    ],
  },
  {
    role: "teacher",
    path: "/teacher",
    element: <Admin />,
    children: [
      { path: "theme/colors", element: <Colors /> },
      { path: "theme/typography", element: <Typography /> },
      { path: "base/accordion", element: <Accordion /> },
      { path: "base/breadcrumbs", element: <Breadcrumbs /> },
      { path: "revenue", element: <Revenue /> },
    ],
  },
];

// Student route
const STUDENT_ROUTE = [
  { role: "student", path: "/student", element: <Student /> },
  { role: "student", path: "/student/profile", element: <StudentProfile /> },
];

// Teacher route
const TEACHER_ROUTE = [
  { role: "teacher", path: "/teacher", element: <Teacher /> },
  { role: "teacher", path: "/teacher/profile", element: <TeacherProfile /> },
];

export {
  MAIN_ROUTE,
  AUTH_ROUTE,
  ADMIN_ROUTE,
  TEACHER_ROUTE,
  STUDENT_ROUTE,
  DASHBOARD_ROUTE,
};
