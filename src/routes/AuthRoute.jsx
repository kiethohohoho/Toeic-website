import AccessDenied from "features/MainPage/AccessDenied";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectAuthorization } from "reducers/authSlice";

const AuthRoute = ({ children, roles }) => {
  const location = useLocation();

  const { isAuth, isRole } = useSelector(selectAuthorization);

  // admin ?== [admin, student,??]
  const userHasRequiredRole = roles.includes(isRole) ? true : false;

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  if (isAuth && !userHasRequiredRole) {
    return <AccessDenied />;
  }
  return children;
};

export default AuthRoute;
