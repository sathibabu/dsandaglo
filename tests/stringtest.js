var expect = require('chai').expect;
var string = require('../lib/strings');

describe('Str Str',function () {
	it('simple test',function(){
		let A = 'Sathibabu';
		let B = 'babu';
		expect(string.strStr(A,B)).to.equal(5);
	});

	it('match at begining of the string',function(){
		let A = 'sathibabu';
		let B = 'sathi';
		expect(string.strStr(A,B)).to.equal(0);
	});
});


describe('Integer to Roman',function () {
	

	it('besic match',function(){
		
		expect(string.intToRoman(100)).to.equal('M');
	});
});
