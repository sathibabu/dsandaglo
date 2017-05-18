'use strict';
/**
*  merge() merges to sorted array into a single sorted array
*   @param {Array} A
*   @param {Array} B
*   @param {Array} A
*   @param {Number} l
*/


 

exports.merge = function(A,B){
       
    let aSize = A.length;
    let bSize = B.length;

    
    function recMerge(A,B,aSize,bSize,aPos,bPos){
        let C=[];
        while(aPos!==aSize && bPos!==bSize){
            if(A[aPos]===B[bPos]){
                 
                 C.push(A[aPos]);
                 C.push(B[bPos]);
                 aPos+=1;
                 bPos+=1;

            }else if(A[aPos] < B[bPos]){
                C.push(A[aPos]);
                 aPos+=1;
              
            }else if(A[aPos] > B[bPos]){
                 C.push(B[bPos]);
                 bPos+=1;
            }
        }

        if(bPos===bSize && aPos !== aSize){
            //Merge all the elements in A to C
            let part = A.splice(aPos,aSize-aPos);
            C=C.concat(part);
        }
         
        if(aPos===aSize && bPos !== bSize){
            //Merge all the elements in B to C
            let part = B.splice(bPos,bSize-bPos);
            C=C.concat(part);
        }

        return C;    

    }

    return recMerge(A,B,aSize,bSize,0,0);   
	    
};

/**
* binarySearch()
*/

var binarySearch = function(A, target) {


    let low = 0;
    let high = A.length;

    while (high > low) {
        let mid = Math.floor((low + high) / 2);
        if (A[mid] === target)
            return mid;
        if (A[mid] < target) {
            low = mid + 1;
        }

        if (A[mid] > target) {
            high = mid - 1;
        }

    }
    return -1;

};


/*Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm’s runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example:

Given [5, 7, 7, 8, 8, 10]

and target value 8,

return [3, 4].
*/

/**
* findRange()
*/

var findRange = function(A,target){

    let index = binarySearch(A,target);
    if(index===-1){
      return [-1,-1]
    }else{
      return [A.indexOf(target),A.lastIndexOf(target)];
    }
      
    
};


module.exports={findRange,binarySearch};


