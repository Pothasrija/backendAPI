const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  _id: String,
  school_id: String,
  trustee_id: String,
  gateway: String,
  order_amount: Number,
  custom_order_id: String,
  status: String,
  transaction_amount: Number,
  bank_reference: String,
});

module.exports = mongoose.model("Transaction", transactionSchema);
