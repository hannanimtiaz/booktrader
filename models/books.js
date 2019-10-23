var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    bookName:String,
    author:String,
    ISBN:String
});

var Book = mongoose.model('Book', adminSchema);

module.exports = Book;