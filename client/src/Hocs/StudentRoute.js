import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const StudentRoutes = ({ component: Component, ...rest }) => {
  const { role, isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        } else if (isAuthenticated && role !== "student")
          return (
            <Redirect
              to={{ pathname: "/teacher", state: { from: props.location } }}
            />
          );
        return <Component {...props} />;
      }}
    />
  );
};

export default StudentRoutes;
