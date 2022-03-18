import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "containers/MainPage/Header/Navbar";
import { SIMPLE_PAGES, PARAM_PAGES } from "contants/routes";
import { renderRoutes, renderParamRoutes } from "components/common/customRoute";
import courseApi from "apis/courseApi";
function App() {
  const getApiCourse = async () => {
    try {
      const reponse = await courseApi.getAllCourse();
      console.log(reponse);
    } catch (error) {
      console.log("lỗi r", { error });
    }
  };
  getApiCourse();
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
