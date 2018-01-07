'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ds = require('@matthamlin/ds');

var _ds2 = _interopRequireDefault(_ds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const main = () => {
  const cwd = process.cwd();
  _fs2.default.writeFile(process.argv[5], (0, _ds2.default)({
    fonts: require(_path2.default.join(cwd, process.argv[2])),
    colors: require(_path2.default.join(cwd, process.argv[3])),
    numbers: require(_path2.default.join(cwd, process.argv[4])),
    modularScale: process.argv.length >= 6 ? require(_path2.default.join(cwd, process.argv[5])) : null
  }), err => {
    console.error(err);
  });
};

main();