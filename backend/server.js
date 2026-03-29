const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './.env' });

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(`${req.method} request incoming to: ${req.url}`);
    next();
});
//app.use('/api/v1', require('./routes/userRoutes'));
//app.use('/api/v1', require('./routes/userRoutes'));app.use('/test', require('./routes/userRoutes'));
app.use('/test', require('./routes/userRoutes'));


// MongoDB Connection
// Humne process.env.MONGO_URI is liye likha hai taake ye .env file se link uthaye

//console.log("My Link is:"mongodb+srv://ayehsabibi828_db_user:085656@..@cluster0.zadenzr.mongodb.net/?appName=Cluster0");

//const password = encodeURIComponent(ayesha2026); 
//const uri = `mongodb+srv://ayehsabibi828_db_user:${password}@cluster0.zadenzr.mongodb.net/EventEaseDB?retryWrites=true&w=majority`;
// Agar naya password 'ayesha2026' rakha hai to link aisi hogi:
const uri = "mongodb+srv://ayehsabibi828_db_user:ayesha2026@cluster0.zadenzr.mongodb.net/EventEaseDB?retryWrites=true&w=majority";
mongoose.connect(uri)

  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Test Route (Sirf check karne ke liye ke server chal raha hai)
app.get('/', (req, res) => {
    res.send("EventEase Backend is Running!");
});

const PORT = process.env.PORT || 5000;
//app.use('/api/v1', require('./routes/userRoutes'));
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});