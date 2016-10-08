require('babel-polyfill');
require('isomorphic-fetch');

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

const {PORT} = require('../config');
// const {repo} = require('birdcage-data-mock');
const {repo} = require('birdcage-data-couchdb');

var app = express();

app.listen(PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined')); // configure default log output
console.log(`Server running at http://localhost:${PORT}`);

app.all('/api/*', function(req, res, next) {
    res.header('Cache-Control', 'no-cache');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/api/tweets', (req, res) =>
    repo.getTweets()
        .then(tweets => res.status(200).json({data: tweets}))
);


const tweets = [{
    type: 'tweet',
    title: 'Use REST',
    priority: Date.now(),
    created: new Date(),
    tweeted: null,
    count: 0,

}];
