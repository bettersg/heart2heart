import React, { Component } from 'react';
import { Navigate, RouteProps, Route } from 'react-router-dom';

import { useAuthStatus } from '../Hooks/FirebaseAuthStatus';

type PrivateRouteProps = {
  path: RouteProps['path'];
  component: React.ElementType;
};

const ProtectedRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...props
}) => {
  // A custom hook to keep track of user's auth status
  const { loggedIn } = useAuthStatus();

  return (
    <Route
      {...props}
      render={(routeProps: RouteProps) =>
        loggedIn ? (
          <Component {...routeProps} />
        ) : (
          <Navigate replace to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
