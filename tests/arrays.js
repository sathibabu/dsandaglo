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