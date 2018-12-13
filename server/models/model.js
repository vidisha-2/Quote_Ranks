var mongoose = require('mongoose');
var uniqueValidator=require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/authorsQuotes');

var QuoteSchema = new mongoose.Schema({
    content: {type: String, minlength:[3, "A quote must contain atleast three characters!"], required:[true, "Must enter"]},
    vote: {type: Number, default:0}
},{timestamps: true});

var AuthorSchema = new mongoose.Schema({
    name : {type: String, uniqueCaseInsensitive:true, minlength:[3, "Name must be atleast # characters"], required:[true, "Must enter an author's name"]},
    quotes: [QuoteSchema]
},{timestamps:true});
AuthorSchema.plugin(uniqueValidator);
module.exports ={Author: mongoose.model('Author', AuthorSchema), Quote: mongoose.model('Quote', QuoteSchema)}