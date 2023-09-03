## User Signup: http://localhost:5001/api/v1/auth/signup (POST)

## User login: http://localhost:5001/api/v1/auth/login (POST)

request body:
{
"email": "admin@example.com",
"password": "admin123"
}

## get all user: http://localhost:5001/api/v1/users (GET)

you have to add a 'authorization' token on Header you will get it from login
