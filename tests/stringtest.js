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
		
		expect(string.intToRoman(11)).to.equal('XI');
		expect(string.intToRoman(9)).to.equal('IX');
		expect(string.intToRoman(1)).to.equal('I');
		expect(string.intToRoman(5)).to.equal('V');
		expect(string.intToRoman(4)).to.equal('IV');

	});

	it('test from internet',function(){
		
		expect(string.intToRoman(49)).to.equal('XLIX');
		expect(string.intToRoman(99)).to.equal('XCIX');
		expect(string.intToRoman(124)).to.equal('CXXIV');
		expect(string.intToRoman(56)).to.equal('LVI');
		expect(string.intToRoman(1024)).to.equal('MXXIV');

	});


});


describe('romanToNumber',function(){
    it('basic test',function(){
    	expect(string.romanToInt('IV')).to.equal(4);
    	expect(string.romanToInt('MXXIV')).to.equal(1024);
    	expect(string.romanToInt('LVI')).to.equal(56);
    	expect(string.romanToInt('CXXIV')).to.equal(124);
    	expect(string.romanToInt('XCIX')).to.equal(99);
    	expect(string.romanToInt('XLIX')).to.equal(49);
    	expect(string.romanToInt('V')).to.equal(5);
    	expect(string.romanToInt('I')).to.equal(1);
    	expect(string.romanToInt('IX')).to.equal(9);
    	expect(string.romanToInt('XI')).to.equal(11);
    });
});


describe('atoi',function(){
    it('basic test',function(){

    	expect(string.atoi('12 2')).to.equal(12);
    })
});
