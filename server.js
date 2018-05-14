// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// var mongoose = require('mongoose');

// Require body-parser (to receive post data from clients)
// var bodyParser = require('body-parser');
// Integrate body-parser with our App
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json()); 

// Require path
// var path = require('path');
// app.use(express.static(path.join(__dirname, './client/static')));
// app.set('views', path.join(__dirname, './client/views'));

// M. V. C.
// require('./server/config/mongoose.js');
// require('./server/models/task.js')(mongoose);
// require('./server/config/routes.js')(app);

// find where we keep static files
app.use(express.static( __dirname + '/pokemonAngular/dist/pokemonAngular' ));


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})



