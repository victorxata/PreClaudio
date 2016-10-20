
var express = require('express')
,   http = require('http')
    , mongoose = require('mongoose')
    ,fs = require('fs')
;

var mongoUri = 'mongodb://localhost/claudio';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
    throw new Error('unable to connect to database at ' + mongoUri);
});
console.log("Claudio connected to MongoDB at " + mongoUri);

var app = express();

require('./routes')(app);

app.configure(function() {
    app.set('port', process.env.PORT || 3333)
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.use(app.router);
    app.use(express.static(__dirname + "/dist"));
});


http.createServer(app).listen(app.get('port'), function() {
    console.log("Claudio server listening on port " + app.get('port'));
});
