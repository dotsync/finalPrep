const maximumSumSubarrayOfSizeK = (array, k) => {
  let maxSum = 0;
  let currentSum = 0;
  if (k > array.length) return null;
  // create initial window
  for (let i = 0; i < k; i++) {
    maxSumm += array[i];
  }
  // set current sum to be initial window
  currentSum = maxSum;
}

module.exports = maximumSumSubarrayOfSizeK;
