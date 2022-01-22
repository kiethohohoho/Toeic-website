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
    </BrowserRouter>
  );
}

export default App;
