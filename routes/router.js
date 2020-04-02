const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getAlbums().then(albums => {
        res.render('partials/home', {'albums': albums})
    })
})

router.get('/album/:id', (req, res) =>{
    dummyData ={
        name: "Album Title",
        cover: "Image goes here",
        artist: "The Bestest Group Ever",
        year: "2019",
        comments: [
            {rating: "9", comment:"This is the first comment"},
            {rating: "9", comment:"This is the first comment"},
            {rating: "9", comment:"This is the first comment"}
        ]
    }
    res.render('view.hbs', dummyData)
})

module.exports = router