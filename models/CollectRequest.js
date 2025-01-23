const mongoose = require("mongoose");

const collectRequestSchema = new mongoose.Schema({
  _id: String,
  school_id: String,
  trustee_id: String,
  gateway: String,
  order_amount: Number,
  custom_order_id: String,
});

module.exports = mongoose.model("CollectRequest", collectRequestSchema);
