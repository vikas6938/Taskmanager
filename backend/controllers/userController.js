// controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register User
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password before saving the user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body; // Changed username to email

    try {
        const user = await User.findOne({ email }); // Lookup by email
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send the token and role in the response
        res.json({ token, role: user.role });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// Assign Role (Admin Only)
exports.assignRole = async (req, res) => {
    const { role } = req.body;

    try {
        // Check if the role is valid (either 'Admin' or 'User')
        if (!['Admin', 'User'].includes(role)) {
            return res.status(400).json({ message: 'Invalid role' });
        }

        // Find user by ID and update their role
        const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });

        res.json({ message: 'Role updated successfully', user });
    } catch (error) {
        res.status(400).json({ message: 'Error updating role', error });
    }
};
