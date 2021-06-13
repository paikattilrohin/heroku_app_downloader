var express = require('express');
var app = express();
var http = require('http').Server(app)
const path = require('path');


var htmlPath = path.join(__dirname, 'html');

app.use(express.static(htmlPath));
//Using direct file URL
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.get('/download',function(req,res){
    res.download(__dirname +'/download/test.jpg','download.jpg');
});


const PORT = process.env.PORT || 3000;
http.listen(PORT,function(){
    console.log('Server is live on server ' + 3000);
});