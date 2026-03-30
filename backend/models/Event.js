const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { 
        type: String, 
        required: true, 
        enum: ['Venue', 'Catering', 'Photography', 'Decoration'] 
    },
    location: { type: String, default: 'Mandi Bahauddin' },
    vendor: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);