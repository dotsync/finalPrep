const isSymmetric = root => {

  return traverse(root, root)
  // recursive helper
  function traverse(leftTreeNode, rightTreeNode) {
      if (leftTreeNode == null && rightTreeNode == null) return true;
      else if (leftTreeNode == null || rightTreeNode == null) return false;
      // if values are the same
      return (leftTreeNode.val === rightTreeNode.val)
          // if the check - lefts right against rights left is true
          && traverse(leftTreeNode.right, rightTreeNode.left)
          // traverse lefts left and rigts right
          && traverse(leftTreeNode.left, rightTreeNode.right)
  }
};
