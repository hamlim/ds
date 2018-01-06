'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prettier = require('prettier');

var _prettier2 = _interopRequireDefault(_prettier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stringify = dict => key => {
  if (typeof dict[key] === 'string') {
    return `"${key}": "${dict[key]}"`;
  } else {
    return `"${key}": {
      ${Object.keys(dict[key]).map(stringify(dict[key]))}
    }`;
  }
};

exports.default = ({ fonts, colors, numbers }) => _prettier2.default.format(`{
  "colors": {
    ${Object.keys(colors).map(stringify(colors)).join(',')}
  },
  "fonts": {
    ${Object.keys(fonts).map(stringify(fonts)).join(',')}
  },
  "numbers": {
    ${Object.keys(numbers).map(stringify(numbers)).join(',')}
  }
}`, { parser: 'json' });