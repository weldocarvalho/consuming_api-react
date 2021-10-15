import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({
  component: Component,
  isPrivate,
  ...rest
}) {
  const isAuthenticated = false;

  if (isPrivate && !isAuthenticated) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            previousPath: rest.location.pathname,
          },
        }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

PrivateRoute.defaultProps = {
  isPrivate: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
};
