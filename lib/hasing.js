var twoSum = function (A,target) {
	// body...
	let hashTable = {};
	let index1=-1, index2=-1;
	A.forEach((item,index,array)=>{
        let currindex = hashTable[item];
		if(currindex !== undefined){
	        if(index1===-1 && index2===-1){
	        	index1 = currindex; index2 = index;
	        }

		}else{
			let hashindex = target-item;
			hashTable[hashindex]=index;
		}
	});
	return (index1===-1 && index2===-1) ? []:[index1,index2];
};


var anagram = function(A){

	let hashTable = {};
	
	function splitandsort(str){
		return str.split('').sort().join().replace(/,/g,"");
	}
    

    A.forEach((item,index,array)=>{
    	let hashkey = splitandsort(item);
    	let hashvalue = hashTable[hashkey]
    	let arr = hashvalue || []
    	arr.push(index);
    	hashTable[hashkey] = arr;
    });
     
    let results = [];
     
    function mapKeyToArr(keys){
    	let temp = [];
    	keys.forEach(item=>{
    		temp.push(A[item]);
    	})
    	return temp;
    }
    

    Object.keys(hashTable).forEach((key)=>{
    	let keys = hashTable[key];
    	keys.length >1 ? results.push(mapKeyToArr(keys)) :{} 
    	
    });
    
    return results;    

};


var largestContiniousZeroSumArray = function(A){

    let sum=0;

    function hashFunction(key,prev){
    	let sum=A[key]+prev;
    	this.table[sum]=key;
    }
	
	function hashTable(){
		this.table = {};
		
		function push(key,hashFunction){
			this.table[key] = hashFunction.call(this,key,prev);
		}

		function get(key){
			return this.table[key];
		}

	}

    let hashTable = new hashTable();
	
	A.forEach((item,index)=>{
			hashTable.push(index,hashFunction);
	}); 

};

module.exports = {twoSum,anagram,largestContiniousZeroSumArray};