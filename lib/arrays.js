
/**
*Max Sum Contiguous SubarrayBookmark Suggest Edit
*  maxSubArray ()
*/


var maxSubArray = function(A){

	if(A.length===0){
		return A;
	}

	let currentWindow =[];
	let maxWindow = [];
	let maxSoFar = 0;
    let currentsum=0; 
    //For postivie numbers
	A.forEach((item)=>{
		   currentsum+=item;
		   if(currentsum < 0){
		   	 //Flush the winow
		   	currentsum=0;
		   	currentWindow =[]
		   }else{
		   	 //Add it to the window
		   	 currentWindow.push(item);
		   	 
		   	 if(currentsum > maxSoFar){
		   	 	maxSoFar = currentsum;
		   	  	maxWindow = currentWindow.slice();
		   	 }
		   }

	});

	if(maxSoFar===0 && maxWindow.length===0){
		maxSoFar = A.shift();
		A.forEach((item)=>{
			if(item>maxSoFar)
				maxSoFar = item;
		});
        maxWindow.push(maxSoFar);
	}

	return maxWindow;
};


/**
*  printSpiral ()
*  @param{Array} A
*  @param{Number} m
*  @param{Number} n
*  | 1 2 3 |
*  | 4 5 6 |  1 2 3 6 9 8 7 4 5
*  | 7 8 9 | 
*/
var printSpiral = function(A,m,n){
      
      let T = 0;
      let B = m-1;
      let L = 0;
      let R = n-1;
    
      let dir =0;
      let result = [];
      


      while(T<=B && L<=R){
           
           if(dir===0){
           		for(let i=L;i<=R;i++)
           			result.push(A[T][i]);	
              dir+=1;
              T+=1;
           }else if(dir===1){
           	  for(let i=T;i<=B;i++)
           			result.push(A[i][R]);
           	  dir+=1;
           	  R-=1;	
           }else if(dir===2){
           	  for(let i=R;i>=L;i--)
           			result.push(A[B][i]);
           	  dir+=1;
           	  B-=1; 
           }else if(dir===3){
               
           	  for(let i=B;i>=T;i--)
           			result.push(A[i][L]);
           	  dir=0;
           	  L+=1;
           } 

      } 

      return result;
}

/**
*
*/
var fillSpiralMatrix = function(n){

      let result = [];
      let count=1;
      for(let i=0;i<n;i++){
      	
      	let temp=[];
      	for(let j=0;j<n;j++){
      		temp.push(count);
      		count+=1;
      	}
      	result.push(temp);
      }


     

      return printSpiral(result,n,n); 
}


/**
*  printZigZag ()
*  @param{Array} A
*  @param{Number} m
*  @param{Number} n
*  | 1 2 3 |
*  | 4 5 6 |  1 2 3 6 5 4 7 8 9
*  | 7 8 9 |  
*/
var printZigZag = function(A,m,n){
      let T=0;
      let B=m-1;
      let L=0;
      let R=n-1;
      let result = [];
      let direction =0;
      while(T<=B){
      		if(direction===0){
      			for(let i=0; i<=R;i++){
      				result.push(A[T][i]);
      			}
      			direction=1;
      			T+=1;
      		}else if(direction===1){
      			for(let i=R; i>=0;i--){
      				result.push(A[T][i]);
      			}
      			direction=0;
      			T+=1;
      		}

      }

      return result;

};

/**
*  rotateArray() Rotate array by 90 degrees clock wise
* @Param {Array} A
* @Param {Number} N
*/
var rotateArray = function(A,n){
   let cycles = Math.floor(n/2);
   let T=0;
   let B=n-1;
   let L=0;
   let R = n-1;

   for(let c=0;c<cycles;c++){
      for(let i=T;i<=R;i++){
        let temp = A[T][i];
        A[T][i]=A[B-i][T]; //Top
        A[B-i][T] = A[B][R-i]; //Left
        A[B][R-i]= A[i][R]; //Bottom 
        A[i][R]=temp; //right
      }
      T++;B--;L++;R--;
   }
   return A; 
}


module.exports = {maxSubArray,printSpiral, printZigZag, fillSpiralMatrix,rotateArray};