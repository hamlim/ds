'use strict';

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fs = require('fs');

const main = () => {
  let outputPath = process.argv[5];

  fs.writeFile(outputPath, (0, _index2.default)({
    font: process.argv[2],
    color: process.argv[3],
    numbers: process.argv[4]
  }), err => {
    console.error(err);
  });
};

main();