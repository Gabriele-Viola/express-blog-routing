/*
Esercizio
Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
Tutte le risposte saranno in json.
All'interno creare le seguenti rotte:
/ - index: ritornerà un html con una ul che stamperà la lista dei post
/:slug - show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post
Scrivere tutte le funzioni delle rotte nel controller dedicato
Registrare il router dentro app.js con il prefisso posts/.
Bonus
Creare inoltre un filtro in querystring per tag, che ritorna in formato json tutti i post che hanno quei tag
Aggiungi il metodo store per la creazione di un nuovo post
*/

const express = require('express')
const app = express()
const ricette = require('./database/db')
const PORT = 3000
const HOST = 'http://localhost'

app.listen(PORT, () => {

    console.log(`${HOST}:${PORT}`);






})

app.get('/ricette', (req, res) => {

    res.json({
        data: ricette,
        counter: ricette.lenght
    })
})
app.get('/ricette/:id', (req, res) =>{
    const ricetta = ricette.find( (ricetta) => ricetta.slug === req.params.slug)
    console.log(ricetta);
    
    // if(!ricetta){
    //     return res.status(404).json({error: "Nessuna ricetta trovata"})
    // }
    // return res.status(200).json({ data: ricetta })
})

