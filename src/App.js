import Colors from "components/DashBoard/views/theme/colors/Colors";
import {
  ADMIN_ROUTE,
  AUTH_ROUTE,
  MAIN_ROUTE,
  STUDENT_ROUTE,
  TEACHER_ROUTE,
  DASHBOARD_ROUTE,
} from "contants/routes";
import Admin from "features/Admin/Admin";
import { BrowserRouter, Routes } from "react-router-dom";
import { authRoute, mainRoute, privateRoute } from "routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {mainRoute(MAIN_ROUTE)}
        {authRoute(AUTH_ROUTE)}
        {privateRoute(ADMIN_ROUTE)}
        {privateRoute(TEACHER_ROUTE)}
        {privateRoute(STUDENT_ROUTE)}
        {/* <Route path="/admin" element={<Admin />}>
          <Route path="theme" element={<Colors />} />
        </Route> */}
        {privateRoute(DASHBOARD_ROUTE)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
