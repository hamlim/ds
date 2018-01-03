// prettier-ignore
const fs = require('fs')

const stringify = dict => key => {
  if (typeof dict[key] === 'string') {
    return `"${key}": "${dict[key]}"`
  } else {
    return `"${key}": {
      ${Object.keys(dict[key]).map(stringify(dict[key]))}
    }`
  }
}

const main = () => {
  let fonts = require('./fonts.js')
  let colors = require('./colors.js')
  let numbers = require('./numbers.js')

  fs.writeFile(
    'default.json',
    `{
  "colors": {
    ${Object.keys(colors)
      .map(stringify(colors))
      .join(',')}
  },
  "fonts": {
    ${Object.keys(fonts)
      .map(stringify(fonts))
      .join(',')},
  },
  "numbers": {
    ${Object.keys(numbers)
      .map(stringify(numbers))
      .join(',')},
  },
}
  `,
    err => {
      console.error(err)
    }
  )
}

main()
