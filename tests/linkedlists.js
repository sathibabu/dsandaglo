var expect = require('chai').expect;
var linkedlist = require('../lib/linkedlists');


describe('LinkedLists',function(){
      
    it('basic test',function(){
    	let list = new linkedlist();
    	list.addToList(5);
    	list.addToList(7);
    	list.addToList(8);
    	list.addToList(12);
    	list.addToList(14);
    	expect(list.printList().join(' ')).to.equal('5 7 8 12 14');

    })

    it('tests retrival of elements with single element',function(){
    	let list = new linkedlist();
    	list.addToList(5);
    	expect(list.printList().join(' ')).to.equal('5');

    })

    it('tests printList with out any elements',function(){
    	let list = new linkedlist();
    	expect(list.printList().join(' ')).to.equal('');

    })  
});