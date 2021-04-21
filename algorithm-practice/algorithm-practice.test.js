const reverseString = require('./01-reverseString');
const isPalindrome = require('./02-isPalindrome');

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
    describe('isPalindrome toy problem', () => {
      test('should detect that the input is a palindrome', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
      })
      test('should detect that the input is NOT a palindrome', () => {
        expect(isPalindrome("race a car")).toBe(false)
      })
      test('should work for invalid inputs', () => {
        expect(isPalindrome("")).toBe(true)
      })

    })

  })
  describe('Tree problems', () => {
    describe('validateBST toy problem', () => {
      test('should validate an empty tree', () => {

      })
      test('should validate the binary search tree', () => {

      })
      test('should not validate the non binary search tree', () => {

      })
    })
  })
})
