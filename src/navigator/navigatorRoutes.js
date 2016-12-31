import Home from './../components/home';
import Map from './../components/map';

import HomeRoute from './../routes/homeRoute';
import MapRoute from './../routes/mapRoute';

export function homeNavigatorRoute() {
  return {
    // Home is a Relay.Container
    Component: Home,
    queryConfig: new HomeRoute(),
  };
}

export function mapNavigatorRoute() {
  return {
    Component: Map,
    queryConfig: new MapRoute(),
  };
}
