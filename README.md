# Transactions API Documentation

## Overview
The Transactions API provides endpoints to manage and interact with transaction records. The API supports fetching, updating, and modifying transaction statuses through both automated and manual mechanisms.

---

## Endpoints

### 1. *GET /api/transactions*
Fetch all transactions.
#### Example Response:
```json
[
  {
    "_id": "64a9b12345f9d00a8e0ef2a3",
    "school_id": "school_001",
    "custom_order_id": "order_001",
    "status": "completed",
    "created_at": "2023-07-01T10:00:00.000Z"
  },
  {
    "_id": "64a9b45678f9d00a8e0ef2b4",
    "school_id": "school_002",
    "custom_order_id": "order_002",
    "status": "pending",
    "created_at": "2023-07-02T12:00:00.000Z"
  }
]

2. GET /api/transactions/school/:schoolId
Fetch all transactions for a specific school by its ID.

Example Request:
GET /api/transactions/school/school_001
Example Response:
[
  {
    "_id": "64a9b12345f9d00a8e0ef2a3",
    "school_id": "school_001",
    "custom_order_id": "order_001",
    "status": "completed",
    "created_at": "2023-07-01T10:00:00.000Z"
  }
]
3. GET /api/transactions/status/:customOrderId
Fetch the status of a transaction by its custom order ID.

Example Request:
bash
Copy
Edit
GET /api/transactions/status/order_001
Example Response:
{
  "status": "completed"
}
4. POST /api/transactions/webhook
Webhook to update transaction status automatically.

Example Request:
{
  "order_info": {
    "order_id": "64a9b12345f9d00a8e0ef2a3",
    "status": "processing"
  }
}
Example Response:
{
  "message": "Transaction status updated successfully",
  "transaction": {
    "_id": "64a9b12345f9d00a8e0ef2a3",
    "school_id": "school_001",
    "custom_order_id": "order_001",
    "status": "processing",
    "created_at": "2023-07-01T10:00:00.000Z"
  }
}
5. POST /api/transactions/manual-update
Manually update the status of a transaction by its ID.

Example Request:
{
  "transactionId": "64a9b45678f9d00a8e0ef2b4",
  "status": "failed"
}
Example Response:
{
  "message": "Transaction status manually updated",
  "transaction": {
    "_id": "64a9b45678f9d00a8e0ef2b4",
    "school_id": "school_002",
    "custom_order_id": "order_002",
    "status": "failed",
    "created_at": "2023-07-02T12:00:00.000Z"
  }
}
Sample Data for Testing
Insert the following data into the CollectRequestStatus collection for testing:
[
  {
    "_id": "64a9b12345f9d00a8e0ef2a3",
    "school_id": "school_001",
    "custom_order_id": "order_001",
    "status": "completed",
    "created_at": "2023-07-01T10:00:00.000Z"
  },
  {
    "_id": "64a9b45678f9d00a8e0ef2b4",
    "school_id": "school_002",
    "custom_order_id": "order_002",
    "status": "pending",
    "created_at": "2023-07-02T12:00:00.000Z"
  }
]
