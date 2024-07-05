const Place = require('../models/Place');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

exports.getPlaces = async (req, res) => {
  try {
    const places = await Place.find().populate('user', ['username']);
    res.json(places);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addPlace = [
  upload.array('media'),
  async (req, res) => {
    const { name, location, cost, suggestions } = req.body;
    const mediaUrls = req.files.map(file => {
      // logic to save file and return URL
      return 'url_of_file';
    });

    try {
      const newPlace = new Place({
        user: req.user.id,
        name,
        location,
        cost,
        suggestions,
        media: mediaUrls,
      });
      const place = await newPlace.save();
      res.json(place);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },
];

exports.getMyPlaces = async (req, res) => {
  try {
    const places = await Place.find({ user: req.user.id });
    res.json(places);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
