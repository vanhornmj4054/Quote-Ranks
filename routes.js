const controller = require("./controller");
const path = require("path");

module.exports = function(app){
    app.get('/api/authors', controller.home)
    app.post('/api/authors', controller.create)
    app.get('/api/authors/:id', controller.find)
    app.put('/api/authors/:id', controller.update)
    app.delete('/api/authors/:id', controller.remove)
    app.all("*", (req, res, next)=> {
    	res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}