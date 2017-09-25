var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var socket = require('socket.io');

// routing files
var index = require('./routes/index');
var projects = require('./routes/projects');

// Main app
var app = express();

// Set static folder 
app.use(express.static(path.resolve(__dirname, 'www')));


// View engine
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/', index);
app.use('/api', projects);


// Prot
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    console.log("listening to port", app.get("port"));
    //console.log('io', io);
});
// Socket Setup
var io = socket(server);

io.on('connection', function(socket) {
    console.log('Made socket connection');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
    socket.on("addComment", function(data) {
        console.log('data', data);
        io.sockets.emit('newComments');
    });
});