var express = require('express');
var app = express();
const exec = require('child_process').exec;
var bodyParser = require('body-parser');
var fs = require("fs");


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/', function(req, res){
    res.json({
        data:'oki'
    });
});
app.post('/', function(req, res){
    var data = req.body.data

    fs.writeFile('./source/cpp/test.cpp', data,  function(err) {
        if (err) {
            res.json({
                status:'false'
            });
        }
    });
    exec('g++ source/cpp/test.cpp -o ./source/output/test', (error, stdout, stderr) => {
        if (error) {
            res.json({
                status:'fail',
                error:error
            });
        }
        exec('./source/output/test',(error, stdout, stderr)=>{
            if (error) {
                res.json({
                    status:'fail',
                    error:error
                })
            };
            res.json({
                status:'success',
                output:stdout
            });
            console.log(`stdout: ${stdout}`);
        });

    });
});
app.listen(1111, ()=>{
    console.log('server is running on port 1111...');
});
