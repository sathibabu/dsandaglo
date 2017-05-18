var strStr = function(A,B){
  
  	return A.indexOf(B);
};


/**
*
*Symbol	I	V	X	L	C	D	M
*Value	1	5	10	50	100	500	1,000

*/
var intToRoman = function(number){
    let symbols = new Map();
    symbols.set(1,'I');
    symbols.set(5,'V');
    symbols.set(10,'X');
    symbols.set(50,'L');
    symbols.set(100,'C');
    symbols.set(500,'D');
    symbols.set(1000,'M');
    
    let seed = [1,5,10,50,100,500,1000];

    let seedVisited = seed.filter((item)=>{
    	return number >= (item)
    });
    //console.log(seedVisited.join(' '));
    let result='';
    
    
    return symbols.get(1000);

};

module.exports = {strStr,intToRoman};