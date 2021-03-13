
///// IN ITERATIVE WAY  ////



function binary_search( num :number , array: number[] ) :number| string
{
     let headPointer= 0, tailPoiner = array.length - 1;
      
       let mid:number = -1;
     
      while(headPointer <= tailPoiner){
               
                mid = Math.floor((headPointer + tailPoiner) / 2);


              if( array[mid] == num){
                   
                   return  mid;
                   
                   }
               else if ( num < array[mid] )
               {
                   tailPoiner = mid - 1;
               }
               else{

                  headPointer = mid + 1

               }    
          
      }

     return "The number is not in the array"



}


let array = [1,3,6,8,10,12]

let index = binary_search( 8, array)
  
   console.log(index)



 ///////   IN RECURSIVE WAY //////




function RecursiveBinerySearch_wrapper(array : number[], num : number){
          let head = 0, end = array.length - 1;

  function RecursiveBinerySearch(mid : number,num :number):number{
   
    if ( num == array[mid] )
         return mid;

        if( array[mid] < num ){
            head = mid + 1;
           return RecursiveBinerySearch( Math.floor((head+end)/2), num)
        }
        else{
            end = mid - 1;
           return RecursiveBinerySearch( Math.floor((head+end)/2), num)

         }

}

console.log(RecursiveBinerySearch(Math.floor((head+end)/2),num))


}

RecursiveBinerySearch_wrapper(array, 6)