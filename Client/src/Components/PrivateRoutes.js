import React, { useContext } from "react";
import { UserContext } from "./ContextUser";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  return !user.token ? <Navigate to="/" replace /> : children;
};

export default PrivateRoute;
