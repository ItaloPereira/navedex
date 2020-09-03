import API from '../index';

class NaversService extends API {
  async getNavers() {
    return this.get('/navers');
  }
}

export default new NaversService();
