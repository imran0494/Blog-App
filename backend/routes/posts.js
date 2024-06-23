const express = require('express');
const router = express.Router();
const posts = require('../data/posts.json');

// Get all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// Get post by ID
router.get('/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send({ message: 'Post not found' });
  }
});

module.exports = router;
