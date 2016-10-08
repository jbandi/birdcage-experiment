'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repo = undefined;

var _DB = require('./DB');

Object.keys(_DB).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DB[key];
    }
  });
});

var _birdcageRepository = require('./birdcage-repository');

var _birdcageRepository2 = _interopRequireDefault(_birdcageRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var repo = exports.repo = new _birdcageRepository2.default();