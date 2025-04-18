import Transaction from "../models/Transaction.js";

// @desc Get all transactions
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// @desc Add a new transaction
export const addTransaction = async (req, res) => {
  try {
    const { amount, description, date, category } = req.body;

    if (!amount || !description || !date || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newTransaction = new Transaction({
      amount,
      description,
      date,
      category,
    });

    const saved = await newTransaction.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to add transaction" });
  }
};

// @desc Delete a transaction
export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    await Transaction.findByIdAndDelete(id);
    res.json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete transaction" });
  }
};

// @desc Update a transaction
export const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, description, date, category } = req.body;

    const updated = await Transaction.findByIdAndUpdate(
      id,
      { amount, description, date, category },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update transaction" });
  }
};
