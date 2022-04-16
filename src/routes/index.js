import { Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import NonAuthRoute from "./NonAuthRoute";

const mainRoute = (routes) => {
  return routes.map((route, index) => {
    return <Route key={index} path={route.path} element={route.element} />;
  });
};
const authRoute = (routes) => {
  return routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <NonAuthRoute roles={route.role}>{route.element}</NonAuthRoute>
        }
      />
    );
  });
};
const privateRoute = (routes) => {
  return routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        element={<AuthRoute roles={route.role}>{route.element}</AuthRoute>}
      >
        {route.children &&
          route.children.map((subLink, index) => (
            <Route key={index} path={subLink.path} element={subLink.element} />
          ))}
      </Route>
    );
  });
};

export { mainRoute, privateRoute, authRoute };
