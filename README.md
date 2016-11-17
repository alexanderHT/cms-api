# CMS-API

## dependencies that need to install on this project
```
1. express
2. express-session
3. mongodb
4. mongoose
5. passport
6. passport-local
7. passport-local-mongoose
```

## API
|Http|Method|Desc|
|----|------|----|
|localhost:3000/api/customer          | GET    | get all customer        |
|localhost:3000/api/customer          | POST   | register new customer   |
|localhost:3000/api/customer/register | GET    | render form register    |
|localhost:3000/api/customer/login    | GET    | render form login       |
|localhost:3000/api/customer/login    | POST   | customer login          |
|localhost:3000/api/customer/home     | GET    | render home views       |
|localhost:3000/api/customer/logout   | GET    | delete session          |
|localhost:3000/api/data              | GET    | get all data            |
|localhost:3000/api/data/formData     | GET    | render form data        |
|localhost:3000/api/data              | PUT    | edit data               |
|localhost:3000/api/data              | DELETE | delete data             |
|localhost:3000/api/data/:id          | GET    | get one data            |
