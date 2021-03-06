const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

//functions

function getAlbums(db = connection) {
  return db('albums').select()
}

function getComments (id, db = connection) {
  return db('reviews')
  .select('rating', 'comment', 'album_id')
  .where('album_id', id)
}

function getAlbumsById(id, db = connection) {
  return db('albums')
  .select()
  .where('id', id)

}

function addComment(album_id, rating, comment, db = connection) {
  return db('reviews').insert({'album_id': album_id, 'rating': rating, 'comment': comment})
}

//export functions
module.exports = {
  getAlbums: getAlbums,
  getAlbumsById: getAlbumsById,
  getComments: getComments,
  addComment: addComment
}