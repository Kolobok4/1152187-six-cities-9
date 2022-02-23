import {RouteProps} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';

type PrivateRouteProps = RouteProps & {
  isLoggedIn: boolean;
  children: JSX.Element;
}

function PrivateRoute({children, isLoggedIn}: PrivateRouteProps): JSX.Element {
  return isLoggedIn ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
