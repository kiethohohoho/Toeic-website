import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "containers/MainPage/Header/Navbar";
import { SIMPLE_PAGES, PARAM_PAGES } from "contants/routes";
import { renderRoutes, renderParamRoutes } from "components/common/customRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {renderRoutes(SIMPLE_PAGES)}
          {renderParamRoutes(PARAM_PAGES)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
