import React from 'react';
import { Link } from 'react-router-dom';

import Page from '@components/templates/Page';

const SignIn = () => {
  return (
    <Page title="Teste" description="Teste">
      <Link to="/entrar">signin</Link>
    </Page>
  )
}

export default SignIn;