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
    // base case is value already exists
    // check for empty tree
    if (currentNode == null) this.root = new BSTNode(val)
    // if left is less than
        // and if right is empty, add node
        // else not empty so recursivly call this.insert
    // else if right is more than
      // and if right is empty, add node
      // else not empty so recursivly call this.insert
  }
  // findNode
  // validate

}

module.exports = { BSTNode, BinarySearchTree }
