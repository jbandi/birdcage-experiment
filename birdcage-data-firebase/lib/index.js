'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repo = undefined;

var _birdcageRepository = require('./birdcage-repository');

var _birdcageRepository2 = _interopRequireDefault(_birdcageRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Repo = require('./birdcage-repository');

var repo = new _birdcageRepository2.default();

exports.repo = repo;