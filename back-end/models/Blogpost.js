var mongoose = require('mongoose');

var BlogpostSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    body: String,
});

mongoose.model('Blogpost', BlogpostSchema);