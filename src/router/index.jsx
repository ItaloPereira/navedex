import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignIn from '@views/SignIn';
import Home from '@views/Home';

import PrivateRoute from './PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/entrar" component={SignIn} />
      <PrivateRoute path="/" component={Home} />
    </Switch>

    <ToastContainer
      position="top-center"
    />
  </BrowserRouter>
);

export default Router;