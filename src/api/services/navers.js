import API from '../index';

class NaversService extends API {
  async getNavers() {
    return this.get('/navers');
  }

  async createNaver(data) {
    return this.post('/navers', data);
  }

  async updateNaver(data, uid) {
    return this.put(`/navers/${uid}`, data);
  }

  async getNaver(uid) {
    return this.get(`/navers/${uid}`);
  }
}

export default new NaversService();
