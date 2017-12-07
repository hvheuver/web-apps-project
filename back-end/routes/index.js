var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');
let validator = require('validator');
let auth = jwt({secret: process.env.SPOOKY_SECRET, userProperty: 'payload'});

//models
let Blogpost = mongoose.model('Blogpost');
let Contact = mongoose.model('Contact');

// get blogposts
router.get('/blogposts', function(req, res, next){
  Blogpost.find(function(err, blogposts){
    if(err) return next(err);
      res.json(blogposts);
  });
})

// submit new post
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

// edit a post
router.patch('/blogposts/:id', auth, function(req, res, next){
  console.log("allo");
  if(!req.body.title || !req.body.body || !req.body.imageUrl){
    return res.status(400).json({message: 'Vul alle velden in.'});
  }
  // check URL
  if(!validator.isURL(req.body.imageUrl)){
    return res.status(400).json({message: 'Geen geldige URL.'});
  }
  // OK
  let blogpost = new Blogpost(req.body);
  Blogpost.findByIdAndUpdate(req.params.id, blogpost,function(err, post){
    if(err) return next(err);
    res.json(post);
  });
});


router.delete('/blogposts/:id', auth, function(req, res, next) {
  Blogpost.remove({ _id: {$in: req.params.id}}, function (err) {
    if (err) return next(err);
      res.json(req.params.id);
  });
});

router.get('/blogposts/:id', function(req, res, next) {
  Blogpost.findById(req.params.id, function (err, post) {
    if (err) return next(err);
      res.json(post);
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

router.get('/contactrequests', auth,function(req, res, next){
  Contact.find(function(err, contactrequests){
    if(err) return next(err);
      res.json(contactrequests);
  });
});

router.delete('/contactrequests/:id', auth, function(req, res, next) {
  Contact.remove({ _id: {$in: req.params.id}}, function (err) {
    if (err) return next(err);
      res.json(req.params.id);
  });
});

module.exports = router;
