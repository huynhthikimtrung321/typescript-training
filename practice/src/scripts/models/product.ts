import HttpService from 'scripts/services/httpService';
import { API_ENDPOINT } from '../constants/endpoint';
import { Product } from 'scripts/types/product';

const { products } = API_ENDPOINT;

export default class ProductModel {
  deleteProduct(id: string) {
    throw new Error('Method not implemented.');
  }
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
   * Gets product by its id
   */
  async getProduct(id: string) {
    return await this.httpService.get<Product>(`${products}/${id}`);
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
    const data = (await this.httpService.put<Product>(
      `${products}/${id}`,
      product
    )) as Product;

    if (data) {
      this.products = this.products.map(item =>
        item.id === id ? { ...item, ...data } : item
      );
    }

    return this.products;
  }
  async deleteProducts(id: string) {
    const data = (await this.httpService.delete<Product>(
      `${products}/${id}`
    )) as Product;

    if (data) {
      this.products = this.products.filter(item => item.id !== id);
    }

    return this.products;
  }
}
