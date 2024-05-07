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

  /**
   * Adds a product then return the new products
   */
  async addProduct(product: Product) {
    const data = await this.httpService.post<Product>(
      PRODUCT_ENDPOINT,
      product
    );

    this.products.unshift(data);

    return this.products;
  }

  /**
   * Edits a product then return the new products
   */
  async editProduct(id: string, product: Product) {
    const data = await this.httpService.put<Product>(
      `${PRODUCT_ENDPOINT}/${id}`,
      product
    );

    if (data) {
      this.products = this.products.map(item =>
        item.id === id ? { ...item, ...product } : item
      );
    }

    return this.products;
  }
}
