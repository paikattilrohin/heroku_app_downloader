var express = require('express');
var app = express();
var http = require('http').Server(app)
const path = require('path');


//Using direct file URL
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/download',function(req,res){
    res.download(__dirname +'/download/test.jpg','test.jpg');
});


const PORT = process.env.PORT || 3000;
http.listen(PORT,function(){
    console.log('Server is live on server ' + 3000);
})