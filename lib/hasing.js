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

module.exports = {twoSum};