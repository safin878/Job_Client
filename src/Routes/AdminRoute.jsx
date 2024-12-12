import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";

const AdminRoute = ({ children }) => {
  const { User, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
        <span className="loading loading-bars loading-lg text-blue-500"></span>
      </div>
    );
  }

  if (User && User.role === "admin") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
