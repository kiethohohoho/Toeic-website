import { Route } from "react-router-dom";

//render routes
export const renderRoute = (routes) => {
  if (routes.lenght === 0) {
    return;
  } else {
    return routes.map((route, index) => {
      return <Route key={index} path={route.path} element={route.element} />;
    });
  }
};
