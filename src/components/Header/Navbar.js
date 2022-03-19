import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import DrawerComponent from "./Drawer";

import "./Narbar.scss";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
              <Link className="btn" to="/login">
                Đăng nhập
              </Link>
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
