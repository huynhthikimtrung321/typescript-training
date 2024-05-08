import ProductView from './views/product';
import ProductController from './controllers/product';
import ProductModel from './models/product';
import HttpService from './services/httpService';

document.addEventListener('DOMContentLoaded', () => {
  const productModel = new ProductModel(new HttpService());
  const productView = new ProductView('.main-content');
  const productController = new ProductController(productView, productModel);
  productController.initialize();
});
