const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = await User.create({ name, email, password, role });
        
        res.status(201).json({
            success: true,
            message: "User registered successfully!",
            user
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};