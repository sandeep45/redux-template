import React from "react"
import { Route, IndexRoute } from "react-router"

import {getAttributeOfAuthenticatedUser} from '../reducers/'

import App from "../components/App"
import Login from "../containers/auth/Login"
import SignUp from "../containers/auth/SignUp"
import ForgotPassword from "../containers/auth/ForgotPassword"
import HelloWorld from "../components/HelloWorld"
import PageNotFound from "../components/PageNotFound"
import PaginatedPhoneNumbers from "../containers/PaginatedPhoneNumbers"


const routes = (store) => {

  function requireAuth(nextState, replace) {
    if (!getAttributeOfAuthenticatedUser(store.getState(), "authentication_token")){
      replace({
        pathname: '/login',
      })
    }
  }

  return (
      <div>
        <Route path="/" component={App} onEnter={requireAuth}>
          <IndexRoute component={HelloWorld} />
          <Route path="/paginated_phone_numbers" component={PaginatedPhoneNumbers} />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot_password" component={ForgotPassword} />
        <Route path="*" component={PageNotFound} />
      </div>
  );
}

export default routes;
