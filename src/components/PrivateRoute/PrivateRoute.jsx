import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

export const PrivateRoute = ({ children }) => {
  const {
    user: { token },
  } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
};
