if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config();
}
const express = require('express')
const router = require('./routes')
const errHandler = require('./middleware/errHandler')
const app = express()
const cors = require("cors")




app.use(express.urlencoded({
  extended: true
}))

app.use(cors())

app.use(express.json())

app.use(router)

app.use(errHandler)


module.exports = app
