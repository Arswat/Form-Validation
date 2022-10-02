const express = require('express');
var app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const userroute = require('./routes/userroute')

app.use('/api/user', userroute)

app.get('/', function(req,res){
    res.end('This is backend')
})

app.listen(5000, ()=>{
    console.log('server started on port 5000')
})