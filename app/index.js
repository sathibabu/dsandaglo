var distance = require('./distance');
var Tsum = require('./numbers');
var axios = require('axios')
var parser = require('xml2json');
var options = {
  noColor: true
};



       
function Rest(url){
   return new Promise(function(resolve,reject){
        axios.get(url).then(function(res){
            resolve(res);
        }).catch(function(err){
           reject(err); 
        });
   });

}

function  getDistance(){
    var distUrl ="https://dl.dropboxusercontent.com/s/8nvqnasci6l76nz/Problem.gpx?dl=0"; 
    Rest(distUrl).then(function(res){
        let resText = (res.data);
        let resAsJson = JSON.parse(parser.toJson(resText))
        let data = resAsJson.gpx.trk.trkseg.trkpt;
        let datalen = data.length;
        console.log(distance.Stats(data));
    });
}

function twoSum(){
    var url = 'https://dl.dropboxusercontent.com/s/fb85x5m8ycenpgb/testdata.in?dl=';
    Rest(url).then(res=>{
        let result = (res.data).split('\n');
        let data = result.map(item=>{return parseInt(item)});
        data.forEach(item=>{
            console.log(Tsum.twoSum(item)); 
        });        
    });
}

getDistance();
//twoSum();





