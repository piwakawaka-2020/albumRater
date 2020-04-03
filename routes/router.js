const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getAlbums().then(albums => {
        res.render('partials/home', {'albums': albums})
    })
})

router.get('/album/:id', (req, res) =>{

    let albumObj

    db.getAlbumsById(req.params.id).then(album => {
        albumObj = album[0]
        db.getComments(req.params.id).then(comments => {
            commentArray = comments

            viewData = {
                name: albumObj.name,
                cover: albumObj.cover,
                artist: albumObj.artist,
                year: albumObj.year,
                comments: commentArray
            }

            res.render('view.hbs', viewData)
        })
    })

})

module.exports = router