const mongoose = require("mongoose");
const csvtojson = require("csvtojson");
const path = require("path");
require("dotenv").config();

const connectDB = require("../utils/db");
const CollectRequest = require("../models/CollectRequest"); // Correctly import the model for transactions
const CollectRequestStatus = require("../models/CollectRequestStatus"); // Correctly import the model for statuses

const importData = async () => {
  try {
    await connectDB(); // Ensure you are connected to the DB

    // Import the collect_request.csv file
    const collectRequestPath = path.join(__dirname, "test.collect_request.csv");
    const collectRequests = await csvtojson().fromFile(collectRequestPath);

    // Clear existing data and insert new data for CollectRequest
    await CollectRequest.deleteMany();
    await CollectRequest.insertMany(collectRequests);
    console.log("CollectRequest data imported!");

    // Import the collect_request_status.csv file
    const collectRequestStatusPath = path.join(
      __dirname,
      "test.collect_request_status.csv"
    );
    const collectRequestStatuses = await csvtojson().fromFile(
      collectRequestStatusPath
    );

    // Clear existing data and insert new data for CollectRequestStatus
    await CollectRequestStatus.deleteMany();
    await CollectRequestStatus.insertMany(collectRequestStatuses);
    console.log("CollectRequestStatus data imported!");

    process.exit();
  } catch (err) {
    console.error("Error importing data:", err.message);
    process.exit(1);
  }
};

importData();
