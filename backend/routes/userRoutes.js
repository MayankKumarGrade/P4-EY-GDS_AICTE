const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// Models
const Order = require('../models/Order');
const Wishlist = require('../models/Wishlist');

/**
 * @route GET /api/user/orders
 * @desc Get user orders
 * @access Private
 */
router.get('/user/orders', protect, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 }); // Fetch orders for the logged-in user
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error while fetching orders' });
  }
});

/**
 * @route GET /api/user/wishlist
 * @desc Get user wishlist
 * @access Private
 */
router.get('/user/wishlist', protect, async (req, res) => {
  try {
    const wishlist = await Wishlist.find({ userId: req.user.id }); // Fetch wishlist for the logged-in user
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Server Error while fetching wishlist' });
  }
});

module.exports = router;
