import {
  // renderRoute,
  renderRouteWithChildren,
} from "components/common/customRoute";
// import { ROUTE_AUTH, ROUTE_HOME } from "contants/routes";
import { BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* {renderRoute(ROUTE_HOME)} */}
        {/* {renderRoute(ROUTE_AUTH)} */}
        {renderRouteWithChildren()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
