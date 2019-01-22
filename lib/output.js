const jsdiff = require('diff')
const chalk = require('chalk')

const removedWord = chalk.bgRgb(253, 182, 187)
const addedWord = chalk.bgRgb(154, 240, 153)
const black = chalk.black
const bgRed = chalk.bgRgb(253, 232, 233)
const bgGreen = chalk.bgRgb(222, 254, 222)
const outputType = {
  ADDED: 'ADDED',
  REMOVED: 'REMOVED'
}

function output (type) {
  return function (previous, current, index, array) {
    let color
    if (type === outputType.ADDED) {
      color = current.added ? addedWord : undefined
    } else {
      color = current.removed ? removedWord : undefined
    }

    if (type === outputType.ADDED) {
      if (current.removed) {
        return previous
      }
      return previous + (color ? color(black(current.value)) : black(current.value))
    } else {
      if (current.added) {
        return previous
      }
      return previous + (color ? color(black(current.value)) : black(current.value))
    }
  }
}

const getDiffResult = (firstValue, secondValue) => jsdiff.diffChars(firstValue, secondValue)
const getRemoveOutput = result => bgRed(black('- ') + result.reduce(output(outputType.REMOVED), ''))
const getAddOutput = result => bgGreen(black('+ ') + result.reduce(output(outputType.ADDED), ''))

module.exports = {
  getDiffResult,
  getRemoveOutput,
  getAddOutput,
  removedWord,
  addedWord,
  black,
  bgRed,
  bgGreen
}
