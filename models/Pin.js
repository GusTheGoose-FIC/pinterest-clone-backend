const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  likes: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Pin", PinSchema);
