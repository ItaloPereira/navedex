import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { signin } from '@utils/auth';
import { getErrorMessageByRequest } from '@modules/errors';
import patterns from '@modules/patterns';

import Page from '@components/templates/Page';
import Button from '@components/molecules/Button';
import Input from '@components/molecules/Input';
import Logo from '@components/atoms/Logo';

import {
  PageContainer,
  PageWrapper,
  LogoWrapper,
  Form,
} from './style';

const SignIn = () => {
  const history = useHistory();
  const { handleSubmit, control, errors } = useForm();
  const notifyError = (msg) => toast.error(msg);

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);

    try {
      await signin(data);
      history.push('/');
    } catch(err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Page title="Entrar" description="Coloque suas credenciais para entrar no Navedex!" showNav={false}>
      <PageContainer>
        <PageWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              label="E-mail"
              placeholder="E-mail"
              name="email"
              defaultValue=""
              control={control}
              rules={{
                pattern: patterns.email,
                required: true,
              }}
              error={errors.email}
            />

            <Input 
              label="Senha"
              placeholder="Senha"
              name="password"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              error={errors.password}
              type="password"
            />

            <Button htmlType="submit" loading={loading} disabled={loading}>Entrar</Button>
          </Form>
        </PageWrapper>
      </PageContainer>
    </Page>
  )
}

export default SignIn;