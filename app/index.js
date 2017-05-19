var binsearch = require('../lib/binsearch.js');
var string = require('../lib/strings');
var linkedlist = require('../lib/linkedlists');

let A = [11,13,14,15,23,45,67,89];
let B = [2,6,7];
let C = [];

//C = merge.merge(A,B,C,0,0,A.length,B.length);
//console.log(merge.merge(A,B,C,0,0,A.length,B.length));
//console.log(binsearch.merge(A,B));

let list = new linkedlist();
    	
list.addToList(5);
list.addToList(7);
list.addToList(8);
list.addToList(12);
list.addToList(14);
list.reverseList();

