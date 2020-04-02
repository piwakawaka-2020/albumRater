const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

//functions

function getAlbums(db = connection) {
  return db('albums').select()
}

//export functions
module.exports = {
  getAlbums
}