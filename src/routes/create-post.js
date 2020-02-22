const router = require('express').Router();
const createPost = require('../controller');


router.post('/create-post', createPost.createPost);
router.get('/post', createPost.readPost);

module.exports = {
  router,
};
