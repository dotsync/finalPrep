const maximumSumSubarrayOfSizeK = require('./maximumSumSubarrayOfSizeK')

describe('Sliding Window Problems', () => {
  describe('maximumSumSubarrayOfSizeK', () => {
    test('should return null if K is larger than input array', () => {
      expect(maximumSumSubarrayOfSizeK([1,2,3], 6)).toBeNull();
    })
    test('should return the maximum sum subarray', () => {
      expect(maximumSumSubarrayOfSizeK([1,2,3], 2)).toBe(5);
      expect(maximumSumSubarrayOfSizeK([1,2,3], 1)).toBe(3);
      expect(maximumSumSubarrayOfSizeK([1,2,3], 3)).toBe(6);
    })
    test('should return the maximum sum subarray with larger input', () => {
      expect(maximumSumSubarrayOfSizeK([1,2,3, 6, 1, 11, 9, 43, 2, 1, 75, 2, 2], 2)).toBe(77);
    })
  })
})
