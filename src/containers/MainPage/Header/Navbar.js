import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link, Outlet } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    fontFamily: "'Merienda', cursive",
  },
  navBackground: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px 0 rgb(0 0 0 / 5%)",
    color: theme.palette.info.main,
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontFamily: "'Merienda', cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
      textAlign: "center",
    },
  },
  link: {
    textDecoration: "none",
    fontSize: "20px",
    marginLeft: theme.spacing(7),
    color: "#333 !important",
    backgroundColor: "#e8ebed",
    padding: 10,
    borderRadius: 16,
    overFlow: "hidden",

    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="static" className={classes.navBackground}>
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Hoàng Toeic
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/login" className={classes.link}>
                Log In
              </Link>
              <Link to="/register" className={classes.link}>
                Register
              </Link>
              <Link to="/faq" className={classes.link}>
                FAQ
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
export default Navbar;
