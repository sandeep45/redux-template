import React from "react"
import { Route, IndexRoute } from "react-router"

import App from "../components/App"
import HelloWorld from "../components/HelloWorld"
import PaginatedPhoneNumbers from "../containers/PaginatedPhoneNumbers"

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HelloWorld} />
    <Route path="/paginated_phone_numbers" component={PaginatedPhoneNumbers} />
  </Route>
);

export default routes;
