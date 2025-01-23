const mongoose = require("mongoose");

const collectRequestStatusSchema = new mongoose.Schema({
  collect_id: String,
  school_id: String,
  status: String,
  payment_mode: String,
  gateway: String,
  transaction_amount: Number,
  bank_reference: String,
});

module.exports = mongoose.model(
  "CollectRequestStatus",
  collectRequestStatusSchema
);
