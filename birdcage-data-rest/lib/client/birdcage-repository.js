'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('../config');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BirdcageRepository = function () {
    function BirdcageRepository() {
        _classCallCheck(this, BirdcageRepository);
    }

    _createClass(BirdcageRepository, [{
        key: 'getTweets',
        value: function getTweets() {
            return fetch('http://localhost:' + _config.PORT + '/api/tweets', { headers: { 'Cache-Control': 'no-cache' } }).then(function (r) {
                return r.json();
            }).then(function (r) {
                return r.data;
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }]);

    return BirdcageRepository;
}();

exports.default = BirdcageRepository;