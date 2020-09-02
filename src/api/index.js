import axios from 'axios';
import cookie from 'js-cookie';

const tokenName = `${process.env.REACT_APP_PROJECT_NAME}-token`;

class API {
  constructor(base = process.env.REACT_APP_API_BASE_URL) {
    this.service = axios.create({
      baseURL: base,
      timeout: 30000,
    });
  }

  async request(method, url, config = {}) {
    const { headers = {}, data, params, signed = false } = config;

    const options = {
      headers,
      data,
      params,
      url,
      method,
    };

    if (signed) {
      const token = config.token || cookie.get(tokenName);
      options.headers.Authorization = token ? `Bearer ${token}` : '';
    }

    try {
      return await this.service(options);
    } catch(error) {
      // eslint-disable-next-line no-console
      console.error(error.status, error.statusText);
      throw error;
    }
  }

  async signedRequest(method, url, config = {}) {
    return this.request(method, url, {
      ...config,
      signed: true,
    });
  }

  async get(url, config = {}) {
    return this.request('get', url, config);
  }

  async delete(url, config = {}) {
    return this.request('delete', url, config);
  }

  async post(url, data, config = {}) {
    return this.request('post', url, {
      ...config,
      data,
    });
  }

  async put(url, data, config = {}) {
    return this.request('put', url, {
      ...config,
      data,
    });
  }

  async patch(url, data, config = {}) {
    return this.request('post', url, {
      ...config,
      data,
    });
  }
}

export default API;
