import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { selectAuthorization } from "reducers/authSlice";
import DrawerComponent from "./Drawer";
import { isLogout } from "reducers/authSlice";
import { useNavigate } from "react-router-dom";
import "./Narbar.scss";

function Navbar() {
  const { isAuth } = useSelector(selectAuthorization);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleLogout = () => {
    dispatch(isLogout());
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <AppBar position="static" className="navbar px-30">
        {/* <CssBaseline /> */}
        <Toolbar className="flex-row-between navbarHeader">
          <Typography variant="h4" className="navbarLogo">
            Hoàng Toeic
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className="menuNav flex-row-center">
              <NavLink to="/">Trang chủ</NavLink>
              <NavLink to="/courses">Các khoá học</NavLink>
              <NavLink to="/review">Đánh giá</NavLink>
              <NavLink to="/contact">Liên hệ</NavLink>
              {!isAuth ? (
                <Link className="btn" to="/login">
                  Đăng nhập
                </Link>
              ) : (
                <button className="btn" onClick={() => handleLogout()}>
                  Đăng xuất
                </button>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
      {/* outlet in here */}
      <div className="my-20">
        <Outlet />
      </div>
    </>
  );
}
export default Navbar;
