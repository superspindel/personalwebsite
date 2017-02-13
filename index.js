/**
 * Created by viktor on 2017-02-10.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');
var cheerio = require('cheerio');
const pug = require('pug');

var grades = require('./grades');

app.use(require('express').static('public')); // to access public static files in request chain

app.get('/', function(req, res){
    res.render('home.pug'); // render for pug files
});

app.get('/contact', function(req, res){
   res.render('contact.pug');
});



// socket connection handler


io.on('connection', function (socket) {
    console.log("A user connected");
    socket.on('disconnect', function () {
        console.log("A user disconnected");
    });
    socket.on('home button', function(msg)
    {
       console.log(msg);
    });
    socket.on('courses button', function(msg)
    {
        console.log(msg);
        grades.getGrades(request, cheerio);
    });
    socket.on('contact button', function(msg)
    {
        console.log(msg);
    });
    socket.on('projects button', function(msg)
    {
        console.log(msg);
    });
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});






// start server

http.listen(3000, function () {
    console.log('listening on *:3000')
});

