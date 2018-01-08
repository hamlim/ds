import prettier from 'prettier'

const stringifyWithFontSize = fontSize => dict => key => {
  if (typeof dict[key] === 'number') {
    return `"${key}": "${dict[key] / fontSize}rem"`
  } else {
    return `"${key}": {
      ${Object.keys(dict[key]).map(stringifyWithFontSize(fontSize)(dict[key]))}
    }`
  }
}

const stringifyWithUnits = units => dict => key => {
  if (typeof dict[key] === 'string') {
    return `"${key}": "${dict[key]}${units}"`
  } else if (typeof dict[key] === 'number') {
    return `"${key}": "${dict[key]}${units}"`
  } else {
    return `"${key}": {
      ${Object.keys(dict[key]).map(stringifyWithUnits(units)(dict[key]))}
    }`
  }
}

const stringify = dict => key => {
  if (typeof dict[key] === 'string') {
    return `"${key}": "${dict[key]}"`
  } else {
    return `"${key}": {
      ${Object.keys(dict[key]).map(stringify(dict[key]))}
    }`
  }
}

export default ({ fonts, colors, numbers, modularScale, breakpoints, fontSizes = 10, baseFontSize = 16 }) => {
  let sizes = {}
  if (modularScale) {
    sizes = Array.from({ length: fontSizes })
      .map((_, i) => i)
      .reduce((acc, size, i) => ({ ...acc, [i]: i * modularScale.ratio || 1 }), {})
  }

  return prettier.format(
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
    "sizes": {
      ${Object.keys(sizes)
        .map(stringifyWithUnits('rem')(sizes))
        .join(',')}
    }
  },
  "numbers": {
    ${Object.keys(numbers)
      .map(stringify(numbers))
      .join(',')}
  },
  "breakpoints": {
    ${Object.keys(breakpoints)
      .map(stringifyWithFontSize(baseFontSize)(breakpoints))
      .join(',')}
  }
}`,
    { parser: 'json' },
  )
}
