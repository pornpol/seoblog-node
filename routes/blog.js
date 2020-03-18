const express = require('express');
const {
  create,
  list,
  listAllBlogsCategoriesTags,
  read,
  remove,
  update
} = require('../controllers/blog');
const { requireSignin, adminMiddleware } = require('../controllers/auth');

const router = express.Router();

router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/blogs', list);
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/blog/:slug', requireSignin, adminMiddleware, update);

module.exports = router;
