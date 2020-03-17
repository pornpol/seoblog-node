const express = require('express');
const { create } = require('../controllers/blog');
const { requireSignin, adminMiddleware } = require('../controllers/auth');
const { read } = require('../controllers/user');

const router = express.Router();

router.post('/blog', requireSignin, adminMiddleware, create);

module.exports = router;
