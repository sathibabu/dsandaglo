var distance = require('./distance');

 let A = [3,4,6,7,5,5];
// 		let target = 10;

// let A = [2,7,11,15];
// let target = 9;
// console.log(hasing.twoSum(A,9));

//let A = ['aab','baa','aba','bcc','ccb','cbc','bat','tab']

let data = [{
            lan:13.1935950,
            lat:77.6491150,
            ele:922.5,
            time:"2016-12-11T00:37:52Z"  
    },
    {
            lan:13.1936350,
            lat:77.6491150,
            time:"2016-12-11T00:37:55Z",
            ele:922.4  
    }]

console.log(distance.Stats(data));
