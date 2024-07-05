const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getPlaces, addPlace, getMyPlaces } = require('../controllers/place');

router.get('/', getPlaces);
router.post('/', auth, addPlace);
router.get('/my', auth, getMyPlaces);

module.exports = router;
