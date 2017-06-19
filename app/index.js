var distance = require('./distance');
var axios = require('axios')
var parser = require('xml2json');
var options = {
  noColor: true
};

let A = [3,4,6,7,5,5];

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

var distUrl ="https://dl.dropboxusercontent.com/s/8nvqnasci6l76nz/Problem.gpx?dl=0"; 
axios.get(distUrl).then(function(res){
    let resText = (res.data);
    let resAsJson = JSON.parse(parser.toJson(resText))
    let data = resAsJson.gpx.trk.trkseg.trkpt;
   
     
}).catch(function(err){

});

console.log(distance.Stats(data));
