class node {
  value: number;
  left: node | null;
  right: node | null;

  constructor(val: number) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  private root: node | null;

  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  insert(num: number) {
    if (this.root == null) {
      this.root = new node(num);
    } else {
      let temp: node | null;
      let temp2 = this.root;

      temp = this.root;

      if (num < this.root.value && this.root.left == null) {
        this.root.left = new node(num);
        return;
      } else if (num > this.root.value && this.root.right == null) {
        this.root.right = new node(num);
        return;
      } else {
        while (temp != null) {
          if (num < temp.value) {
            temp2 = temp;
            temp = temp.left;
          } else {
            temp2 = temp;
            temp = temp.right;
          }
        }
        if (num < temp2.value) {
          temp2.left = new node(num);
        } else {
          temp2.right = new node(num);
        }
      }
    }
  }

  inOrder(_node: node | null) {
    if (_node === null) {
      return;
    }

    console.log(_node.value);

    this.inOrder(_node.left);
    this.inOrder(_node.right);
  }

  preOrder(_node: node | null) {
    if (_node === null) {
      return;
    }
    this.preOrder(_node.left);
    console.log(_node.value);
    this.preOrder(_node.right);
  }

  postOrder(_node: node | null) {
    if (_node === null) {
      return;
    }
    this.postOrder(_node.left);
    this.postOrder(_node.right);
    console.log(_node.value);
  }

  search(_node: node | null, num: number): node | any {
    if (_node!.value === num) {
      return _node;
    }

    if (num < _node!.value) {
      return this.search(_node!.left, num);
    } else if (num > _node!.value) {
      return this.search(_node!.right, num);
    }
  }

  Node_holding_value(num: number) {
    console.log(" The Node : ", this.search(this.root, num));
  }

  point_toPreviousNode(_node: node | null, num: number): any {
    if (_node!.left!.value === num || _node!.right!.value === num) {
      return _node;
    }

    if (num < _node!.value) {
      return this.point_toPreviousNode(_node!.left, num);
    } else {
      return this.point_toPreviousNode(_node!.right, num);
    }
  }

  deleteNode(num: number) {
    let _node = this.point_toPreviousNode(this.root, num);
  }
}
/* 
     
       TREE
        
          2
      1      4
          3     9        
    
  
  
     */

const main = () => {
  var bineryTree = new BinaryTree();
  bineryTree.insert(2);
  bineryTree.insert(4);
  bineryTree.insert(1);
  bineryTree.insert(9);
  bineryTree.insert(3);
  bineryTree.insert(10);

  bineryTree.inOrder(bineryTree.getRoot());
  console.log("PreOrder");
  bineryTree.preOrder(bineryTree.getRoot());
  console.log("PostOrder");
  bineryTree.postOrder(bineryTree.getRoot());

  bineryTree.Node_holding_value(9);
};

main();
