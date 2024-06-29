import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Index from "layouts/Index";

// views without layouts
import Profile from "views/Profile.js";
import UpdateProfile from "views/Updateprofile.js";
import Cart from "views/Cart.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Index} />
        {/* add routes without layouts */}
        <Route path="/profile" exact component={Profile} />
        <Route path="/updateprofile" exact component={UpdateProfile} />
        <Route path="/cart" exact component={Cart} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
