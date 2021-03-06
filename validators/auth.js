const { check } = require('express-validator');

exports.userSignupValidator = [
  check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required'),
  check('email')
    .isEmail()
    .withMessage('Must be a validate E-Mail'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

exports.userSigninValidator = [
  check('email')
    .isEmail()
    .withMessage('Must be a valid E-Mail'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

exports.forgotPasswordValidator = [
  check('email')
    .isEmail()
    .withMessage('Must be a valid E-Mail')
];

exports.resetPasswordValidator = [
  check('newPassword')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];
