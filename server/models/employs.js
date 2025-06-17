// models/employs.js
const mongoose = require("mongoose");

const employSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model("Employ", employSchema);
