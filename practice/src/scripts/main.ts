import ProductView from './views/product';
import ProductController from './controllers/product';

document.addEventListener('DOMContentLoaded', async () => {
  const productView = new ProductView('.main-content');

  const productController = new ProductController(productView);
  
  await productController.initialize();
});
