import CircularProgress from "@mui/material/CircularProgress";
import { renderRoute } from "components/common/customRoute";
import { ROUTE_AUTH, ROUTE_HOME } from "contants/routes";
import { BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN PAGES */}
        {renderRoute(ROUTE_HOME)}
        {/* AUTH ROUTE */}
        {renderRoute(ROUTE_AUTH)}
      </Routes>
      {/* <Box sx={{ display: "flex" }}> */}
      <CircularProgress
        disableShrink
        size={80}
        color="success"
        sx={{
          position: "relative",
          left: "47%",
          top: "-200px",
        }}
      />
      {/* </Box> */}
    </BrowserRouter>
  );
}

export default App;
