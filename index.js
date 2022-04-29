const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/musalasoft');
mongoose.Promise = global.Promise;


// app.use(express.static('public'));

app.use(bodyParser.json());

app.use(cors());


app.use('/musalasoft', require('./routers/api'));

app.use((err,req,res,next)=>{

    // res.send({error:err});
    res.status(422).send({error:err});
// console.log(err);
})


app.listen(process.env.port || 4000, function(){

    console.log('Listening to port request');
})