import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Logout from "features/Auth/Logout";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { selectAuthorization } from "reducers/authSlice";
import DrawerComponent from "./Drawer";
import "./Narbar.scss";

function Navbar() {
  const { isAuth } = useSelector(selectAuthorization);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="fixed" className="navbar px-30">
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
                <Logout />
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
      {/* outlet in here */}
      <div className="contentChildren">
        <Outlet />
      </div>
    </>
  );
}
export default Navbar;
