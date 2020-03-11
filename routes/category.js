const express = require('express');
const { create } = require('../controllers/category');

const router = express.Router();

// validators
const { runValidation } = require('../validators');
const { categoryCreateValidator } = require('../validators/category');
const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.post(
  '/category',
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

module.exports = router;
