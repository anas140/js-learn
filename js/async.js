window.onload = function() {
	var http = new XMLHttpRequest();
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status ==200) {
			console.log(JSON.parse(http.response));
			console.log('first');
		}
	}
	http.open("GET", "data/tweets.json", true); 
	http.send();
	console.log('second');
}


/**
 * **	READY STATES ***\
 *  0 - Request Not Initialised
 *  1 - Request has been Set Up
 *  2 - Request has benn sent
 *  3 - Request is in process 
 *  4 - Request is completed
 */