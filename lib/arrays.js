
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
*
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

module.exports = {maxSubArray,printSpiral};