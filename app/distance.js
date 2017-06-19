/*
Problem : 1
=========================================================================
 
In the given xml file named Problem.gpx, find the following making assumptions based on SI units:
 
A. Total Distance
B. Max speed
C. Average speed
D. Elevation gained (high-low elevation)
E. Moving time (It's the time when the subject was moving i.e. not sitting idle)
F. Total time elapsed
 
The xml file contains the timestamp, location and elevation data points.
 
Link to test data: https://dl.dropboxusercontent.com/s/8nvqnasci6l76nz/Problem.gpx?dl=0
*/

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function latlonToDist(lat1,lat2,lon1,lon2){
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2-lat1);  // deg2rad below
	var dLon = deg2rad(lon2-lon1); 
	var a = 
	    Math.sin(dLat/2) * Math.sin(dLat/2) +
	    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
	    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; // Distance in km
	return d;
}

function timeStampTohours(timestam1,timestam2){
    
    let t1 = new Date(timestam1);
    let t2 = new Date(timestam2);

    var difference = t2.getTime() - t1.getTime();
    hoursDifference = (difference/1000/60/60);
    return hoursDifference;
}


function getStats(data){

	let total_dist =0;
    let max_elevation=0;
    let min_elevation=0;
    let max_speed=0;
    let avg_speed=0;
    let total_time=0;
    let total_speed=0;

    let datalen = data.length;
    
    if(data.length >0){
      max_elevation = data[0].ele; 
      min_elevation = data[0].ele;
    }

    for(let i=1;i<datalen;i++){
        let curr_dist  = Math.floor(latlonToDist(data[i-1].lan,data[i].lan,data[i-1].lat,data[i].lat))/1000;
        let cuur_speed = Math.floor(60/(timeStampTohours(data[i-1].time,data[i].time)))*curr_dist;
        
        if(cuur_speed >=max_speed){
        	max_speed=cuur_speed;	
        }

        if(max_elevation<=data[i].ele){
        	max_elevation = data[i].ele;
        }
        
        if(data[i].ele < min_elevation){
        	min_elevation = data[i].ele;
        }

        total_dist+=curr_dist;
        total_speed+=cuur_speed;   
    } 
    
    return {total_dist,total_speed,max_speed,max_elevation,min_elevation} 

}

var Stats = function(data){


    

    
 //    console.log(getStats(data));
	// console.log(timeStampTohours("2016-12-11T00:39:17Z","2016-12-11T00:39:18Z"));
	// return  latlonToDist(13.1935950,13.1936350,77.6491150,77.6491150);
	return getStats(data);
}

module.exports = {Stats};