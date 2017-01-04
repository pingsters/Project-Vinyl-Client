import Relay from 'react-relay';

export default class mapRoute extends Relay.Route {
  static routeName = 'MapRoute';
  static paramDefinitions = {
    $bottomLeft: {required: true},
  };
  static queries = {
    enteredUsers: (Component) => {
      console.log(Component)
      return Relay.QL `
          query {
              enteredUsers {
                  point {
                      type
                      coordinates
                  }
              }
          }
      `;
    }
    // viewer: () => Relay.QL`query { viewer }`
  };
}
