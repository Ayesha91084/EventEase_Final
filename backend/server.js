const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// --- TEST ROUTE (Sirf check karne ke liye) ---
app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ message: "Backend is working!" });
});

// --- REAL ROUTES ---
app.use('/api/v1', require('./routes/userRoutes'));

// MongoDB Connection
const uri = "mongodb+srv://ayehsabibi828_db_user:ayesha2026@cluster0.zadenzr.mongodb.net/EventEaseDB?retryWrites=true&w=majority";
mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
});