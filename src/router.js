import React from 'react';

import ROUTES from './constants/routes';

import Home from './views/home';

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

const RouterView = () => (
  <Router basename={process.env.REACT_APP_BASE_NAME || ROUTES.ROOT}>
    <Switch>
      <Route path={ROUTES.HOME} component={Home} />

      <Redirect
        to={{
          pathname: ROUTES.ROOT
        }}
      />
    </Switch>
  </Router>
);

export default RouterView;
