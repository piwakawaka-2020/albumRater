const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/router')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', userRoutes)

module.exports = server
