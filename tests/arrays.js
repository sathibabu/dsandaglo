var array = require('../lib/arrays');
var expect = require('chai').expect;

describe('continues max sub array',function(){
   
   it('basic case',function(){
        let A = [-2,4,-2,4,-5];
        expect(array.maxSubArray(A).join(' ')).to.equal('4 -2 4');
   });

   it('basic case with only one postive number',function(){
        let A = [-2,-2,4,-5];
        expect(array.maxSubArray(A).join(' ')).to.equal('4');
   });

   it('Zero being the only element',function(){
        let A = [0];
        expect(array.maxSubArray(A).join(' ')).to.equal('0');
   });

   it('All negitive elements',function(){
        let A = [-4,-1,-2,-9];
        expect(array.maxSubArray(A).join(' ')).to.equal('-1');
   });

      it('only one negitive number',function(){
        let A = [-1];
        expect(array.maxSubArray(A).join(' ')).to.equal('-1');
   });

});


describe('Matrix Spiral',function(){
	it('3X3',function(){
		let A = [[1,2,3],[4,5,6],[7,8,9]];
		expect(array.printSpiral(A,3,3).join(' ')).to.equal('1 2 3 6 9 8 7 4 5');
	});
	it('4X4',function(){
		let A = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
		expect(array.printSpiral(A,4,4).join(' ')).to.equal('1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10');
	});
    it('2X2',function(){
    	let A = [[1,2],[3,4]];
    	expect(array.printSpiral(A,2,2).join(' ')).to.equal('1 2 4 3');
    });
    
    it('1X1',function(){
    	let A = [[1,2]];
    	expect(array.printSpiral(A,1,2).join(' ')).to.equal('1 2');
    });

    it('3X2',function(){
    	let A = [[1,2],[3,4],[5,6]];
    	expect(array.printSpiral(A,3,2).join(' ')).to.equal('1 2 4 6 5 3');
    });


});


describe('Matrix ZigZag',function(){
	it('3X3',function(){
		let A = [[1,2,3],[4,5,6],[7,8,9]];
		 expect(array.printZigZag(A,3,3).join(' ')).to.equal('1 2 3 6 5 4 7 8 9');
	});
	it('4X4',function(){
		let A = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
		expect(array.printZigZag(A,4,4).join(' ')).to.equal('1 2 3 4 8 7 6 5 9 10 11 12 16 15 14 13');
	});
	
	it('2X2',function(){
    	let A = [[1,2],[3,4]];
    	expect(array.printZigZag(A,2,2).join(' ')).to.equal('1 2 4 3');
    });

	 it('1X1',function(){
    	let A = [[1,2]];
    	expect(array.printZigZag(A,1,2).join(' ')).to.equal('1 2');
    });

    it('3X2',function(){
    	let A = [[1,2],[3,4],[5,6]];
    	expect(array.printZigZag(A,3,2).join(' ')).to.equal('1 2 4 3 5 6');
    });

});


describe('Fill Spiral Matrix for given N',function(){
	it('3X3',function(){
		expect(array.fillSpiralMatrix(3).join(' ')).to.equal('1 2 3 6 9 8 7 4 5');
	});

	it('4X4',function(){
		
		expect(array.fillSpiralMatrix(4).join(' ')).to.equal('1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10');
	});
    it('2X2',function(){
    	
    	expect(array.fillSpiralMatrix(2).join(' ')).to.equal('1 2 4 3');
    });
    
    

});