import { Route } from "react-router-dom";

export const renderRoutes = (routes) => {
  return routes.map((route) => {
    return (
      <Route key={Math.random()} path={route.path} element={route.element} />
    );
  });
};

export const renderParamRoutes = (routes) => {
  return routes.map((route) => {
    return (
      <Route
        key={Math.random()}
        path={`${route.current}/:${route.param}`}
        element={route.element}
      />
    );
  });
};
