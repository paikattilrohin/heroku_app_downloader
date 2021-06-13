var express = require('express');
var app = express();
var http = require('http').Server(app)

//Using direct file URL
app.get('/',function(req,res){
    res.download(__dirname +'/download/test.jpg','test.jpg');
});

const PORT = process.env.PORT || 3000;
http.listen(PORT,function(){
    console.log('Server is live on server ' + 3000);
})