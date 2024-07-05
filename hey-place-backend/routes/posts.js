const express = require('express');
const router = express.Router();
const { getPosts, addPost } = require('../controllers/post');
const auth = require('../middleware/auth');

router.get('/', getPosts);
router.post('/', auth, addPost);

module.exports = router;
