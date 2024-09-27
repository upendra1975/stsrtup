const Booking = require('../models/Booking');

// Create a booking
exports.createBooking = async (req, res) => {
  const { repairmanId, service, date } = req.body;
  try {
    const booking = new Booking({
      client: req.user.userId,
      repairman: repairmanId,
      service,
      date,
    });
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Get client bookings
exports.getClientBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ client: req.user.userId }).populate('repairman', 'name');
    res.json(bookings);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
