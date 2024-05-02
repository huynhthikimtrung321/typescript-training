import axios, { Axios } from 'axios';

export default class HttpService {
  private baseUrl: string;
  private axiosClient: Axios;

  constructor() {
    this.baseUrl = process.env['BASE_API_URL'] || '';
    console.log(this.baseUrl);
    this.axiosClient = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get(endpoint: string, params = {}) {
    const response = await this.axiosClient.get(`${endpoint}`, { params });

    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw new Error(`Post Failed: ${response.status}!`);
    }
  }

  async post(endpoint: string, data: unknown) {
    const response = await this.axiosClient.post(endpoint, data);

    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw new Error(`Post Failed: ${response.status}!`);
    }
  }

  async put(endpoint: string, data: unknown) {
    const response = await this.axiosClient.put(endpoint, data);

    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw new Error(`Post Failed: ${response.status}!`);
    }
  }

  async delete(endpoint: string) {
    const response = await this.axiosClient.delete(endpoint);

    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw new Error(`Post Failed: ${response.status}!`);
    }
  }
}
