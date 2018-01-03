const colors = require('./colors.js')
const numbers = require('./numbers.js')

module.exports = {
  base: {
    color: colors.base,
    size: numbers.base,
  },
  headline: {
    color: colors.base,
    size: numbers.large,
  },
  link: {
    color: colors.primary,
    size: numbers.base,
    activeColor: colors.secondary,
  },
}
