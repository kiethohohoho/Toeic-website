import { Route } from "react-router-dom";

// regex check mail
export const checkEmail = (email) => {
  const reg =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
  if (reg.test(email)) return true;
};

//locale number
export const localeNumber = (number) => number.toLocaleString();

// custom route
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
