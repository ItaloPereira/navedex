import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignIn from '@views/SignIn';
import Home from '@views/Home';
import Naver from '@views/Naver';

import Modal from '@components/organisms/Modal';

import PrivateRoute from './PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/entrar" component={SignIn} exact />
      <PrivateRoute path="/" component={Home} exact />
      <PrivateRoute path="/adicionar-naver" component={Naver} exact />
      <PrivateRoute path="/editar-naver/:uid" component={Naver} exact />
    </Switch>

    <ToastContainer
      position="top-center"
    />
    <Modal />
  </BrowserRouter>
);

export default Router;