import express from 'express';
import productController from '../controllers/product.js';

const ProductRouter = express.Router();

ProductRouter.get('/', productController.getProducts);

ProductRouter.get('/add-product', productController.addProduct);

ProductRouter.get('/:id', productController.getProduct);


export default ProductRouter;