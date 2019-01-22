const {
  getRemoveOutput,
  getAddOutput,
  getDiffResult,
  removedWord,
  addedWord,
  black,
  bgRed,
  bgGreen
} = require('../lib/output')

test('diff "123" && "122", () => {
  const diffResult = getDiffResult('123', '122')
  const removeOutput = getRemoveOutput(diffResult)
  const addOutput = getAddOutput(diffResult)
  expect(addOutput).toBe(bgGreen(black('+ ') + black('12') + addedWord(black('2'))))
  expect(removeOutput).toBe(bgRed(black('- ') + black('12') + removedWord(black('3'))))
})

test('diff "hello world" and "helo world"', () => {
  const diffResult = getDiffResult('hello world', 'helo world')
  const removeOutput = getRemoveOutput(diffResult)
  const addOutput = getAddOutput(diffResult)
  expect(addOutput).toBe(bgGreen(black('+ ') + black('hel') + black('o world')))
  expect(removeOutput).toBe(bgRed(black('- ') + black('hel') + removedWord(black('l') + black(' world'))))
})

test('diff "helo world" and "hello world"', () => {
  const diffResult = getDiffResult('hello world', 'helo world')
  const removeOutput = getRemoveOutput(diffResult)
  const addOutput = getAddOutput(diffResult)
  expect(addOutput).toBe(bgGreen(black('+ ') + black('hel') + black('o world')))
  expect(removeOutput).toBe(bgRed(black('- ') + black('hel') + removedWord(black('l') + black(' world'))))
})
