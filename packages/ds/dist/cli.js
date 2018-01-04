'use strict';

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fs = require('fs');

const main = () => {

  fs.writeFile(process.argv[5], (0, _index2.default)({
    fonts: require(process.argv[2]),
    colors: require(process.argv[3]),
    numbers: require(process.argv[4])
  }), err => {
    console.error(err);
  });
};

main();