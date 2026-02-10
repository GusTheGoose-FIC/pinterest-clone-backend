import mongoose from "mongoose";

const pinSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    user: {
      type: String,
      default: "Anon",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Pin", pinSchema);
