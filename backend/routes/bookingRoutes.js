const express = require('express');
const { createBooking, getClientBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createBooking);
router.get('/client', authMiddleware, getClientBookings);

module.exports = router;
