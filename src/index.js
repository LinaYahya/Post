const app = require('./app');


app.listen(app.get('port'), () => {
   console.log('http://localhost:5020');
});
