const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  location: { type: String, required: true },
  cost: { type: Number, required: true },
  suggestions: { type: String },
  media: [String],
  likes: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }],
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      text: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Place', PlaceSchema);
