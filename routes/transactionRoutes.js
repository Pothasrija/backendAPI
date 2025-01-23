const express = require("express");
const {
  getAllTransactions,
  getTransactionsBySchool,
  getTransactionStatus,
  updateTransactionStatus,
  manualUpdateTransactionStatus,
} = require("../controllers/transactionController");

const router = express.Router();

// Fetch all transactions
router.get("/transactions", getAllTransactions);

// Fetch transactions by school
router.get("/transactions/school/:schoolId", getTransactionsBySchool);

// Check transaction status
router.get("/transactions/status/:customOrderId", getTransactionStatus);

// Webhook to update transaction status
router.post("/transactions/webhook", updateTransactionStatus);

// Manual update of transaction status
router.post("/transactions/manual-update", manualUpdateTransactionStatus);

module.exports = router;
