import React from "react"
import { Route, IndexRoute } from "react-router"

import {getAttributeOfAuthenticatedUser} from '../reducers/'

import App from "../components/App"
import BottomNav from "../components/nav/BottomNav"
import TabNav from "../components/nav/TabNav"
import CsvStatChart from "../containers/CsvStatChart"
import Auth from "../components/auth/Auth"
import Login from "../containers/auth/Login"
import SignUp from "../containers/auth/SignUp"
import ForgotPassword from "../containers/auth/ForgotPassword"
import HelloWorld from "../components/HelloWorld"
import PageNotFound from "../components/PageNotFound"
import PaginatedPhoneNumbers from "../containers/PaginatedPhoneNumbers"
import CsvUploader from "../containers/CsvUploader"
import ImageUploader from "../containers/ImageUploader"
import ModalPlayground from "../containers/ModalPlayground"


const routes = (store) => {

  function requireAuth(nextState, replace) {
    // if (!getAttributeOfAuthenticatedUser(store.getState(), "authentication_token")){
    //   replace({
    //     pathname: '/auth/login',
    //   })
    // }
  }

  return (
      <Route>
          <Route path="/" component={App} onEnter={requireAuth}>

            <IndexRoute component={HelloWorld} />

            <Route path="paginated_phone_numbers" component={PaginatedPhoneNumbers} />

            <Route component={BottomNav} >
              <Route path="csv_uploader" component={CsvUploader} />
              <Route path="image_uploader" component={ImageUploader} />
            </Route>

            <Route path="tab_nav" component={TabNav}>
              <IndexRoute component={HelloWorld} />
              <Route path="paginated_phone_numbers" component={PaginatedPhoneNumbers} />
              <Route path="my_chart" component={CsvStatChart} />
            </Route>

            <Route path="my_chart" component={CsvStatChart} />
            <Route path="modal_playground" component={ModalPlayground} />

          </Route>

          <Route path="/auth" component={Auth}>
            <IndexRoute component={Login} />

            <Route path="login" component={Login} />
            <Route path="signup" component={SignUp} />
            <Route path="forgot_password" component={ForgotPassword} />
          </Route>

          <Route path="*" component={PageNotFound} />
      </Route>
  );
}

export default routes;
