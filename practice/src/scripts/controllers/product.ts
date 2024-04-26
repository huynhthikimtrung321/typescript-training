import ProductView from 'scripts/views/product';

export default class ProductController {
  private productView: ProductView;
  constructor(view: ProductView) {
    this.productView = view;
  }

  public initialize(): void {
    this.productView.initView();
  }
}
