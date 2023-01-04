import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import NavBar from "./NavBar";
import React from "react";
import PropTypes from "prop-types";

const Layout = () => {
  const { currentUser } = useContext(AuthContext);

  Layout.propTypes = {
    children: PropTypes.bool,
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      console.log(currentUser);
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <>
      <NavBar />
      <main>
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>{" "}
      </main>
    </>
  );
};

export default Layout;
