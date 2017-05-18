var expect = require('chai').expect;
var binarySearch = require('../lib/binsearch');
describe('binarySearch',function () {
	it('Merge and find median of the array',function(){

	});
	it('binarySearch, it should match first element',function(){
        let A = [23,78,89,90];
        let index = binarySearch.binarySearch(A,23);
       // expect(index).to.have.lengthOf(2);
        expect(index).to.equal(0);
	});

	it('binarySearch, unsuccessfull match',function(){
        let A = [23,78,89,90];
        let index = binarySearch.binarySearch(A,123);
       // expect(index).to.have.lengthOf(2);
        expect(index).to.equal(-1);
	});
	it('binarySearch, successfull match in the middel of the array',function(){
        let A = [23,78,89,90];
        let index = binarySearch.binarySearch(A,89);
       // expect(index).to.have.lengthOf(2);
        expect(index).to.equal(2);
	});

	it('binarySearch, Match with single element sucess',function(){
        let A = [23];
        let index = binarySearch.binarySearch(A,23);
       // expect(index).to.have.lengthOf(2);
        expect(index).to.equal(0);
	});

	it('binarySearch, Match with single element unsucess',function(){
        let A = [23];
        let index = binarySearch.binarySearch(A,43);
       // expect(index).to.have.lengthOf(2);
        expect(index).to.equal(-1);
	});

	it('binarySearch, Match with odd number of element unsucess',function(){
        let A = [23,44,56];
        let index = binarySearch.binarySearch(A,43);
       // expect(index).to.have.lengthOf(2);
        expect(index).to.equal(-1);
	});
	
	it('binarySearch, Match with odd number of element sucess',function(){
        let A = [23,44,56];
        let index = binarySearch.binarySearch(A,44);
       // expect(index).to.have.lengthOf(2);
        expect(index).to.equal(1);
	});

	it('binarySearch, Match with even number of element sucess',function(){
        let A = [23,44,56,65];
        let index = binarySearch.binarySearch(A,56);
       // expect(index).to.have.lengthOf(2);
        expect(index).to.equal(2);
	});

	it('binarySearch, Match with even number of element unsucess',function(){
        let A = [23,44,56,65];
        let index = binarySearch.binarySearch(A,1);
       // expect(index).to.have.lengthOf(2);
        expect(index).to.equal(-1);
	});
});



describe('rangeFindBinsearch',function(){
	it('ranges for duplicate numbers',function(){
		let A = [23,33,33,55];
		let index = binarySearch.findRange(A,33);
		expect(index.join(' ')).to.equal('1 2');
	});

	it('ranges for duplicate numbers',function(){
		let A = [23,33,33,55];
		let index = binarySearch.findRange(A,43);
		expect(index.join(' ')).to.equal('-1 -1');
	});

	it('ranges for duplicate numbers',function(){
		let A = [33,33,33,33];
		let index = binarySearch.findRange(A,33);
		expect(index.join(' ')).to.equal('0 3');
	});

	it('ranges for duplicate numbers',function(){
		let A = [5, 7, 7, 8, 8, 10];
		let index = binarySearch.findRange(A,8);
		expect(index.join(' ')).to.equal('3 4');
	});

});