'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const stringify = dict => key => {
  if (typeof dict[key] === 'string') {
    return `"${key}": "${dict[key]}"`;
  } else {
    return `"${key}": {
      ${Object.keys(dict[key]).map(stringify(dict[key]))}
    }`;
  }
};

exports.default = ({ font, color, number }) => {
  let fonts = require(font);
  let colors = require(font);
  let numbers = require(number);

  return `{
  "colors": {
    ${Object.keys(colors).map(stringify(colors)).join(',')}
  },
  "fonts": {
    ${Object.keys(fonts).map(stringify(fonts)).join(',')},
  },
  "numbers": {
    ${Object.keys(numbers).map(stringify(numbers)).join(',')},
  },
}`;
};