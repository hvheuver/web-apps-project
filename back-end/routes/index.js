var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Blogpost = mongoose.model('Blogpost');
let jwt = require('express-jwt');

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

router.post('/blogposts', auth,function (req, res, next){
  let blogpost = new Blogpost(req.body);
  blogpost.save(function(err, rec){
    if(err) return next(err);
    res.json(rec)
  });
});

router.delete('/blogposts/:id', function(req, res, next) {
  Blogpost.remove({ _id: {$in: req.post }}, function (err) {
    if (err) return next(err);
    // remove
    req.post.remove(function(err) {
      if (err) { return next(err); } 
      // send old object back
      res.json(req.post);
     });
  })
})

module.exports = router;
