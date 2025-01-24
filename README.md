# Backend API

This project provides a set of RESTful APIs for managing transactions, users, and other functionalities.

## Table of Contents

- [Getting Started](#getting-started)
- [Routes](#routes)
  - [Index Routes](#index-routes)
  - [Transaction Routes](#transaction-routes)
  - [User Routes](#user-routes)
- [Controllers](#controllers)
- [Middleware](#middleware)
- [Models](#models)

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Pothasrija/backendAPI.git
   ```
2. Navigate to the project directory:
   ```bash
   cd backendAPI
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:5000` by default.

---

## Routes

### Index Routes

| Method | Endpoint | Description              |
|--------|----------|--------------------------|
| GET    | `/`      | Renders the home page.   |

### Transaction Routes

| Method | Endpoint                               | Description                                      |
|--------|---------------------------------------|--------------------------------------------------|
| GET    | `/transactions`                       | Fetches all transactions.                       |
| GET    | `/transactions/school/:schoolId`      | Fetches transactions for a specific school.     |
| GET    | `/transactions/status/:customOrderId` | Fetches the status of a specific transaction.   |
| POST   | `/transactions/webhook`               | Updates transaction status via a webhook.       |
| POST   | `/transactions/manual-update`         | Manually updates transaction status.            |

### User Routes

| Method | Endpoint | Description                  |
|--------|----------|------------------------------|
| GET    | `/users` | Returns a resource response. |

---

## Controllers

The controllers handle the core business logic for each route. Below are the main controllers used:

- **Transaction Controller**:
  - `getAllTransactions`
  - `getTransactionsBySchool`
  - `getTransactionStatus`
  - `updateTransactionStatus`
  - `manualUpdateTransactionStatus`

---

## Middleware

- **Webhook Middleware**: Processes and validates incoming webhook requests.

---

## Models

The following models are used to interact with the database:

- `Transaction`
- `CollectRequest`
- `CollectRequestStatus`

---

## Additional Notes

- Ensure to set up the database connection in `utils/db.js` before running the project.
- For detailed functionality, refer to the respective controller and middleware files.

---

## Contact Information

**Author**: PSrija  
**Email**: pothasrija941@gmail.com  
**Phone**: 9182704402

