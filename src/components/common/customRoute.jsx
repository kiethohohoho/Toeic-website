import { Route } from "react-router-dom";
import Navbar from "../../containers/MainPage/Header/Navbar";
import HomePage from "../../containers/MainPage/HomePage";

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

const initParrent = {
  path: "/",
  element: <Navbar />,
};

const initChildren = [
  {
    path: "",
    element: <HomePage />,
  },
];

export const renderRouteWithChildren = (
  parrent = initParrent,
  children = initChildren
) => {
  return (
    <Route path={parrent.path} element={parrent.element}>
      {children.map((val) => (
        <Route key={Math.random()} path={val.path} element={val.element} />
      ))}
    </Route>
  );
};
