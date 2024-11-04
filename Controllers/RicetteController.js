const posts = require('../database/db.js')

const index = (req, res) =>{
    const respondeData ={
        data : posts,
        counter: posts.length
    }
    res.status(200).json(respondeData)
}




module.exports = {
    index
}



