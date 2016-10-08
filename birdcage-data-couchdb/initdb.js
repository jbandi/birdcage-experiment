require('babel-polyfill');
require('isomorphic-fetch');

const lib = require('./lib/index');
const {initDb} = lib;

initDb();
