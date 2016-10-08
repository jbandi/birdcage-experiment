'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initDb = undefined;

var initDb = exports.initDb = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var tweetView, tweet;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('Initializing DB ...');

                        _context.next = 3;
                        return fetch('http://127.0.0.1:5984/birdcage', { method: 'DELETE' });

                    case 3:
                        console.log('db deleted');

                        _context.next = 6;
                        return fetch('http://127.0.0.1:5984/birdcage', { method: 'PUT' });

                    case 6:
                        console.log('db created');

                        tweetView = {
                            "_id": "_design/tweets",
                            "language": "javascript",
                            "views": {
                                "all": {
                                    "map": "function(doc) { if (doc.type == 'tweet')  emit(doc.priority, doc) }"
                                }
                            }
                        };
                        _context.next = 10;
                        return fetch('http://127.0.0.1:5984/birdcage/_design/tweets', { method: 'PUT', body: JSON.stringify(tweetView) });

                    case 10:
                        console.log('tweet view created');

                        tweet = {
                            type: 'tweet',
                            content: 'Use CouchDB',
                            priority: Date.now(),
                            created: new Date(),
                            tweeted: null,
                            count: 0

                        };
                        _context.next = 14;
                        return fetch('http://127.0.0.1:5984/birdcage/' + _uuid2.default.v4(), { method: 'PUT', body: JSON.stringify(tweet) });

                    case 14:
                        console.log('tweet created');

                    case 15:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function initDb() {
        return _ref.apply(this, arguments);
    };
}();

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }