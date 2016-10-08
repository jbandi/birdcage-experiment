'use strict';

require('babel-polyfill');
require('isomorphic-fetch');

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var _require = require('../config');

var PORT = _require.PORT;

var _require2 = require('birdcage-data-mock');

var repo = _require2.repo;
// const {repo} = require('birdcage-data-couchdb');

var app = express();

app.listen(PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined')); // configure default log output
console.log('Server running at http://localhost:' + PORT);

app.all('/api/*', function (req, res, next) {
    res.header('Cache-Control', 'no-cache');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/tweets', function (req, res) {
    return repo.getTweets().then(function (tweets) {
        return res.status(200).json({ data: tweets });
    });
});

var tweets = [{
    type: 'tweet',
    title: 'Use REST',
    priority: Date.now(),
    created: new Date(),
    tweeted: null,
    count: 0

}];