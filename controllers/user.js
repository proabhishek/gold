
const User = require('../models/user.js');


exports.createUser = async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  