import React from 'react';
import { Link } from 'react-router-dom';

import Page from '@components/templates/Page';

const SignIn = () => {
  return (
    <Page title="Entrar" description="Coloque suas credenciais para entrar no Navedex!">
      <span className="icon-chevron-left" />
      <Link to="/teste">teste</Link>
    </Page>
  )
}

export default SignIn;