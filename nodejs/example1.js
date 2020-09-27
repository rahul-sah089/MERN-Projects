var http = require('http')

http.createServer(function(req,res){
    res.writeHad(200,{'Content-Type':"text/html"})
    res.end('Hello World');
},200);