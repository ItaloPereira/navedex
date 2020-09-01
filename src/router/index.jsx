import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import SignIn from '@views/SignIn';
import Home from '@views/Home';
import Teste from '@views/Teste';

import PrivateRoute from './PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} exact />
      <Route path="/teste" component={Teste} exact />
      <PrivateRoute path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;