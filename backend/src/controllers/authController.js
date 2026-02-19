import User from '../models/User.js';
import { getSignedJwtToken } from '../middleware/auth.js';
import { mockDB } from '../services/mockDatabase.js';
import bcrypt from 'bcryptjs';

// Check if MongoDB is available
const isMongoDB = process.env.MONGODB_URI && !process.env.MONGODB_URI.includes('localhost');

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    let existingUser;
    let newUser;

    if (isMongoDB) {
      // Use MongoDB
      existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email already registered' });
      }

      newUser = new User({ name, email, password });
      await newUser.save();
    } else {
      // Use mock database for testing
      existingUser = await mockDB.findUser(email);
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email already registered' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      newUser = await mockDB.createUser({
        name,
        email,
        password: hashedPassword,
        role: 'user',
      });
    }

    const token = getSignedJwtToken(newUser._id);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ success: false, message: error.message || 'Registration failed' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    let user;

    if (isMongoDB) {
      // Use MongoDB
      user = await User.findOne({ email }).select('+password');
    } else {
      // Use mock database
      user = await mockDB.findUser(email);
    }

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = getSignedJwtToken(user._id);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ success: false, message: error.message || 'Login failed' });
  }
};

export const getMe = async (req, res) => {
  try {
    let user;

    if (isMongoDB) {
      // Use MongoDB
      user = await User.findById(req.user.id);
    } else {
      // Use mock database
      user = await mockDB.findUserById(req.user.id);
    }

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error('Get User Error:', error);
    res.status(500).json({ success: false, message: error.message || 'Failed to get user' });
  }
};

