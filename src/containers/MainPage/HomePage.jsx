import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  isUpMd: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      fontFamily: "Merienda, cursive",
    },
  },
  img: {
    background:
      "url(https://d35aaqx5ub95lt.cloudfront.net/images/331a32943ff73be28537dfc7469d5639.svg)",
    backgroundSize: 300,
    height: 300,
    width: 300,
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.up("md")]: {
      backgroundSize: 360,
      height: 360,
      width: 360,
    },
  },
  main: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#235390",
    backgroundImage:
      "url(https://d35aaqx5ub95lt.cloudfront.net/images/star-pattern.svg)",
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <Box sx={{ maxHeight: "100vh", overflow: "hidden" }}>
      <AppBar position="static">
        <Toolbar
          sx={{ justifyContent: "space-evenly", backgroundColor: "#235390" }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontFamily: "Merienda, cursive" }}
          >
            Genny TOEIC Product
          </Typography>
          <Typography variant="p" component="div" className={classes.isUpMd}>
            Home Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container columnSpacing={{ lg: 3 }} className={classes.main}>
        <Grid item className={classes.img}></Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            rowSpacing={{ lg: 4, xs: 2 }}
            justifyContent="center"
            alignItems="center"
            sx={(theme) => ({ [theme.breakpoints.down("sm")]: { mt: -20 } })}
          >
            <Grid item>
              <Typography
                variant="h6"
                sx={(theme) => ({
                  color: "#fff",
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: 30,
                  [theme.breakpoints.down("md")]: {
                    fontSize: 18,
                  },
                })}
              >
                Cách học ngôn ngữ miễn phí, vui nhộn và hiệu quả!
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                href="/register"
                color="success"
                size="large"
                sx={{ borderRadius: 3.5, minWidth: 300 }}
              >
                Đăng ký tài khoản
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                href="/login"
                size="large"
                sx={{ borderRadius: 3.5, minWidth: 300 }}
              >
                Đăng nhập
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
