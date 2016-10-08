'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import 'babel-polyfill';


var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BirdcageRepository = function () {
    function BirdcageRepository() {
        _classCallCheck(this, BirdcageRepository);
    }

    _createClass(BirdcageRepository, [{
        key: 'getTweets',
        value: function getTweets() {
            return fetch('http://localhost:5984/birdcage/_design/tweets/_view/all', { headers: { 'Cache-Control': 'no-cache' } }).then(function (r) {
                return r.json();
            }).then(function (v) {
                return v.rows.map(function (r) {
                    return r.value;
                });
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: 'addTweet',
        value: function addTweet(content) {

            var tweet = {
                type: 'tweet',
                content: content,
                priority: Date.now(),
                created: new Date(),
                tweeted: null,
                count: 0
            };

            return fetch('http://localhost:5984/birdcage/' + _uuid2.default.v4(), { method: 'PUT', body: JSON.stringify(tweet) });
        }
    }]);

    return BirdcageRepository;
}();

exports.default = BirdcageRepository;