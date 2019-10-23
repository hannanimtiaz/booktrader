var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    firstname: String,
    lastname: String,
    phone: String,
    book_ids:[{type: Schema.Types.ObjectId, ref: 'Book'}],
});

var User = mongoose.model('User', adminSchema);

module.exports = User;