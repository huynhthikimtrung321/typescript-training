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

  processProduct = (product: any) => {
    product.quantity = parseInt(product.quantity);
    product.price = parseFloat(product.price);
    product.cost = parseFloat(product.cost);
  };

  /**
   * Fetchs products by params
   */
  async getProducts(params = {}) {
    this.products = await this.httpService.get(products, params);

    return this.products;
  }

  /**
   * Adds a product then return the new products
   */
  async addProduct(product: Product) {
    const data = await this.httpService.post<Product>(products, product);

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
