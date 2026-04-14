const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Add bcrypt hashing hook in a real app or in auth controller
  savedCars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Car' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
