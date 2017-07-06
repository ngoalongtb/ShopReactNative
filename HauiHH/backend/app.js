const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var fs = require('fs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var users = require('./routes/userRoutes');
var userInfos = require('./routes/user_infoRoutes');
var products = require('./routes/productRoutes');
var categorys = require('./routes/categoryRoutes');
var orders = require('./routes/orderRoutes');



app.use('/users', users);
app.use('/user-infos', userInfos);
app.use('/products', products);
app.use('/categorys', categorys);
app.use('/orders', orders);


app.use('/images', express.static('images'));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.listen(1111, function () {
    console.log('Example app listening on port 1111!');
});

mongoose.connect('mongodb://localhost:27017/HauiHH');
var db = mongoose.connection;
db.once('open', function() {
    console.log('conneted to db');
});