const express = require('express');
const index = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', index)

app.listen(3000, function() {
  console.log("Server Jalan !");
})
