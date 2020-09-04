import API from '../index';

class AuthService extends API {
  async signin({ email, password }) {
    return this.post('/users/login', {
      email,
      password,
    });
  }
}

export default new AuthService();
