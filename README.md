### Live api link: https://l2-b1-assignment-8-book-catallog-api.vercel.app/

### Application Routes:

#### User

- User Signup: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/auth/signup (POST)

- User login: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/auth/login (POST)

request body:
{
"email": "admin@example.com",
"password": "admin123"
}

- get all user: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/users (GET) // add authorization token on Header

you have to add a 'authorization' token on Header you will get it from login

- Get single user: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/users/cdd13a7f-54e6-4c64-85b1-e8220794adb8 (GET)

- Update user: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/users/cdd13a7f-54e6-4c64-85b1-e8220794adb8 (PATCH)

- Delete user: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/users/867476f2-030a-4e8c-b71a-039dee727f29 (DELETE)

### Category

- Create Category: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/categories/create-category (POST)

- get all Categories: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/categories (GET)

- get single category: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/categories/8a8ae509-d234-4a8b-94bc-aecc9607fb85 (GET)

- update category: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/categories/8a8ae509-d234-4a8b-94bc-aecc9607fb85 (PATCH)

- delete category: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/categories/69ced1e2-1b53-44f3-83b7-ca760d53a682 (DELETE)

### Book

- book create: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/books/create-book (POST)

- get all books: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/books?page=1&size=3&sortBy=title&sortOrder=asc&minPrice=100&maxPrice=500&search=Business Day (GET)

- get single book by bookID: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/books/0c3f2647-5218-4b76-9577-7ce5237120de (GET)

- get book by CategoryID: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/books/aba9d001-91ad-4da3-8c6e-a60e101cb7ee (GET)

- book update: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/books/0c3f2647-5218-4b76-9577-7ce5237120de (PATCH)

- book delete: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/books/0c3f2647-5218-4b76-9577-7ce5237120de (DELETE)

### Order

- order by customer: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/orders/create-order (GET) // add customer authorization token on header

- get all orders by admin: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/orders (GET)

- get single order: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/orders/7005a33e-be6f-49e8-88ca-6db683e9c008 (Get) // add token on header

### User Profile

- get user profile: https://l2-b1-assignment-8-book-catallog-api.vercel.app/api/v1/profile (GET)
