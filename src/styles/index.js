import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
