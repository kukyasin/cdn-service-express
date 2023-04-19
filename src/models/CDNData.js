const mongoose = require("mongoose");

const cdnSchema = new mongoose.Schema({
  sender_store: {
    required: true,
    type: String,
    trim: true,
  },
  mobile_phone: {
    required: true,
    type: Number,
    trim: true,
  },
  full_name: {
    required: true,
    type: String,
    trim: true,
  },
  products: {
    required: true,
    type: Array,
  },
  client_created_at:{
    required: true,
    type: String,
    trim: true
  },
  cart_created_at:{
    required: true,
    type:String,
    trim: true
  }
});
const CdnData = mongoose.model("data", cdnSchema);

module.exports = CdnData;
