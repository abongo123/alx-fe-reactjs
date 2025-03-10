import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth(); // Get auth state

  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;

