## User Signup: http://localhost:5001/api/v1/auth/signup (POST)

## User login: http://localhost:5001/api/v1/auth/login (POST)

request body:
{
"email": "admin@example.com",
"password": "admin123"
}

## get all user: http://localhost:5001/api/v1/users (GET)

you have to add a 'authorization' token on Header you will get it from login

## Get single user: http://localhost:5001/api/v1/users/867476f2-030a-4e8c-b71a-039dee727f29 (GET)

## Update user: http://localhost:5001/api/v1/users/867476f2-030a-4e8c-b71a-039dee727f29 (PATCH)

## Delete user: http://localhost:5001/api/v1/users/867476f2-030a-4e8c-b71a-039dee727f29 (DELETE)

## ------------

## Create Category: http://localhost:5001/api/v1/categories/create-category (POST)

## get all Categories: http://localhost:5001/api/v1/categories (GET)

## get single category: http://localhost:5001/api/v1/categories/69ced1e2-1b53-44f3-83b7-ca760d53a682 (GET)

## update category: http://localhost:5001/api/v1/categories/69ced1e2-1b53-44f3-83b7-ca760d53a682 (PATCH)

## delete category: http://localhost:5001/api/v1/categories/69ced1e2-1b53-44f3-83b7-ca760d53a682 (DELETE)

## ----------- Book

## book create: http://localhost:5001/api/v1/books/create-book (POST)

## get all books: http://localhost:5001/api/v1/books?page=1&size=3&sortBy=title&sortOrder=asc&minPrice=100&maxPrice=500&search=Business Day (GET)
