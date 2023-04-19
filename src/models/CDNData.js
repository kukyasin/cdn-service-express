const mongoose = require("mongoose");

const cdnSchema = new mongoose.Schema({
  sender_store: {
    required: true,
    type: String,
    trim: true,
  },
  createdAt: {
    required: true,
    type: Number,
    trim: true,
  },
  cart: {
    required: true,
    type: Object,
  },
  address: {
    required: true,
    type: Object,
  },
});
const CdnData = mongoose.model("data", cdnSchema);

module.exports = CdnData;
