const express = require('express');
const path = require('path');
const compression = require('compression');
const favicon = require('serve-favicon');
const createPost = require('./routes');


const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.set('port', process.env.PORT || 5020);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(createPost.router);


module.exports = app;
