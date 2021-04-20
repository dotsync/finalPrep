const reverseString = s => {
  let last = s.length-1;
  for (let first = 0; first < last; first ++) {
      let temp = s[first];
      s[first] = s[last];
      s[last] = temp;
      last --;
  }
  return s;
};

module.exports = reverseString;
