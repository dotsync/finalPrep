const { BSTNode, BinarySearchTree } = require('./BinarySearchTree')

describe('Binary Search Tree', () => {
  describe('Node Class', () => {
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
  describe('Tree class', () => {

  })
})
