window.onload = function() {
	/**
	 * [get descriptio -- Promise function]
	 * @param  {[type]} url [url of the get request]
	 * @return {[type]}     [js object json]
	 */
	function get(url) {
		/**
		 * [Promise description]
		 * @param {[type]} resolve [retunn success data]
		 * @param {[type]} reject  [return error data]
		 */
		return new Promise(function(resolve, reject) {
			var xhttp = new XMLHttpRequest();
			xhttp.open("GET", url, true);
			xhttp.onload = function() {
				if(xhttp.status == 200) {
					resolve(JSON.parse(xhttp.response));
				} else {
					reject(xhttp.statusText);
				}
			};
			xhttp.onerror = function() {
				reject(xhttp.statusText);
			}
			xhttp.send();
		});
	}

	get("data/tweets.json")
		.then(function(tweets) {
			console.log(tweets)
			return get("data/friends.json");
		})
		.then(function(friends) {
			console.log(friends);
			return get("data/videos.json");
		})
		.then(function(vidoes) {
			console.log(vidoes);
		})
		.catch(function(error) {
			console.log(error);
		})
}