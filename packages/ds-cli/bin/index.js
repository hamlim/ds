#! /usr/bin/env node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _ds = require('@matthamlin/ds');

var _ds2 = _interopRequireDefault(_ds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const main = () => {
  _fs2.default.writeFile(process.argv[5], (0, _ds2.default)({
    fonts: require(process.argv[2]),
    colors: require(process.argv[3]),
    numbers: require(process.argv[4])
  }), err => {
    console.error(err);
  });
};

main();