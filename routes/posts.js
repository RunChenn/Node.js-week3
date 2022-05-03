const express = require('express');
const router = express.Router();
const PostsControllers = require('../controllers/posts');

router.get('/', PostsControllers.getPosts);

router.post('/', PostsControllers.createdPosts);

router.delete('/', PostsControllers.deletePosts);

router.delete('/:id', PostsControllers.deletePost);

router.patch('/:id', PostsControllers.updatePosts);

module.exports = router;
