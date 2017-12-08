var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let jwt = require('express-jwt');
let User = mongoose.model('User');
let auth = jwt({secret: process.env.SPOOKY_SECRET, userProperty: 'payload'});



//register users, only admin is allowed.
router.post('/register', auth, function(req, res, next){
  if(!req.body.username || !req.body.password){
      return res.status(400).json(
        {message: 'Vul alle velden in.'});
  }
  var user = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password)
  user.save(function (err){
      if(err){ return next(err); }
      return res.json({token: user.generateJWT()})
  });
});

//login
router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
      return res.status(400).json(
        {message: 'Vul alle velden in.'});
  }
  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }
    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

//check username for registering, whether or not it is unique
router.post('/checkusername', function(req, res, next) {
    User.find({username: req.body.username}, function(err, result) {
      if (result.length) {
        res.json({'username': 'alreadyexists'})
      } else {
        res.json({'username': 'ok'})
      }
    });
});

module.exports = router;
