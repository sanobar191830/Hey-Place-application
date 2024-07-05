const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getMessages } = require('../controllers/message');

router.get('/', auth, getMessages);

module.exports = router;
