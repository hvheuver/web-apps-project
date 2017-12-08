var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    email: String,
    subject: String,
    body: String
});

mongoose.model('Contact', ContactSchema);