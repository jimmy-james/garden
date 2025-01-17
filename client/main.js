import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EventList from "./components/EventList";
import CreateEvents from "./components/CreateEvents";
import EventListEntry from "./components/EventListEntry";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from "./store";

const app = document.getElementById('app');

// Provider "provides" all the components here with data from the store.
// browserHistory
const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
        <Route path="login" component={Login}></Route>
        <Route path="dashboard" component={Dashboard}></Route>
        <Route path="create" component={CreateEvents}></Route>
        {/* <Route path="/events" component={EventListEntry}></Route> */}
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  app
);
