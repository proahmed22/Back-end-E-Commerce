import categoryRouter from './modules/category/category.routes.js';
import { globalErrorHandling } from './utils/errorHandling.js';
import subCategoryRouter from './modules/subcategory/subcategory.routes.js';
import brandRouter from './modules/brand/brand.routes.js';
import productRouter from './modules/product/product.routes.js';
import userRouter from './modules/user/user.routes.js';
import authRouter from './modules/auth/auth.routes.js';
import reviewRouter from './modules/reviews/reviews.routes.js';
import wishListRouter from './modules/wishList/wishList.routes.js';
import addressRouter from './modules/addresses/address.routes.js';
import cartRouter from './modules/cart/cart.routes.js';
import orderRouter from './modules/order/order.routes.js';
import couponRouter from './modules/coupon/coupon.routes.js';

export function bootstrap(app) {
    app.use('/api/v1/categories', categoryRouter);
    app.use('/api/v1/subCategories', subCategoryRouter);
    app.use('/api/v1/brands', brandRouter);
    app.use('/api/v1/products', productRouter);
    app.use('/api/v1/users', userRouter);
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/reviews', reviewRouter);
    app.use('/api/v1/wishList', wishListRouter);
    app.use('/api/v1/addresses', addressRouter);
    app.use('/api/v1/coupon', couponRouter);
    app.use('/api/v1/carts', cartRouter);
    app.use('/api/v1/orders', orderRouter);


    app.all('*', (req, res, next) => {
        next(new Error('Page Not Found', { cause: 404 }));
    })





    app.use(globalErrorHandling)
}
