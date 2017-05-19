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

    });

    it('tests retrival of elements with single element',function(){
    	let list = new linkedlist();
    	list.addToList(5);
    	expect(list.printList().join(' ')).to.equal('5');

    });

    it('tests printList with out any elements',function(){
    	let list = new linkedlist();
    	expect(list.printList().join(' ')).to.equal('');

    });

   
});



describe('LinkedLists Reverse',function(){
	it('Reverse list with a generic case',function(){
        let list = new linkedlist();
    	
    	list.addToList(5);
    	list.addToList(7);
    	list.addToList(8);
    	list.addToList(12);
    	list.addToList(14);
    	list.reverseList();
    	expect(list.printList().join(' ')).to.equal('14 12 8 7 5');
	});


	it('Reverse list with a single node',function(){
        let list = new linkedlist();
    	
    	list.addToList(5);
    	list.reverseList();
    	expect(list.printList().join(' ')).to.equal('5');
	});

	it('Reverse list with no node',function(){
        let list = new linkedlist();
    	
    	list.reverseList();
    	expect(list.printList().join(' ')).to.equal('');
	});


   it('Reverse list with two nodes',function(){
        let list = new linkedlist();
    	
    	list.addToList(5);
    	list.addToList(6);
    	list.reverseList();
    	expect(list.printList().join(' ')).to.equal('6 5');
	});

})