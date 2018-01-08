'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _prettier = require('prettier');

var _prettier2 = _interopRequireDefault(_prettier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stringifyWithFontSize = fontSize => dict => key => {
  if (typeof dict[key] === 'number') {
    return `"${key}": "${dict[key] / fontSize}rem"`;
  } else {
    return `"${key}": {
      ${Object.keys(dict[key]).map(stringifyWithFontSize(fontSize)(dict[key]))}
    }`;
  }
};

const stringifyWithUnits = units => dict => key => {
  if (typeof dict[key] === 'string') {
    return `"${key}": "${dict[key]}${units}"`;
  } else if (typeof dict[key] === 'number') {
    return `"${key}": "${dict[key]}${units}"`;
  } else {
    return `"${key}": {
      ${Object.keys(dict[key]).map(stringifyWithUnits(units)(dict[key]))}
    }`;
  }
};

const stringify = dict => key => {
  if (typeof dict[key] === 'string') {
    return `"${key}": "${dict[key]}"`;
  } else {
    return `"${key}": {
      ${Object.keys(dict[key]).map(stringify(dict[key]))}
    }`;
  }
};

exports.default = ({ fonts, colors, numbers, modularScale, breakpoints, fontSizes = 10, baseFontSize = 16 }) => {
  let sizes = {};
  if (modularScale) {
    sizes = Array.from({ length: fontSizes }).map((_, i) => i).reduce((acc, size, i) => _extends({}, acc, { [i]: i * modularScale.ratio || 1 }), {});
  }

  return _prettier2.default.format(`{
  "colors": {
    ${Object.keys(colors).map(stringify(colors)).join(',')}
  },
  "fonts": {
    ${Object.keys(fonts).map(stringify(fonts)).join(',')},
    "sizes": {
      ${Object.keys(sizes).map(stringifyWithUnits('rem')(sizes)).join(',')}
    }
  },
  "numbers": {
    ${Object.keys(numbers).map(stringify(numbers)).join(',')}
  },
  "breakpoints": {
    ${Object.keys(breakpoints).map(stringifyWithFontSize(baseFontSize)(breakpoints)).join(',')}
  }
}`, { parser: 'json' });
};