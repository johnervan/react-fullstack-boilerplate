const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')
const version = require('./package.json').version

const usersRouter = require('./routes/users')

const app = express()
const envName = (process.env.NODE_ENV || 'local').toLowerCase()

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/version', (req, res) => {
  res.json({
    version: version,
    env: envName
  })
})

app.use('/api/users', usersRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'))
})

module.exports = app
