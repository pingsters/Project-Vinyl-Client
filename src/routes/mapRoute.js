import Relay from 'react-relay';

export default class MapRoute extends Relay.Route {
  static routeName = 'MapRoute';
  static queries = {
    User: (Component, variables) => {
      return Relay.QL `
          query {
              enteredUsers(bottomLeft: [0,1], upperRight: [2,3]) {
                  ${Component.getFragment('User')}
              }
          }
      `
    }
  };
}
