import ProductModel from 'scripts/models/product';
import { Product, ProductParams } from 'scripts/types/product';
import ProductView from 'scripts/views/product';

export default class ProductController {
  private productView: ProductView;
  private productModel: ProductModel;

  constructor(view: ProductView, model: ProductModel) {
    this.productView = view;
    this.productModel = model;
  }

  public async initialize() {
    this.productView.initView();
    await this.renderProducts({}, []);
    this.productView.bindFilterProduct(this.renderProducts);
    this.productView.bindSortProduct(this.handleSortProducts);
  }

  /**
   * Render the product list with default sorting and filtering parameters
   */
  renderProducts = async (params: ProductParams = {}, products: Product[]) => {
    // Default params is to show the newest product on the list
    if (!('sortBy' in params && 'order' in params)) {
      params.sortBy = 'id';
      params.order = 'desc';
    }

    try {
      this.productView.displayProducts(products, true);
      products = await this.productModel.getProducts(params);
    } catch (error) {
      // showError({ text: GET_FAILED_MSG})
    } finally {
      this.productView.displayProducts(products, false);
    }
  };

  handleFilterProducts = (params = {}) => {
    this.renderProducts(params);
  };

  handleSortProducts = (params = {}) => {
    this.renderProducts(params);
  };
}
