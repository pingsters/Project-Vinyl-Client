import Home from './../components/home';
import Login from './../components/login';
import Map from './../components/map';
import Register from './../components/register';

import HomeRoute from './../routes/homeRoute';
import LoginRoute from './../routes/loginRoute';
import MapRoute from './../routes/mapRoute';
import RegisterRoute from './../routes/registerRoute';

export function homeNavigatorRoute() {
  return {
    Component: Home,
    queryConfig: new HomeRoute()
  };
}

export function loginNavigatorRoute() {
  return {
    Component: Login,
    queryConfig: new LoginRoute()
  };
}

export function registerNavigatorRoute() {
  return {
    Component: Register,
    queryConfig: new RegisterRoute()
  };
}

export function mapNavigatorRoute() {
  return {
    Component: Map,
    queryConfig: new MapRoute()
  };
}
