const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  repairman: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
});
module.exports = mongoose.model('Booking', bookingSchema);
