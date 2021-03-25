let graph : number[][] =[  
        [2,3],
        [3,4],
        [3,2,1],
        [0,2,3,4],
        [0,3,3,4],

 ]

const show = ()=>{
      let i=0,j=0
      let ans : string =''

      for(i = 0 ; i < graph.length; i++ ){
            ans = ans +`node ${i} is connected with`

            for(j = 0 ; j < graph[i].length; j++ ){

                      ans = ans + `  ${graph[i][j]} `
        
                }
                ans = ans + '\n'

      }
    console.log(ans)
 }


class Queue{
   list :number[]
   constructor(){
      this.list = []
   }
   push(num:number){
      this.list.push(num)
   }
   pop():null | number {
     if(this.list.length)
        return this.list.shift() as number
       else 
         return null 
   }
   point(){
     return this.list[0]
   }

}

let queue = new Queue()
let visit :number[] = new Array(100).fill(-1)

queue.push(0)
visit[0] = 1


function bfs(sourch : number){

   queue.push(sourch)
  visit[sourch] = 0

  while( queue.list.length != 0){

      let u = queue.pop() as number

      for( const v of graph[u]){
          
          if ( visit[v] == -1 ){
             queue.push(v)
             visit[v] = visit[u] + 1
          
          }
      }


  }

   }
   

dfs(0)
console.log(visit)




