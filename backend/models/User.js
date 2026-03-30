const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Please enter your name"] 
    },
    email: { 
        type: String, 
        required: [true, "Please enter email"], 
        unique: true 
    },
    password: { 
        type: String, 
        required: [true, "Please enter password"],
        select: false // Login ke ilawa password query mein nahi aayega (Security)
    },
    role: { 
        type: String, 
        enum: ['customer', 'vendor', 'admin'], 
        default: 'customer' 
    },
    city: { 
        type: String, 
        default: 'Mandi Bahauddin' 
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);