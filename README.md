# Back-End E-Commerce Application


## Description

This is a back-end application for an E-Commerce website built with Node.js. It provides APIs for managing various aspects of the E-Commerce platform:

- **Brands**: You can add, update, delete, and fetch all brands.
- **Categories**: You can add, update, delete, and fetch all categories.
- **Coupons**: Users can create and update coupons. All users can fetch all coupons and a specific coupon. Admins can delete a coupon.
- **Orders**: Users can create a cash order and fetch a specific order. All orders can be fetched.
- **Products**: Admins can add, update, and delete products. All users can fetch all products and a specific product.
- **Reviews**: Users can create and update reviews. All users can fetch all reviews. Both admins and users can delete a review.
- **SubCategories**: Admins can add, update, and delete subcategories. All users can fetch all subcategories.
- **Users**: A new user can be added. All users can be fetched. A user can be updated and deleted. A user's password can be updated.
- **WishList**: Users can add to wishlist, remove from wishlist, and fetch all user wishlist.

Each API is secured and only accessible by specific roles (admin or user). The application uses validation middleware to ensure the data sent to the APIs is correct.

## Installation

1. Clone the repository: `git clone https://github.com/proahmed22/Back-end-E-Commerce.git`
2. Install dependencies: `npm install`

## Usage

To start the server, run: `npm start`

## API Documentation

### Brand Routes

- `POST /api/v1/categories`: Add a new brand. Only accessible by an admin.
- `GET /api/v1/categories`: Get all brands.
- `PUT /api/v1/categories/:id`: Update a brand. Only accessible by an admin.
- `DELETE /api/v1/categories/:id`: Delete a brand. Only accessible by an admin.

### Category Routes

- `POST /api/v1/categories`: Add a new category. Only accessible by an admin.
- `GET /api/v1/categories`: Get all categories.
- `PUT /api/v1/categories/:id`: Update a category. Only accessible by an admin.
- `DELETE /api/v1/categories/:id`: Delete a category. Only accessible by an admin.

### Coupon Routes

- `POST /api/v1/categories`: Create a new coupon. Only accessible by a user.
- `GET /api/v1/categories`: Get all coupons.
- `PUT /api/v1/categories/:id`: Update a coupon. Only accessible by a user.
- `GET /api/v1/categories/:id`: Get a specific coupon.
- `DELETE /api/v1/categories/:id`: Delete a coupon. Only accessible by an admin.

### Order Routes

- `GET /`: Get a specific order. Only accessible by a user.
- `GET /all`: Get all orders.
- `POST /api/v1/categories/:id`: Create a cash order. Only accessible by a user.

### Product Routes

- `POST /api/v1/categories`: Add a new product. Only accessible by an admin.
- `GET /api/v1/categories`: Get all products.
- `PUT /api/v1/categories/:id`: Update a product. Only accessible by an admin.
- `DELETE /api/v1/categories/:id`: Delete a product. Only accessible by an admin.
- `GET /api/v1/categories/:id`: Get a specific product. Only accessible by an admin.

### Review Routes

- `POST /api/v1/categories`: Create a new review. Only accessible by a user.
- `GET /api/v1/categories`: Get all reviews.
- `PUT /api/v1/categories/:id`: Update a review. Only accessible by a user.
- `DELETE /api/v1/categories/:id`: Delete a review. Only accessible by an admin or a user.

### SubCategory Routes

- `POST /api/v1/categories`: Add a new subcategory. Only accessible by an admin.
- `GET /api/v1/categories`: Get all subcategories.
- `PUT /api/v1/categories/:id`: Update a subcategory. Only accessible by an admin.
- `DELETE /api/v1/categories/:id`: Delete a subcategory. Only accessible by an admin.

### User Routes

- `POST /api/v1/categories`: Add a new user.
- `GET /api/v1/categories`: Get all users.
- `PUT /api/v1/categories/:id`: Update a user.
- `DELETE /api/v1/categories/:id`: Delete a user.
- `PATCH /api/v1/categories/:id`: Update a user's password. Only accessible by the user.

### WishList Routes

- `POST /api/v1/categories`: Add to wishlist. Only accessible by a user.
- `PATCH /api/v1/categories`: Remove from wishlist. Only accessible by a user.
- `GET /api/v1/categories`: Get all user wishlist. Only accessible by a user.


## Testing

To run tests, use: `npm test`

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
