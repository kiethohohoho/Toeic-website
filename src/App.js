import {
  ADMIN_ROUTE,
  AUTH_ROUTE,
  MAIN_ROUTE,
  STUDENT_ROUTE,
} from "contants/routes";
import { BrowserRouter, Routes } from "react-router-dom";
import { authRoute, mainRoute, privateRoute } from "routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {mainRoute(MAIN_ROUTE)}
        {authRoute(AUTH_ROUTE)}
        {privateRoute(ADMIN_ROUTE)}
        {privateRoute(STUDENT_ROUTE)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
