const ricette = require('../database/db.js')

const index = (req, res) => {

    res.json({
        data: ricette,
        counter: ricette.lenght
    })
}

const show = (req, res) =>{

    console.log(req.params);
    
    
    
    const ricetta = ricette.find( (ricetta) => ricetta.slug === req.params.slug)
    console.log(ricetta);
    
    if(!ricetta){
        return res.status(404).json({error: "Nessuna ricetta trovata"})
    }
    return res.status(200).json({ data: ricetta })
}

module.exports = {
    index,
    show
}



