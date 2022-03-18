import { makeStyles } from "@material-ui/core";

// for header style
export const headerStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    fontFamily: "'Montserrat', sans-serif",
  },
  navBackground: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px 0 rgb(0 0 0 / 5%)",
    color: theme.palette.info.main,
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 900,
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
      textAlign: "center",
    },
  },
  link: {
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "14px",
    marginLeft: theme.spacing(2),
    color: "#333 !important",

    overFlow: "hidden",

    "&:hover": {
      //   color: theme.palette.info.main,
      textDecoration: "underline",
    },
  },
}));

// for slider banner
export const sliderStyles = makeStyles((theme) => ({
  sliderWrapper: {
    display: "flex",
    width: "100%",
    height: 300,
    padding: "20px 50px",
    borderRadius: 25,
  },
  sliderLeft: {
    flexBasis: "70%",
    fontFamily: "'Merienda', cursive",
    color: "#fff",
    lineHeight: 2,
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.7,
    },
  },
  sliderRight: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  main: {
    maxWidth: 600,
    marginTop: 0,
  },
  link: {
    color: "#fff !important",
    fontSize: "3rem",
    fontWeight: 900,
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
}));
