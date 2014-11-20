// app.js

// BASE SETUP
// ==============================================

var express  = require('express'),
	app      = express(),
	env      = require('./config/environment'),
	routes   = require('./routes'),
	path 	 = require('path'),
	port     = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
// ==============================================

app.use('/', routes.index);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Colinha on port ' + port);
