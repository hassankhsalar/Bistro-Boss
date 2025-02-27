
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
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
