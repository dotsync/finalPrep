const reverseString = require('./01-reverseString')

describe('Easy problems', () => {
  describe('String problems', () => {
    describe('reverseString toy problem', () => {
      test('should reverse odd length strings', () => {
        expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toStrictEqual(['o', 'l', 'l', 'e', 'h']);
      })
      test('should reverse even length strings', () => {
        expect(reverseString(['l', 'o'])).toStrictEqual(['o', 'l']);
      })
      test('should reverse empty input', () => {
        expect(reverseString([])).toStrictEqual([])
      })
    })
  })
})
