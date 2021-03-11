class node{

   val : number | null;
   next : node  | null;
   previous : node | null;
   
 constructor( val:(number | null) ){
   
      this.val =val;
      this.next =null; 
      this.previous = null; 

 }

 toJSON() {
      return `dealing node value is ${this.val} `;
   }

}

var one :node|null;
var end:node ;

class List{
   
add(value:number){

   if(one === null) {

      one = new node(value)
      end = one
         return one;
    } 
   else{
   let temp = new node(value)
      temp.previous = end;
      end.next = temp; 
      console.log(end.next)
       end=end.next
      return one;
   }

}
  show():void{
    if(one == null)
      console.log(`there is no item `)
     else{

        let temp :node ; 
        temp = one
        console.log(temp.val,"temp---")

        while(temp.next != null){
            console.log(temp)
             temp = temp.next
        }
         console.log(temp)
     } 
  }
  show_reverse(){
      
       if(one == null)
      console.log(`there is no item `)
     else{

        let temp :node ; 
        temp = end

        while(temp.previous != null){
            console.log(temp.val)
             temp = temp.previous
        }
         console.log(temp.val)
     } 

  }

  append_first(x: number) {
    let temp = new node(x);
    console.log(one,"----")
    temp.next = one;
    one!.previous = temp
    one = temp;
   console.log(`append first ${x}`)
  }

  append_last(x: number) {
    let temp = new node(x);
    end.next = temp;
    end = temp;

    console.log(`append Last ${x}`)
   

  }

}

const main = ()=>{
 one = null;
 
 let list = new List()
 list.add(2)
 list.add(6)
 list.add(5)
 list.show_reverse()

 list.append_first(6)
 list.append_last(10)
 list.show()


}

main()


