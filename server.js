var express = require('express')
var body_parser = require('body-parser')
var cors = require('cors')
var app = express()
var mockData = require('./mock_data.json')
var port = 3000 || process.env.PORT

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

app.get('/alpha_sorted_md',jsonParser,(req,res)=>{
    var tempDataForSortAlpha = mockData
    res.header("Content-Type",'application/json')
      function compare(a,b){
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
    res.send(tempDataForSortAlpha.sort(compare))
})

app.get('/date_sorted_md',jsonParser,(req,res)=>{
    res.header("Content-Type",'application/json')
    var tempDataForSortDate = mockData
    res.send(tempDataForSortDate.sort((a, b) => Date.parse(a.dateLastEdited) - Date.parse(b.dateLastEdited)))
})

app.listen(port,()=>{
    console.log(`Server Listening on Port ${port}`)
})