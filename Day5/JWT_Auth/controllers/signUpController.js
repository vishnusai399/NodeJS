const bcrypt = require('bcrypt');
const User = require('../models/userSchema');

const signupHandler = async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        console.log(user)
        return res.status(201).json({
            message: 'User created',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Server error'
        });
    }
};

module.exports = { signupHandler };