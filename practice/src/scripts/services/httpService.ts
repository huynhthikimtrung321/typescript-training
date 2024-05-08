import axios, { Axios, AxiosError, AxiosResponse } from 'axios';

export default class HttpService {
  private baseUrl: string;
  private axiosClient: Axios;

  constructor() {
    this.baseUrl = process.env['BASE_API_URL'] ?? '';
    this.axiosClient = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  withApiErrorHandler = async <T>(
    callBack: () => Promise<AxiosResponse<T>>
  ) => {
    try {
      const response: AxiosResponse<T> = await callBack();
      return response.data;
    } catch (error: any) {
      const axError = error as AxiosError;
      if (!axError.response) {
        throw new Error('Something went wrong. Please try again later.');
      }
      throw axError.message;
    }
  };

  async get<T>(endpoint: string, params = {}) {
    return this.withApiErrorHandler<T>(() =>
      this.axiosClient.get(`${endpoint}`, { params })
    );
  }

  async post<T>(endpoint: string, data: T): Promise<T> {
    return this.withApiErrorHandler(() =>
      this.axiosClient.post(endpoint, data)
    );
  }

  async put<T>(endpoint: string, data: T) {
    return this.withApiErrorHandler(() => this.axiosClient.put(endpoint, data));
  }

  async delete(endpoint: string) {
    return this.withApiErrorHandler(() => this.axiosClient.delete(endpoint));
  }
}
