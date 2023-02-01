import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (!user) {
  }
  return children;
};

export default PrivateRoute;
