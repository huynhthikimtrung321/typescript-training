import HttpService from 'scripts/services/httpService';
import { API_ENDPOINT } from '../constants/endpoint';
import { Product } from 'scripts/types/product';

const { products } = API_ENDPOINT;

export default class ProductModel {
  private httpService: HttpService;
  private products: Product[];

  constructor(httpService: HttpService) {
    this.httpService = httpService;
    this.products = [];
  }

  /**
   * Fetchs products by params
   */
  async getProducts(params = {}) {
    return (this.products = await this.httpService.get(products, params));
  }
}
