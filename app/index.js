var array = require('../lib/arrays');


let A = [[1,2,3],[4,5,6],[7,8,9]];
expect(array.printZigZag(A,3,3).join(' ')).to.equal('1 2 3 6 5 4 7 8 9');
console.log(array.printSpiral(A,3,3));


