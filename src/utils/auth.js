import cookie from 'js-cookie';
import AuthService from '@api/services/auth';

const tokenName = `${process.env.REACT_APP_PROJECT_NAME}-token`;

export const isAuthenticated = () => {
  return !!cookie.get(tokenName);
}

export const signin = async ({ email, password }) => {
  const { data, status } = await AuthService.signin({
    email,
    password,
  });

  if (status !== 201) {
    throw new Error(status);
  }

  cookie.set(tokenName, data.accessToken, { expires: 1 });
};
