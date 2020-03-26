const express = require('express');
const { contactForm, contactBlogAuthorForm } = require('../controllers/form');

const router = express.Router();

// validators
const { runValidation } = require('../validators');
const { contactFormValidator } = require('../validators/form');

router.post('/contact', contactFormValidator, runValidation, contactForm);
router.post(
  '/contact-blog-author',
  contactFormValidator,
  runValidation,
  contactBlogAuthorForm
);

module.exports = router;
