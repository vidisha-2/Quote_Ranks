const authors = require('./../controller/controller');

module.exports= function(app){
    app.get('/api/authors', authors.index)
    app.get('/api/authors/:id', authors.show)
    app.post('/api/authors', authors.create)
    app.put('/api/authors/:id', authors.update)
    app.post('/api/authors/:id/quotes', authors.createQuote)
    app.get('/api/authors/:authorsid/quotes/:quotesid/:num', authors.addVote)
    app.delete('/api/authors/:id', authors.delete)
    app.delete('/api/authors/:id/quotes/:quotesid', authors.deleteQuote)
    app.all('*', authors.catch)
}