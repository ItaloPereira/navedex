import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '@utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const logged = isAuthenticated();
  return (
    <Route
      {...rest}
      render={props =>
        logged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/entrar",
              state: { from: props.location }
            }}
          />
        )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  location:  PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any), PropTypes.string])
}

PrivateRoute.defaultProps = {
  component: undefined,
  location: undefined
}

export default PrivateRoute;