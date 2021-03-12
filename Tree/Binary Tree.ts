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




  class BinaryTree{
  
       private root : node|null;



       constructor(){
         this.root = null;
       }

    getRoot(){
       return this.root
    }


       insert(num: number) 
       {
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

     inOrder(_node: node | null){

        if(_node === null){
            return
        }

        console.log(_node.value)

        this.inOrder(_node.left)
        this.inOrder(_node.right)

    }

     preOrder(_node : node | null){
        if(_node === null){
            return
        }
      this.preOrder(_node.left)
      console.log(_node.value)
      this.preOrder(_node.right)

      }

       postOrder(_node : node | null){
        if(_node === null){
            return
        }
      this.postOrder(_node.left)
      this.postOrder(_node.right)
      console.log(_node.value)


      }
}
/* 
     
       TREE
        
          2
      1      4
          3     9        
    
  
  
     */

const main = () => {
  
 var bineryTree = new BinaryTree()
  bineryTree.insert(2);
  bineryTree.insert(4);
  bineryTree.insert(1);
  bineryTree.insert(9);
  bineryTree.insert(3);


bineryTree.inOrder(bineryTree.getRoot())
console.log("PreOrder")
bineryTree.preOrder(bineryTree.getRoot())
console.log("PostOrder")
bineryTree.postOrder(bineryTree.getRoot())


};

main();

