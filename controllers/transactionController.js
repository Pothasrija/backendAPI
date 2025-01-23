const Transaction = require("../models/CollectRequestStatus");

// Fetch all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching transactions", error: err });
  }
};

// Fetch transactions by school ID
exports.getTransactionsBySchool = async (req, res) => {
  try {
    const { schoolId } = req.params;
    const transactions = await Transaction.find({ school_id: schoolId });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching transactions by school ID",
      error: err,
    });
  }
};

// Check transaction status by custom_order_id
exports.getTransactionStatus = async (req, res) => {
  try {
    const { customOrderId } = req.params;
    const transaction = await Transaction.findOne({
      custom_order_id: customOrderId,
    });
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.status(200).json({ status: transaction.status });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching transaction status", error: err });
  }
};

// Webhook to update transaction status
exports.updateTransactionStatus = async (req, res) => {
  try {
    const { order_info } = req.body;
    const { order_id, status } = order_info;

    const updatedTransaction = await Transaction.findOneAndUpdate(
      { _id: order_id },
      { status },
      { new: true }
    );

    if (!updatedTransaction) {
      return res
        .status(404)
        .json({ message: "Transaction not found for update" });
    }

    res.status(200).json({
      message: "Transaction status updated successfully",
      transaction: updatedTransaction,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating transaction status", error: err });
  }
};

// Manually update transaction status
exports.manualUpdateTransactionStatus = async (req, res) => {
  try {
    const { transactionId, status } = req.body;

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      transactionId,
      { status },
      { new: true }
    );

    if (!updatedTransaction) {
      return res
        .status(404)
        .json({ message: "Transaction not found for manual update" });
    }

    res.status(200).json({
      message: "Transaction status manually updated",
      transaction: updatedTransaction,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error manually updating transaction status",
      error: err,
    });
  }
};
