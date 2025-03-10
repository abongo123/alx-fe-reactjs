import { Navigate } from "react-router-dom";

function ProtectedRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;

