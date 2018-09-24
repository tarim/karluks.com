
  import * as React from 'react';
  //import { connect } from 'react-redux';
  import { Redirect,Route} from 'react-router';
  import decode from 'jwt-decode'
 

//   export default function (ComposedComponent) {
//     let Authentication = class Authentication extends React.Component{
  
//       componentWillMount() {
//         if (!checkAuth()) {
//             <Redirect push to='/login' />
//         }
//       }
//       render() {
//         return <ComposedComponent {...this.props} />
//       }
//     }
  
    // function mapStateToProps(state) {
    //   return { authenticated: state.auth.authenticated }
    // }
  
    // return connect(mapStateToProps)(Authentication)
   // return Authentication
 // }
  let Authentication = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
  
  export default Authentication;

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    if (!token || !refreshToken) {
      return false;
    }
  
    try {
      const { exp } = decode(refreshToken);
  
      if (exp < new Date().getTime() / 1000) {
        return false;
      }
  
    } catch (e) {
      return false;
    }
  
    return true;
  }



       
                 
        // const AuthRoute = ({ component: Component, ...rest }) => (
        //     <Route {...rest} render={props => (
        //       checkAuth() ? (
        //         <Component {...props} />
        //       ) : (
        //           <Redirect to={{ pathname: '/login' }} />
        //         )
        //     )} />
        //   )