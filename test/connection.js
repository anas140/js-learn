const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect("mongodb://localhost/foo");

mongoose.connection.once('open', function() {
	console.log("connected to the db");
}).on('error', function(error) {
	console.log('Connection error', error);
})