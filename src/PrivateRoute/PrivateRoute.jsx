import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return children;
  }
 return <Navigate state={location.pathname} to="/auth/login" replace />;
 
};

export default PrivateRoute;
