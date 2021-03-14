let array : number[] =  [1,5,10,123,345,3,5,7,8,4,1,6,5,5,6] as number[]


function merge( head: number , mid : number,  end: number){
    
       

        let left :number[] = [], right :number[] = [];
        

      for (let i = head ; i <= mid ; i++ ){

           left.push(array[i])

      }
      for (let j = mid + 1  ; j <= end ; j++ ){

           right.push(array[j])

      }

     let i = 0,j = 0 ,temp,n=0; 
       
      while( i < left.length && j < right.length ){
          
          if( left[i] <= right[j]){
              temp =  left[i++]
          }else{

              temp = right[j++]

          }
          array[head++] = temp

         
        
      }
   
      while( i < left.length){

          array[head++] = left[i++]

      }
      while( j < right.length){

          array[head++] = right[j++]

      }
      console.log(array,left,right)

}


   function mergeSort( head: number , end: number) {
          
                if( head >= end)
                    return

           let mid = Math.floor((head + end)/2)

             mergeSort(  head , mid)
             mergeSort( mid + 1, end)

            merge(head,mid,end)


    }

   mergeSort(0,array.length - 1)
   
    console.log(array)