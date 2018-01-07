#! /usr/bin/env node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ds = require('@matthamlin/ds');

var _ds2 = _interopRequireDefault(_ds);

var _yargs = require('yargs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const main = () => {
  const cwd = process.cwd();
  const config = _yargs.argv.config;
  if (config) {
    let c;
    const rawConfig = require(_path2.default.join(cwd, config));
    if (typeof rawConfig === 'function') {
      c = rawConfig().ds;
    } else {
      c = rawConfig.ds;
    }
    const { output, numbers, colors, fonts, modularScale } = c;
    if (!output || !numbers || !colors || !fonts || !modularScale) {
      console.error(`
Error: Config file is lacking required entires for output, numbers, colors, fonts, and modularScale.
Update your config file with these paths and try again.
`);
      return;
    } else {
      _fs2.default.writeFile(output, (0, _ds2.default)({
        fonts: require(_path2.default.join(cwd, fonts)),
        numbers: require(_path2.default.join(cwd, numbers)),
        colors: require(_path2.default.join(cwd, colors)),
        modularScale: require(_path2.default.join(cwd, modularScale))
      }), err => {
        if (err) {
          console.error(`An error occured when attempting to write to the output file. Here is the error from fs.writeFile: `, err);
        }
      });
    }
  } else {
    console.error(`
No config file provided, try running again with --config="path/to/your/config/file"
`);
  }
};

main();