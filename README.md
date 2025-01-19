# WEB WALLET

## Overview

This application aims to help you manage your day to day transactions easily by allowing to link your bank accounts, create different expense categories and modify them, and also allow you to add transactions you made.

## Features

-   User Authentication and Authorization (JWT-based).
-   CRUD operations for transactions.
-   Categorization of transactions.
-   Account management.
-   Expenses categories management
-   Validation of inputs.
-   Error handling and logging.

## Tech Stack

-   **Node.js**: Runtime environment.
-   **Express**: Web framework.
-   **MongoDB**: Database for storing transactions and categories.
-   **Mongoose**: ODM library for MongoDB.
-   **JWT**: Authentication mechanism.
-   **bcryptjs**: Hashing data.
-   **dotenv**: For environment variables.
-   **express-validator**: For validating requests.
-   **cors**: For managing allowed requests for the server.

## Installation

### Clone the repository:

```bash
git clone <https://github.com/Nkurunzizagashati/TRANSACTIONS_MANAGER_BACKEND>
```

### install dependencies:

```bash
npm install
```

### Required Environment Variables

To run this project, you need to set up the following environment variables in a `.env` file:

```plaintext
DB_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret>
JWT_REFRESH_SECRET=<Your JWT refresh secret>
NODE_ENVIRONMENT=<Set the environment (e.g., development or production)>
SESSION_SECRET=<Your session secret>
PORT=<Your desired port number>

```

## Run the app

Run this command to run the application

```bash
npm start
```

## API END POINTS

### AUTHENTICATION

#### register a user

```plain
POST  <host url>/api/admin/register
```

#### body:

```json
{
	"fname": "John",
	"lname": "Doe",
	"email": "john@gmail.com",
	"password": "Password123",
	"confirmPassword": "Password123"
}
```

### user login

```plain
POST <host url>/api/admin/login
```

# WEB WALLET

## Overview

This application aims to help you manage your day to day transactions easily by allowing to link your bank accounts, create different expense categories and modify them, and also allow you to add transactions you made.

## Features

-   User Authentication and Authorization (JWT-based).
-   CRUD operations for transactions.
-   Categorization of transactions.
-   Account management.
-   Expenses categories management
-   Validation of inputs.
-   Error handling and logging.

## Tech Stack

-   **Node.js**: Runtime environment.
-   **Express**: Web framework.
-   **MongoDB**: Database for storing transactions and categories.
-   **Mongoose**: ODM library for MongoDB.
-   **JWT**: Authentication mechanism.
-   **bcryptjs**: Hashing data.
-   **dotenv**: For environment variables.
-   **express-validator**: For validating requests.
-   **cors**: For managing allowed requests for the server.

## Installation

### Clone the repository:

```bash
git clone <https://github.com/Nkurunzizagashati/TRANSACTIONS_MANAGER_BACKEND>
```

### install dependencies:

```bash
npm install
```

### Required Environment Variables

To run this project, you need to set up the following environment variables in a `.env` file:

```plaintext
DB_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret>
JWT_REFRESH_SECRET=<Your JWT refresh secret>
NODE_ENVIRONMENT=<Set the environment (e.g., development or production)>
SESSION_SECRET=<Your session secret>
PORT=<Your desired port number>

```

## Run the app

Run this command to run the application

```bash
npm start
```

## API END POINTS

### AUTHENTICATION

#### register a user

```plain
POST  <host url>/api/admin/register
```

#### body:

```json
{
	"fname": "John",
	"lname": "Doe",
	"email": "john@gmail.com",
	"password": "Password123",
	"confirmPassword": "Password123"
}
```

### TRANSACTIONS

For any account based api request you will need these HEADERS:

```json
{
	"Authorization": "Bearer <JWT-token>"
}
```

#### Get All Transactions

```plain
GET <host url>/api/transaction
```

#### Create a new transaction

```plain
POST <host url>/api/transaction/create

```
