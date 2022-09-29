const express = require('express');
const app = express();
const port = 9600;
const cors = require('cors');
const Bodyparser = require('body-parser');

app.use(Bodyparser.json({ extended: true}));
app.use(Bodyparser.urlencoded({extended:true}));
app.use(cors());


const route = require('./route')
app.use('/', route);


app.listen(port,function(){
    console.log("MovieFlex Backend Server is Running on Port:9600");
})




