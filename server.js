var express = require('express')
var body_parser = require('body-parser')
var cors = require('cors')
var app = express()
var mockData = require('./mock_data.json')
var port = process.env.PORT

var jsonParser = body_parser.json()
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions))

app.get('/mockData',jsonParser,(req,res)=>{
    res.header("Content-Type",'application/json')
    res.send(mockData)
})

app.listen(port,()=>{
    console.log(`Server Listening on Port ${port}`)
})