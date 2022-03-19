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
    <div>
      <AppBar position="static" className="navbar">
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
              <NavLink to="/reviews">Đánh giá</NavLink>
              <Link className="btn" to="/login">
                Đăng nhập
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
}
export default Navbar;
