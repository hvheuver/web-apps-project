var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Blogpost = mongoose.model('Blogpost');
let jwt = require('express-jwt');
let validator = require('validator');
let auth = jwt({secret: process.env.SPOOKY_SECRET, userProperty: 'payload'});

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
    console.log("Lege velden.");
    console.log(req.body);
    return res.status(400).json({message: 'Vul alle velden in.'});
  }
  //check URL
  if(!validator.isURL(req.body.imageUrl)){
    console.log("Geen geldige URL.");
    return res.status(400).json({message: 'Geen geldige URL.'});
  }
  // alles OK
  let blogpost = new Blogpost(req.body);
  blogpost.save(function(err, rec){
    if(err) return next(err);
    res.json(rec)
  });
});

router.delete('/blogposts/:id', auth, function(req, res, next) {
  Blogpost.remove({ _id: {$in: req.params.id}}, function (err) {
    if (err) return next(err);
      res.json(req.params.id);
  });
});

module.exports = router;
