/*
Problem : 3
=========================================================================
 
Write a program to find pairs of positive integers (A,B) whose sum is equal to the input number N (N < 10 power 6).
 
The conditions to be satisfied by A & B are:
● A has at least two digits and starts with a non-zero digit 
● B always has one digit less than A 
● B can start with 0 
● B is obtained from A by leaving out one digit.
 
The output should also indicate the number of such pairs. For example, if we input 1002 to the program, the output should be as follows: 
 
4 pairs found: 
906 + 96 = 1002 
911 + 91 = 1002 
951 + 51 = 1002 
1001 + 001 = 1002
 
--------------------------------------------------------------------------
 
Assuming input is provided in testdata.in with the following contents:
2
1002
11
 
Line 1: Number of test cases
Line 2 Onwards: The Number itself
 
Print the output in the following format.
---------------------------------------------------------------------------
TEST #1
4 pairs found
906 + 96 = 1002
911 + 91 = 1002
951 + 51 = 1002
TEST #2
1 pair found
10 + 1 = 11
 
Link to test file: https://dl.dropboxusercontent.com/s/fb85x5m8ycenpgb/testdata.in?dl=
*/

function size(Number){
	return Number.toString().length;
}

function isValidA(A){
	let digits =  A.toString().length;
	return (digits >=2) && (A >0); 
}

function checkDigitMissing(A,B){
	let arrA = A.toString().split('');
	let arrB = B.toString().split('');
	let flag = true;
	arrB.forEach(item=>{
		if(arrA.indexOf(item)==-1)
			flag=false;
	});

	return flag;
}

function isValidB(A,B){

	if(B<0)
		return false;
	
    let sizeA = size(A)
    let sizeB = size(B) 

	if(sizeB < sizeA && sizeA-1 === sizeB){
         return checkDigitMissing(A,B);
	}
    
    return false;
}



var twoSum = function(Number){

// 	906 + 96 = 1002
// 911 + 91 = 1002
// 951 + 51 = 1002

    let A = 951;
    let B = 50;    
     
    return isValidA(A) &&  isValidB (A,B);
}

module.exports = {twoSum};