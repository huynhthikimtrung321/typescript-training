import ProductView from 'scripts/views/product';

export default class ProductController {
  private productView: ProductView;

  constructor( view: ProductView) {
    this.productView = view;
  }

  public async initialize(): Promise<void> {
    this.productView.displayHeader();
  }
}
