/**
 * Created by viktor on 2017-02-11.
 */

var socket = io();

$('#home').click(function(){
    socket.emit('home button', 'home pushed');
    return false;
});

$('#courses').click(function(){
   socket.emit('courses button', 'courses pushed');
   return false;
});

$('#projects').click(function(){
    socket.emit('projects button', 'projects pushed');
    return false;
});

$('#contact').click(function(){
    socket.emit('contact button', 'contact pushed');
});

function openNav() {
    document.getElementById("mySidenav").style.height = "450px";
    document.getElementById("mySidenav").style.width = "40%";
    document.getElementById("mySidenav").style.left = "30%";
    document.getElementById("formen").style.display = "block";
    document.getElementById("closebtn").style.display = "flex";
    document.getElementById("openbtn").style.display = "none";
    openbtn
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("mySidenav").style.width = "5%";
    document.getElementById("mySidenav").style.left = "47.5%";
    document.getElementById("formen").style.display = "none";
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("openbtn").style.display = "flex";
    return false;
}

$('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});
socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
});