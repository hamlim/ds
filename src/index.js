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
  let fonts = require(process.argv[2])
  let colors = require(process.argv[3])
  let numbers = require(process.argv[4])

  let outputPath = process.argv[5];

  fs.writeFile(
    outputPath,
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
}`,
    err => {
      console.error(err)
    },
  )
}

main()
