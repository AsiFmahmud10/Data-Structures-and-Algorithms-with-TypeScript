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
let root: node | null;
root = null;
function insert(num: number) {
  if (root == null) {
    root = new node(num);
  } else {
    let temp: node | null;
    let temp2 = root;

    temp = root;

    if (num < root.value && root.left == null) {
      root.left = new node(num);
      return;
    } else if (num > root.value && root.right == null) {
      root.right = new node(num);
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

/* 
     
       TREE
        
          2
      1      4
          3     9        
    
  
  
     */

const main = () => {
  root = null;

  insert(2);
  insert(4);
  insert(1);
  insert(9);
  insert(3);

  console.log(root);
};

main();
