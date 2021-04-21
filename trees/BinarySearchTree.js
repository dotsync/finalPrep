class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // check for empty tree
    if (currentNode == null) {
      this.root = new BSTNode(val);
      // return to get out of method
      return;
    }
    // base case is value already exists
    if (currentNode.val === val) return -1;
    // if left is less than current
    if (val < currentNode.val) {
      // and if left is empty, add node
      if (currentNode.left == null) {
        currentNode.left = new BSTNode(val);
      } else { // else not empty so recursivly call this.insert
        return this.insert(val, currentNode.left);
      }
    } else if (val > currentNode.val) { // else if right is more than current
      // and if right is empty, add node
      if (currentNode.right == null) {
        currentNode.right = new BSTNode(val);
      } else { // else not empty so recursivly call this.insert
        return this.insert(val, currentNode.right);
      }
    }
  }
}
module.exports = { BSTNode, BinarySearchTree }
