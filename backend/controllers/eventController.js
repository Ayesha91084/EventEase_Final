const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json({
            success: true,
            message: "Event listed successfully!",
            event
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};