import ForgotPassword from "containers/Auth/ForgotPassword";
import Login from "containers/Auth/Login";
import Register from "containers/Auth/Register";
import HomePage from "containers/MainPage/HomePage";
import NotFound from "containers/MainPage/NotFound";

export const ROUTE_HOME = [
  {
    name: "Trang chính",
    path: "",
    element: <HomePage />,
  },
  {
    name: "Trang không tồn tại",
    path: "*",
    element: <NotFound />,
  },
];
export const ROUTE_AUTH = [
  {
    name: "Đăng nhập",
    path: "login",
    element: <Login />,
  },
  {
    name: "Đăng ký",
    path: "register",
    element: <Register />,
  },
  {
    name: "Quên mật khẩu",
    path: "forgot_password",
    element: <ForgotPassword />,
  },
];
