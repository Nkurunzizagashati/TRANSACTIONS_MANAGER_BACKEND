# Backend Documentation for Transaction Management System

## Overview

This backend application is designed to handle transaction management, including creating, updating, deleting, and retrieving transactions. It provides a robust API for the frontend to interact with the database seamlessly.

## Features

-   User Authentication and Authorization (JWT-based).
-   CRUD operations for transactions.
-   Categorization of transactions.
-   Account management (e.g., Savings, Checking, Credit Card).
-   Validation of inputs.
-   Error handling and logging.

## Tech Stack

-   **Node.js**: Runtime environment.
-   **Express**: Web framework.
-   **MongoDB**: Database for storing transactions and categories.
-   **Mongoose**: ODM library for MongoDB.
-   **JWT**: Authentication mechanism.
-   **dotenv**: For environment variables.

## Installation

### Clone the repository:

```bash
git clone <repository-url>
```

### install dependencies:

```bash
npm install
```

### Environment Variables

To run this project, you need to set up the following environment variables in a `.env` file:

```plaintext
DB_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret>
JWT_REFRESH_SECRET=<Your JWT refresh secret>
NODE_ENVIRONMENT=<Set the environment (e.g., development or production)>
SESSION_SECRET=<Your session secret>
PORT=<Your desired port number>

```
