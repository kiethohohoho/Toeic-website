import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectAuthorization } from "../reducers/authSlice";

const NonAuthRoute = ({ children }) => {
  const location = useLocation();

  const { isRole, isAuth } = useSelector(selectAuthorization);

  if (isAuth) {
    return <Navigate to={`/${isRole}/profile`} state={{ from: location }} />;
  }
  return children;
};

export default NonAuthRoute;
