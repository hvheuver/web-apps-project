var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');
let validator = require('validator');
let auth = jwt({secret: process.env.SPOOKY_SECRET, userProperty: 'payload'});

//models
let Blogpost = mongoose.model('Blogpost');
let Contact = mongoose.model('Contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blogposts', function(req, res, next){
  Blogpost.find(function(err, blogposts){
    if(err) return next(err);
      res.json(blogposts);
  });
})

router.post('/blogposts', auth, function (req, res, next){
  //server side validation
  if(!req.body.title || !req.body.body || !req.body.imageUrl){
    return res.status(400).json({message: 'Vul alle velden in.'});
  }
  // check URL
  if(!validator.isURL(req.body.imageUrl)){
    return res.status(400).json({message: 'Geen geldige URL.'});
  }
  // OK
  let blogpost = new Blogpost(req.body);
  blogpost.save(function(err, post){
    if(err) return next(err);
    res.json(post)
  });
});

router.delete('/blogposts/:id', auth, function(req, res, next) {
  Blogpost.remove({ _id: {$in: req.params.id}}, function (err) {
    if (err) return next(err);
      res.json(req.params.id);
  });
});

router.post('/contact', function(req, res, next){
  // validation
  if(!req.body.email || !req.body.subject || !req.body.body ){
    return res.status(400).json({message: 'Vul alle velden in.'});    
  }
  if(!validator.isEmail(req.body.email)){
    return res.status(400).json({message: 'Geen geldig emailadres.'});    
  }
  // OK
  let contact = new Contact(req.body);
  contact.save(function(err, contact){
    if(err) return next(err);
    res.json(contact)
  });
});

module.exports = router;
