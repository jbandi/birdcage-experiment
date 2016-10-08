'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _secret = require('./secret');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BirdcageRepository = function () {
    function BirdcageRepository() {
        _classCallCheck(this, BirdcageRepository);

        this.isInitialized = false;
    }

    _createClass(BirdcageRepository, [{
        key: 'init',
        value: function init() {
            var _this = this;

            if (this.isInitialized) return Promise.resolve();

            _firebase2.default.initializeApp(_secret.config);
            return _firebase2.default.auth().signInWithEmailAndPassword(_secret.EMAIL, _secret.PWD).then(function () {
                _this.isInitialized = true;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'getTweets',
        value: function getTweets() {
            return this.init().then(function () {
                return new Promise(function (resolve) {

                    var postRef = _firebase2.default.database().ref('posts/' + _secret.USER).orderByPriority().startAt(2);
                    postRef.on('value', function (snapshot) {
                        var tweetsArray = [];
                        var tweetsObj = snapshot.exportVal();
                        if (tweetsObj) {
                            tweetsArray = Object.keys(tweetsObj).map(function (x) {
                                return tweetsObj[x];
                            });
                        }
                        resolve(tweetsArray);
                    });
                });
            });
        }
    }, {
        key: 'addTweet',
        value: function addTweet(title) {
            return this.init().then(function () {
                var tweet = {
                    content: title,
                    // '.priority': Date.now(),
                    '.priority': Math.random() * 10000 + 2,
                    sent_count: 0
                };
                return new Promise(function (resolve) {
                    _firebase2.default.database().ref('posts/' + _secret.USER).push(tweet);
                    resolve();
                });
            });
        }
    }]);

    return BirdcageRepository;
}();

exports.default = BirdcageRepository;