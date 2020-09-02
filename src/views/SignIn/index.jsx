import React from 'react';
import { useForm } from 'react-hook-form';

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
  const { handleSubmit, control, errors } = useForm();

  function onSubmit() {
    // console.log(data);
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
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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

            <Button htmlType="submit">Entrar</Button>
          </Form>
        </PageWrapper>
      </PageContainer>
    </Page>
  )
}

export default SignIn;