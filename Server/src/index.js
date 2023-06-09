var http = require ("http")
var data = require ("./utils/data")
var getCharById = require ("./controllers/getCharById.js")

//"/rickandmorty/character"

http.createServer (function (req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes("rickandmorty/character")) {

        const id = req.url.split("/").pop()
        
        console.log (id)
        
        getCharById (res, id)
        
        return
    }

    res.writeHead (404)
    res.end ("404 something is wrong")

}).listen (3001, "localhost")