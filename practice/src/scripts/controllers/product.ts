import ProductModel from 'scripts/models/product';
import { FilterParam } from 'scripts/types/params';
import { Product } from 'scripts/types/product';
import ProductView from 'scripts/views/product';
import { showError, showSuccess } from 'scripts/views/toast';
import { NOTIFY_MESSAGES } from '../constants/message';

const {
  ADD_SUCCESS_MSG,
  ADD_FAILED_MSG,
  // EDIT_SUCCESS_MSG,
  // EDIT_FAILED_MSG,
  // DELETE_SUCCESS_MSG,
  // DELETE_FAILED_MSG,
  // GET_FAILED_MSG,
} = NOTIFY_MESSAGES;

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
    this.productView.bindProductAction(this.handleAddProduct);
    this.productView.bindRemoveModal();
  }

  /**
   * Render the product list with default sorting and filtering parameters
   */
  renderProducts = async (params: FilterParam = {}, products: Product[]) => {
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

  /**
   * Adds a product and notify the end users
   */
  handleAddProduct = async (product: Product) => {
    try {
      this.productView.displaySpinner();
      const products = await this.productModel.addProduct(product);
      this.productView.removeSpinner();
      showSuccess({ text: ADD_SUCCESS_MSG });
      this.productView.removeModal();
      this.productView.displayProducts(products, false);
    } catch (error) {
      showError({ text: ADD_FAILED_MSG });
    }
  };

  handleRemoveModal() {
    this.productView.removeModal();
  }

  handleFilterProducts = async (params = {}) => {
    await this.renderProducts(params, []);
  };

  handleSortProducts = async (params = {}) => {
    await this.renderProducts(params, []);
  };
}
