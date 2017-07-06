var express = require('express');
var router = express.Router();

var User = require('./../models/User');

/* GET /users. */
router.get('/', function(req, res, next) {
    User.find(function (err, users) {
        if (err){
            res.json({
                status:'error',
                data:err
            });
            return console.log(err);
        }
        
        res.json({
            status:'success',
            data:users
        });
    });
});

router.post('/', function(req, res, next) {
    var username = req.body.username||"";
    var password = req.body.password||"";
    var type = req.body.type||"member";

    if(username == ""){
        res.json({
            status:"error",
            data:"require username"
        });
        return;
    }
    if(password == ""){
        res.json({
            status:"error",
            data:"require password"
        });
        return;
    }

    var user = new User({
        username:username,
        password:password,
        type:type
    });
    user.save(function(err){
        if (err){
            res.json({
                status:'error',
                data:err
            });
            return console.log(err);
        }
        res.json({
            status:'success'
        });
    })
});
router.get('/:username', function(req, res, next){
    var username = req.params.username;
    User.findOne({username:username},function (err, user) {
        if (err){
            res.json({
                status:'error',
                data:err
            });
            return console.log(err);
        }
        user.password = req.body.password?req.body.password:user.password;
        user.type = req.body.type?req.body.type:user.type;
        user.save(function(err){
            if (err){
                res.json({
                    status:'error',
                    data:err
                });
                return console.log(err);
            }
            res.json({
                status:'success'
            });
        })
        
        
    });
})
router.delete('/:username', function(req, res, next){
    User.remove({
        username:req.params.username
    },function(err, user){
        if(err){
            res.json({
                status:'error',
                message:err
            });
            return;
        }
        res.json({
            status:'success',
            data:user
        });
    });
});

module.exports = router;
