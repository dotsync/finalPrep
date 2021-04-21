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
    describe('#insert method', () => {
      test('should insert into an empty Tree', () => {
        const bst = new BinarySearchTree;
        bst.insert(100);
        expect(bst.root.val).toBe(100);
        expect(bst.root.left).toBeNull();
        expect(bst.root.right).toBeNull();
      })
      test('should return -1 if the value is already in the tree', () => {
        const bst = new BinarySearchTree;
        bst.insert(100);
        expect(bst.root.val).toBe(100);
        expect(bst.insert(100)).toBe(-1);
      })
      test('should insert new nodes in the correct position', () => {
        const bst = new BinarySearchTree;
        bst.insert(100);
        bst.insert(50);
        expect(bst.root.val).toBe(100);
        expect(bst.root.left.val).toBe(50);
        bst.insert(40);
        expect(bst.root.left.left.val).toBe(40);
        // build up right
        bst.insert(150);
        bst.insert(200);
        expect(bst.root.right.val).toBe(150);
        expect(bst.root.right.right.val).toBe(200);
      })
    })
  })
})
