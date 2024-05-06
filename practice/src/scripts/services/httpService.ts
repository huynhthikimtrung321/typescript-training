import axios, { Axios } from 'axios';

export default class HttpService {
  private baseUrl: string;
  private axiosClient: Axios;

  constructor() {
    this.baseUrl = process.env['BASE_API_URL'];
    this.axiosClient = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T>(endpoint: string, params = {}): Promise<T> {
    const response = await this.axiosClient.get<T>(`${endpoint}`, { params });

    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw new Error(`Get Failed: ${response.status}!`);
    }
  }

  async post<T>(endpoint: string, data: T): Promise<T> {
    const response = await this.axiosClient.post<T>(endpoint, data);

    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw new Error(`Post Failed: ${response.status}!`);
    }
  }

  async put<T>(endpoint: string, data: T): Promise<T> {
    const response = await this.axiosClient.put<T>(endpoint, data);

    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw new Error(`Put Failed: ${response.status}!`);
    }
  }

  async delete<T>(endpoint: string): Promise<T> {
    const response = await this.axiosClient.delete<T>(endpoint);

    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw new Error(`Delete Failed: ${response.status}!`);
    }
  }
}
