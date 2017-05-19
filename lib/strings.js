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
    symbols.set(4,'IV');
    symbols.set(5,'V');
    symbols.set(9,'IX');
    symbols.set(10,'X');
    symbols.set(40,'XL');
    symbols.set(50,'L');
    symbols.set(90,'XC');
    symbols.set(100,'C');
    symbols.set(400,'CD');
    symbols.set(500,'D');
    symbols.set(900,'CM');
    symbols.set(1000,'M');
    
    let seed = [1,4,5,9,10,40,50,90,100,400,500,900,1000];


    
    let result='';
    
    function append(key,times){
       let result='';
       
       for(let i=0;i<times;i++){
           result+=(symbols.get(key));
       }

       return result;
    }
    
    function returnSeed(number){

            let seedVisited = seed.filter((item)=>{
                return number >= (item)
            });
            
            return seedVisited.pop();
    }
    
    while(number !=0){

        let seed = returnSeed(number);
        let rem = number%seed;
        let quo = Math.floor(number/seed);
        result+=(append(seed,quo));
        number =rem;

    }

    
    return result;

};


/**
*  Roman to integer
*  @Param {String} inputStr 
*/

var romanToInt = function(inputStr){
    let symbols = {};
    
    symbols['I']=1;
    symbols['IV']=4;
    symbols['V']=5;
    symbols['IX']=9;

    symbols['IX']=9;
    symbols['X']=10;
    symbols['XL']=40;
    symbols['L']=50;
    symbols['XC']=90;
    symbols['C']=100;
    symbols['CD']=400;
    symbols['D']=500;
    symbols['CM']=900;
    symbols['M']=1000;


    let seed = [1,4,5,9,10,40,50,90,100,400,500,900,1000];

    let number=0;
    
    inputStr.split('').forEach((char,index,arr)=>{
          
          let curr_val =   symbols[char]
          let next = index+1;
          if(next !== arr.length){
            let next_val = symbols[arr[next]];
            number = seed.indexOf(curr_val) < seed.indexOf(next_val) ? 
                    number - curr_val : number + curr_val
          }else{
             number +=curr_val
          }

          
    });

   return number;

      
};

/**
*  atoi () converts string to decimal numbre
*  @Param {String} string
*/

var atoi = function(str){
    return parseInt(str,10);
};


/**
*  JSONPretty()
*
*/

var jsonPretty = function(jsonobj){

    
    let input = (typeof(jsonobj) ==='Object') ?  JSON.stringfy(jsonobj) : jsonobj;

}

module.exports = {strStr,intToRoman,atoi,romanToInt};