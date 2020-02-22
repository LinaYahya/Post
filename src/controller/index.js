const path = require('path');
const fs = require('fs');
const createPost = require('./createPostCont');

module.exports = {
  readPost: (req, res, next) => {
    const postPath = path.join(__dirname, '..', 'posts.json');
    fs.readFile(postPath, (err, file) => {
      if (err) next(err);
      else {
        res.send(file);
      }
    });
  },
  createPost,
};
