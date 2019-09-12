import React, { Component } from 'react';
import { Router, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Snackbar } from "@rmwc/snackbar";

import Home from './pages/Home';
// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
// import Pricing from "./pages/PricingPage";
// import SignupProfile from "./pages/SignupProfile";
// import SignupPayment from "./pages/SignupPayment";
// import Billing from "./pages/Billing";
// import TopBar from "./components/TopBar";
// import auth from "./components/Auth";
import history from './history';
import { updateAppThunk } from './actions';
// import { isUIDev } from "./api/config";

import '@material/snackbar/dist/mdc.snackbar.css';
import './App.css';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const allowedPaths = ["/signup/profile", "/signup/payment", "/billing"];
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (auth.isAuthenticated() || isUIDev) {
//           if (auth.isActive() || allowedPaths.includes(props.match.path)) {
//             const redirectPath = window.localStorage.getItem(
//               "stash_redirect_path"
//             );
//             if (redirectPath) {
//               window.localStorage.removeItem("stash_redirect_path");
//               return <Redirect to={redirectPath} />;
//             }
//             return (
//               <div>
//                 <TopBar />
//                 <Component {...props} />
//               </div>
//             );
//           } else {
//             if (auth.isCustomer()) {
//               return <Redirect to="/billing" />;
//             } else {
//               return <Redirect to="/signup/profile" />;
//             }
//           }
//         } else {
//           window.localStorage.setItem("stash_redirect_path", props.match.url);
//           return <Redirect to="/signin" />;
//         }
//       }}
//     />
//   );
// };

class App extends Component {
   state = {
      isLoading: false,
      error: ''
   };

   render() {
      const { app, updateApp } = this.props;
      const { isLoading, error } = this.state;
      if (isLoading) {
         return <div>loading...</div>;
      }
      if (error) {
         return <div>{error}. Please contact our support.</div>;
      }

      return (
         <Router history={history}>
            <div className='App__container'>
               <Route exact path='/' component={Home} />
               <Route exact path='/search/suburb' component={Home}></Route>
               <Route exact path='/search/address' component={Home}></Route>
               {/* <Route
            exact
            path="/offer/:referrer"
            render={props => {
              const referrer = props.match.params.referrer;
              updateApp:({ referrer });
              return <Redirect to="/signup" />;
            }}
          />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup/pricing" component={Pricing} />
          <PrivateRoute
            exact
            path="/signup/profile"
            component={SignupProfile}
          />
          <PrivateRoute
            exact
            path="/signup/payment"
            component={SignupPayment}
          />
          <PrivateRoute
            exact
            path={[
              "/",
              "/my-properties",
              "/my-properties/:propertyId",
              "/search/:propertyId",
              "/address/:propertyId"
            ]}
            props={this.props}
            component={Home}
          />
          <PrivateRoute
            exact
            path="/profile"
            props={this.props}
            component={SignupProfile}
          />
          <PrivateRoute
            exact
            path="/billing"
            props={this.props}
            component={Billing}
          />
          <Snackbar
            show={app.error}
            onShow={evt => updateApp:({ error: false })}
            message={app.error}
            actionText="Dismiss"
            actionHandler={() => {}}
            alignStart
          /> */}
            </div>
         </Router>
      );
   }
}

const mapStateToProps = ({ profile, app }) => ({
   app,
   profile
});

const actionCreators = {
   updateApp: updateAppThunk
};

export default connect(
   mapStateToProps,
   actionCreators
)(withRouter(App));
