import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Groceries",
        "Transport",
        "Personal Care",
        "Shopping",
        "Saving or Investment",
        "Healthcare",
        "Entertainment",
        "Other",
      ],
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model("Transaction", transactionSchema);
