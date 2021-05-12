import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { role, isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        // eslint-disable-next-line eqeqeq
        if (isAuthenticated && role == "student") {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoutes;
