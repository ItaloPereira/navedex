import cookie from 'js-cookie';

const tokenName = `${process.env.REACT_APP_PROJECT_NAME}-token`;

export const isAuthenticated = () => {
  return !!cookie.get(tokenName);
}

export default isAuthenticated;