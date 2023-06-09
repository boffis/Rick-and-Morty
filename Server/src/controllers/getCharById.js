const axios = require ("axios")

const SuccessHandler = function (response, res) {
    const character = {
    id:response.data.id, 
    name:response.data.name,
    gender:response.data.gender,
    species:response.data.species,
    origin:response.data.origin,    
    status:response.data.status,
    image:response.data.image
    }
    res.writeHeader(200, {"Content-Type":"application/json"})
     .end(JSON.stringify(character))
}
//--------------------------------------------------------
const ErrorHandler = function (error, res) {
    res.writeHeader(500, {"Content-Type":"text/plain"})
    .end(`ERROR IS ${error.message}`)
}   
//--------------------------------------------------------
const getCharById = (res, id) => {
axios
.get(`https://rickandmortyapi.com/api/character/${id}`)
.then(data=>{
    SuccessHandler (data,res)
    return
})
.catch (error=> {
    ErrorHandler(error,res)
    return
})
}

module.exports = getCharById