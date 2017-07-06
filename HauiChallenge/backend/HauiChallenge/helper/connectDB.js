var mongoose   = require('mongoose');
var {connectionString} = require('./../config/db');

exports.connectDB = ()=>{
    mongoose.connect(connectionString);
    console.log("connect to database, done");
}