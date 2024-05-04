## Endpoints

List of Available Endpoints:

- `1. POS /register`
- `2. POS /login`

- `3. GET /products`
- `4. POS /products`
- `5. GET /products/pub`
- `6. GET /products/:id`
- `7. PUT /products/:id`
- `8. DELETE /products/:id`
- `9. PATCH /products/:id`
- `10. GET /products/:id/pub`

- `11. GET /categories`
- `12. GET /categories/pub`
- `13. POS /categories`
- `14. PUT /categories/:id`
- `15. DELETE /categories/:id`




&nbsp;


### 1. POST /register

#### Request:

- body:

```json
{
  "email": "string",
  "password": "string",
  "role": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (201 - Created)

```json
{
  "email": "user@mail.com",
  "role": "Staff",
  "phoneNumber": "085726261229",
  "address": "south jakarta,jakarta"
}
```

#### Response (400 - Bad Request)

```json
{
  "message": "Please input Email!"
}
OR
{
  "message": "Email must be in email format"
}
OR
{
  "message": "Email is already registered. Please input another email"
}
OR
{
  "message": "Please input Password!"
}


```


### 2. POST /login

#### Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

#### Response (200 - OK)

```json
{
  "access_token": "string"
}
```

#### Response (400 - Bad Request)

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

#### Response (401 - Unauthorized)

```json
{
  "message": "Invalid Email/Password"
}
```




### 3. GET /products

#### Description:

- Get all products

#### Request:

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (200 - OK)

```json
[
    {
        "id": 1,
        "name": "Product 1",
        "description": "Description of Product 1",
        "price": 50,
        "stock": 100,
        "imgUrl": "https://ncrsport.com/img/storage/large/897663-005-1.jpg",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2024-03-26T09:07:32.315Z",
        "updatedAt": "2024-03-26T09:07:32.315Z"
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description of Product 2",
        "price": 60,
        "stock": 80,
        "imgUrl": "https://i1.adis.ws/i/jpl/jd_B75806_a?w=700&resmode=sharp&qlt=70&fmt=webp",
        "categoryId": 2,
        "authorId": 1,
        "createdAt": "2024-03-26T09:07:32.315Z",
        "updatedAt": "2024-03-26T09:07:32.315Z"
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "Description of Product 3",
        "price": 70,
        "stock": 120,
        "imgUrl": "https://blog.atome.id/wp-content/uploads/2022/12/2-5-7.jpg",
        "categoryId": 3,
        "authorId": 1,
        "createdAt": "2024-03-26T09:07:32.315Z",
        "updatedAt": "2024-03-26T09:07:32.315Z"
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "Description of Product 4",
        "price": 80,
        "stock": 90,
        "imgUrl": "https://i1.adis.ws/i/jpl/jd_AH8050-100_a?w=700&resmode=sharp&qlt=70&fmt=webp",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2024-03-26T09:07:32.315Z",
        "updatedAt": "2024-03-26T09:07:32.315Z"
    }
  ]
```




### 4. POST /products

#### Request:

- body:

```json
{
  "name": "Sting",
  "description": "",
  "price": "integer",
  "stock": "Integer",
  "imgUrl": "string",
  "categoryId": 6,
  "authorId": 3
}
```

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (201 - Created)

```json
{
  "name": "Product-31",
  "description": "This oversized shirt is made from a patterned viscose weave. Resort collar, a French front, yoke at the back and short sleeves. Straight-cut hem with a slit at each side",
  "price": 40,
  "stock": 10,
  "imgUrl": "youuuyy",
  "categoryId": 6,
  "authorId": 3
}
```

#### Response (400 - Bad Request)

```json
{
  "message": "Please input Name!"
}
OR
{
  "message": "Please input Description!"
}
OR
{
  "message": "Please input Price!"
}

OR
{
  "message": "Category ID can't be null"
}
OR
{
  "message": "Category ID can't be empty"
}
OR
{
  "message": "Author ID can't be null"
}
OR
{
  "message": "Author ID can't be empty"
}
```




### 5. GET /products/pub

#### Description:

- Get all products on public

#### Response (200 - OK)

```json
[
    {
        "id": 1,
        "name": "Product 1",
        "description": "Description of Product 1",
        "price": 50,
        "stock": 100,
        "imgUrl": "https://ncrsport.com/img/storage/large/897663-005-1.jpg",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2024-03-26T09:07:32.315Z",
        "updatedAt": "2024-03-26T09:07:32.315Z"
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description of Product 2",
        "price": 60,
        "stock": 80,
        "imgUrl": "https://i1.adis.ws/i/jpl/jd_B75806_a?w=700&resmode=sharp&qlt=70&fmt=webp",
        "categoryId": 2,
        "authorId": 1,
        "createdAt": "2024-03-26T09:07:32.315Z",
        "updatedAt": "2024-03-26T09:07:32.315Z"
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "Description of Product 3",
        "price": 70,
        "stock": 120,
        "imgUrl": "https://blog.atome.id/wp-content/uploads/2022/12/2-5-7.jpg",
        "categoryId": 3,
        "authorId": 1,
        "createdAt": "2024-03-26T09:07:32.315Z",
        "updatedAt": "2024-03-26T09:07:32.315Z"
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "Description of Product 4",
        "price": 80,
        "stock": 90,
        "imgUrl": "https://i1.adis.ws/i/jpl/jd_AH8050-100_a?w=700&resmode=sharp&qlt=70&fmt=webp",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2024-03-26T09:07:32.315Z",
        "updatedAt": "2024-03-26T09:07:32.315Z"
    }
  ]
```



### 6. GET /products/:id

#### Description:

- Get product by id

#### Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

#### Response (200 - OK)

```json
{
    "id": 29,
    "name": "Product 29",
    "description": "Description of Product 10",
    "price": 140,
    "stock": 115,
    "imgUrl": "https://artikel.rumah123.com/wp-content/uploads/sites/41/2023/12/05153253/sepatu-reebok-4.jpg",
    "categoryId": 3,
    "authorId": 1,
    "createdAt": "2024-03-26T09:07:32.315Z",
    "updatedAt": "2024-03-26T09:07:32.315Z"
}
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```





### 7. GET /products/pub/:id

#### Description:

- Get product by id on public

#### Request:

- params:

```json
{
  "id": "integer (required)"
}
```

#### Response (200 - OK)

```json
   {
        "id": 2,
        "name": "Product 2",
        "description": "Description of Product 2",
        "price": 60,
        "stock": 80,
        "imgUrl": "https://i1.adis.ws/i/jpl/jd_B75806_a?w=700&resmode=sharp&qlt=70&fmt=webp",
        "categoryId": 2,
        "authorId": 1,
        "createdAt": "2024-03-26T09:07:32.315Z",
        "updatedAt": "2024-03-26T09:07:32.315Z"
    },
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```






### 8. GET /categories/pub

#### Description:

- Get all categories on public

#### Response (200 - OK)

```json
[
  {
    "id": 5,
    "name": "Nike",
    "createdAt": "2024-02-29T04:23:43.099Z",
    "updatedAt": "2024-02-29T04:23:43.099Z"
  },
  {
    "id": 1,
    "name": "Adidas",
    "createdAt": "2024-02-27T09:10:12.382Z",
    "updatedAt": "2024-02-29T04:25:19.555Z"
  }
]
```



### 9. GET /categories

#### Description:

- Get all categories

#### Request:

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (200 - OK)

```json
[
  {
    "id": 5,
    "name": "Nike",
    "createdAt": "2024-02-29T04:23:43.099Z",
    "updatedAt": "2024-02-29T04:23:43.099Z"
  },
  {
    "id": 1,
    "name": "Adidas",
    "createdAt": "2024-02-27T09:10:12.382Z",
    "updatedAt": "2024-02-29T04:25:19.555Z"
  }
]
```



### 10. POST /categories

#### Request:

- body:

```json
{
  "name": "Nike"
}
```

- headers;

```json
{
  "access_token": "string"
}
```

#### Response (201 - Created)

```json
{
  "name": "Nike"
}
```

#### Response (400 - Bad Request)

```json
{
  "message": "Please input Name!"
}
```



### 11. PUT /categories/:id

#### Request:

- body:

```json
{
  "name": "Nike"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (200 - OK)

```json
{
  "name": "Nike"
}
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```





### 12. PUT /products/:id

#### Request:

- body:

```json
{
  "name": "String",
  "description": "string",
  "price": "integer",
  "stock": "integer",
  "imgUrl": "string",
  "categoryId": 1,
  "authorId": 3
}
```

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

#### Response (200 - OK)

```json
{
  "name": "String",
  "description": "string",
  "price": "integer",
  "stock": "integer",
  "imgUrl": "string",
  "categoryId": 1,
  "authorId": 3
}
```

#### Response (403 - Forbidden)

```json
{
  "message": "Not authorized"
}
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```



### 13. PATCH /products/:id

#### Request:

- body:

```json
{
  "imgUrl": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (200 - OK)

```json
{
    "message": `Image ${product.name} has been updated`
}
```

#### Response (400 - Bad Request)

```json
{
  "message": "File is required"
}
```

#### Response (403 - Forbidden)

```json
{
  "message": "Not authorized"
}
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```

## 14. DELETE /categories/:id

#### Description:

- Delete category by id

#### Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

#### Response (200 - OK)

```json
{
    "message": `Category ${category.name} has been deleted`
}
```

#### Response (403 - Forbidden)

```json
{
  "message": "Not authorized"
}
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```



### 15. DELETE /products/:id

#### Description:

- Delete product by id

#### Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

#### Response (200 - OK)

```json
{
    "message": `${product.name} has been deleted`
}
```

#### Response (403 - Forbidden)

```json
{
  "message": "Not authorized"
}
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```



### Global Error

#### Response (401 - Unauthorized)

```json
{
  "message": "Invalid Token"
}
```

#### Response (500 - Internal Server Error)

```json
{
  "message": "Internal Server Error"
}
```