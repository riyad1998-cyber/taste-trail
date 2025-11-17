import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation(); 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (!user) {
 
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
