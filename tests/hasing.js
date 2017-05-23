var hasing = require('../lib/hasing');
var expect = require('chai').expect;

describe('2Sum',function(){
	it('basic 2 sum',function(){
		let A = [2,7,11,15];
	
		expect(hasing.twoSum(A,9).join(' ')).to.equal('0 1');
	})

	it('2 sum more than one match',function(){
		let A = [3,4,6,7,5,5];
	
		expect(hasing.twoSum(A,10).join(' ')).to.equal('1 2');
	})

	it('2 sum more than one match',function(){
		let A = [3,4,6,17,15,8];
		let target = 11;
		expect(hasing.twoSum(A,target).join(' ')).to.equal('0 5');
	})

	it('2 sum more than no match',function(){
		let A = [3,4,6,17,15,8];
		let target = 99;
		expect(hasing.twoSum(A,target).join(' ')).to.equal('');
	})




});

