const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {
  const postPath = path.join(__dirname, '..', 'posts.json');
  fs.readFile(postPath, (err, file) => {
    if (err) next(err);
    else {
      const myObj = JSON.parse(file);
      myObj[Date.now()] = req.body.post;
      fs.writeFile(postPath, JSON.stringify(myObj), (err) => {
        if (err) next(err);
        else {
          res.writeHead(302, { Location: '/' });
          res.end();
        }
      });
    }
  });
};
