var express = require('express');
    app = express();

app.use(express.static(__dirname+'/public'));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

// app configuration for the CORS requests
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
    next();
});

app.listen(3564);
console.log('App is up on port : '+3564);