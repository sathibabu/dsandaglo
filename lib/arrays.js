
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

module.exports = {maxSubArray};