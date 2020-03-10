const express = require('express');
const { signup, signin } = require('../controllers/auth');

const router = express.Router();

// validators
const { runValidation } = require('../validators');
const {
  userSignupValidator,
  userSigninValidator
} = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);

module.exports = router;
