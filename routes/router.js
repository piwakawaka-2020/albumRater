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

            viewData = {
                id: req.params.id,
                name: albumObj.name,
                cover: albumObj.cover,
                artist: albumObj.artist,
                year: albumObj.year,
                comments: comments
            }

            res.render('view.hbs', viewData)
        })
    })

})

router.post('/album/:id', (req, res) => {
    db.addComment(req.params.id, req.body.rating, req.body.comment).then(() => {
        res.redirect(`/album/${req.params.id}`)
    })
})

module.exports = router