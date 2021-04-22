const isValidBST = root => {
  // call recursive function
  return validate(root, null, null);
  // recurisive helper is hoisted
  function validate(currentNode, lowLimit, highLimit) {
      // base case, we have made it all the way through
      if (currentNode == null) return true;
      // check currentNode against rule set
      if ((lowLimit != null && currentNode.val <= lowLimit) ||
          (highLimit != null && currentNode.val >= highLimit)) return false;
      // recursive step on children
      // if left returns true, perform recursive step on right
      return validate(currentNode.left, lowLimit, currentNode.val)
          && validate(currentNode.right, currentNode.val, highLimit)
  }
};
