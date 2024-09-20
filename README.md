
# CRUD Operations with DynamoDB API Tutorial!

Hey there, fellow developers and students! 🎉

I'm excited to share this repository with you, designed to help you navigate the world of Amazon DynamoDB by building simple APIs for CRUD (Create, Read, Update, Delete) operations. Whether you're just starting out or looking to sharpen your skills, this guide is here to make your journey enjoyable and straightforward.


## What You'll Learn

* How to Configure Your DynamoDB Table for an Express App: Set up your DynamoDB table and connect it seamlessly to your Express application.

* How to Create a Basic API: Follow along as we guide you through creating a simple yet effective RESTful API.

* How to Perform Basic CRUD Operations: Get hands-on examples for performing essential CRUD operations, empowering you to manage your data effectively.
## About Project

This is a simple project that demonstrates how to manage user data using DynamoDB. In this tutorial, you will learn how to:

* Add a new user
* Fetch all users or a single user
* Update user information
* Delete a user

With these fundamental operations, you’ll gain a solid understanding of how to interact with DynamoDB through an API.
## Pre Requisites

* AWS Account
* Node.js Environment
* Basic Knowledge of Express.js
* Postman Installed (for API testing)
## How To Start

#### Clone the repository

```http
  git clone https://github.com/sarathos584/express-dynamoDB.git
```


#### Install required modules

```http
  npm install
```
## API Reference

#### Get all users

```http
  GET /api/v1/test/get-all
```


#### Fetch single user

```http
  POST /api/v1/test/get-user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. Id of item to fetch |


#### Add user

```http
  POST /api/v1/test/add-user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. Id of item to fetch |
| `first_name`      | `string` | **Required**. first name of user |
| `last_name`      | `string` | **Required**. last name of user |
| `email`      | `string` | **Required**. email of the user |


#### Edit user

```http
  PATCH /api/v1/test/update-user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. Id of item to fetch |
| `first_name`      | `string` | **Optional**. first name of user |
| `last_name`      | `string` | **Optional**. last name of user |
| `email`      | `string` | **Optional**. email for the user |


#### Remove user

```http
  DELETE /api/v1/test/remove-user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. Id of item to fetch |





## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ACCESS_KEY_ID`

`SECRET_ACCESS_KEY`

`REGION`

`ENDPOINT`

Above are Identity and Access Management (IAM) credentials from your aws account. 

If you are facing any kind of issue finding the credentials, or you are a newbie here, feel free to check on below given documents

[Find IAM Credentials](https://docs.google.com/document/d/1qnZ5VCyao46fUSBvymPuW9IWzCD4BE8R8OzlQTMV2m4/edit?usp=sharing)





## Authors

- [@sarath os ](https://github.com/sarathos584)



## 🚀 About Me

👋 Hi there! I'm a Full Stack Developer with over a year of experience in building dynamic web applications. I’m passionate about web development and dedicated to helping others learn and grow in this field.

📚 I enjoy sharing knowledge through tutorials and projects, and I've created a GitHub repository focused on configuring and building simple APIs with DynamoDB. I believe in the power of collaboration and open-source contributions to drive innovation.


Feel free to connect with me or check out my projects! Let’s learn and build together!

