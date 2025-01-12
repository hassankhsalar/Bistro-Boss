import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show a loading indicator while the auth state is being determined
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  // Redirect to login and save the current location for post-login redirection
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
