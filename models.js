const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/quotes_db', err=>{}, { useNewUrlParser: true });

var AuthorSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name must be greater than three characters."], minlength: 3 },
    quote: { type: String, required: true, minlength: [3, "Quote must be greater than three characters."]}
    }, { timestamps: true });

mongoose.model('Author', AuthorSchema);

var Author = mongoose.model('Author');

module.exports = Author;