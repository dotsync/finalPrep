var isPalindrome = function(s) {
  // remove spaces and capitals
  s = s.replace(/[^0-9a-zA-Z]+/gmi,"").toLowerCase();
  return reverse = s.split('').reverse().join('') == s
};
