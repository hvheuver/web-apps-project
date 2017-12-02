var mongoose = require('mongoose');

var BlogpostSchema = new mongoose.Schema({
    title: String,
    body: String,
    imageUrl: String
});

mongoose.model('Blogpost', BlogpostSchema);