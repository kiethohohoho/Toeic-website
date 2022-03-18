import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { headerStyles } from "styles";
import DrawerComponent from "./Drawer";

import "./Narbar.scss";

function Navbar() {
  const classes = headerStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <AppBar position="static" className={classes.navBackground}>
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Hoàng Toeic
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className="menuNav">
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
