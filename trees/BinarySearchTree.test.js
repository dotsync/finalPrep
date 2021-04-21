const { BSTNode, BinarySearchTree } = require('./BinarySearchTree')

describe('Binary Search Tree', () => {
  describe('BST Node Class', () => {
    const bstNode = new BSTNode('Hello world!')
    test('should have a left property', () => {
      expect(bstNode.left).toBeNull();
    })
    test('should have a right property', () => {
      expect(bstNode.right).toBeNull();
    })
    test('should store data', () => {
      expect(bstNode.val).toBe('Hello world!');
    })
  })
  describe('BST Tree class', () => {
    test('should instantiate an empty tree', () => {
      const bst = new BinarySearchTree;
      expect(bst.root).toBeNull();
    })

    describe('insert', () => {
      test('should insert into an empty Tree', () => {
        const bst = new BinarySearchTree;
      })
      test('should insert new nodes in the correct position', () => {

      })
    })
  })
})
