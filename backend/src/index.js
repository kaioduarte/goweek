const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://kds:kdsgoweek1@ds133856.mlab.com:33856/kds-goweek', {
  useNewUrlParser: true
})

const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  req.io = io
  next()
})

app.use('/tweets', require('./routes/tweets'))
app.use('/likes', require('./routes/likes'))

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
