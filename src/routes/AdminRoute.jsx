import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = (children) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const [user, loading] = useAuth();
    const location = useLocation();

  // Show a loading indicator while the auth state is being determined
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }

  // Redirect to login and save the current location for post-login redirection
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;