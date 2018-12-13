const Author = require('./../models/model').Author;
const Quote = require('./../models/model').Quote;
var path = require('path');

module.exports={
    index : function(req, res){
        Author.find({}).sort({name:1})
        .then(data=> console.log("All authors", data)||res.json(data))
        .catch(errs=>console.log("Cannot display, errors", errs)||res.json(errs))
    },
    show : function(req, res){
        Author.findById(req.params.id)
        .then(data=>console.log("Successfully displayed",data) || res.json(data))
        .catch(errs => console.log("It had errors", errs) || res.json(errs))
    },
     create: function(req, res){
        Author.create(req.body)
        .then(data=> console.log("Author data", data)||res.json(data))
        .catch(errs => console.log("errors", errs) || res.json(errs))
    },
    update: function(req, res){
        Author.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
        .then(data=> console.log("Updated", data) || res.json(data))
        .catch(errs => console.log("Update had errors", errs) || res.json(errs))
    },
    delete: function(req, res){
        Author.findByIdAndRemove(req.params.id)
        .then(data => console.log("deleted", data) || res.json(data))
        .catch(errs => console.log("deletehad errors", errs) || res.json(errs))
    },
    createQuote: function(req, res){
        var newquotes = new Quote({content: req.body.content})
        Author.findByIdAndUpdate(req.params.id, {$push: {quotes: newquotes}}, {runValidators: true, new:true, context: 'query'})
        .then(data => console.log("createdQuote", data) || res.json(data))
        .catch((err) => res.json(err))
    },

    deleteQuote: function(req, res){
        Author.findByIdAndUpdate({_id:req.params.id}, {$pull: {quotes: {_id: req.params.quotesid}}})
        .then(data => console.log("deleted", data) || res.json(data))
        .catch(errs => console.log("Error in deleting", errs) || res.json(data))
    },
    addVote: function(req, res){
        var num= req.params.num;
         Author.findOneAndUpdate({"_id": req.params.authorsid, "quotes._id": req.params.quotesid}, {$set: {"quotes.$.vote":num}})
        .then((data)=>console.log(data)||res.json(data))
        .catch((err)=>console.log(err)||res.json(err)) 
    },

    catch: function(req, res, next){
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    }



}