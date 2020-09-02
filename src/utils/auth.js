import cookie from 'js-cookie';
import AuthService from '@api/services/auth';

const tokenName = `${process.env.REACT_APP_PROJECT_NAME}-token`;

export const isAuthenticated = () => {
  return !!cookie.get(tokenName);
}

export const signin = async ({ email, password }) => {
  const { data } = await AuthService.signin({
    email,
    password,
  });

  cookie.set(tokenName, data.token, { expires: 1 });
};

export const logout = () => {
  cookie.remove(tokenName);
  window.location.reload();
};
