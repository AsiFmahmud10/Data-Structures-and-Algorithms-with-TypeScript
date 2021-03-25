let graph = [

    [1,3,4],
    [0,2,1],
    [2,3,4],
    [1,2,4],
    [1,2,1],


]

let visited = new Array(100).fill(-1)

function dfs( u : number){
      visited[u] = 1

   let i = 0
   for(i=0 ; i < graph[u].length ; i++  ){
      
       let temp = graph[u][i]

         if( visited[temp] == -1 )
              dfs(temp) 
   }
   
}

dfs(0)
console.log(graph[0])
console.log(visited)