'use strict'


const express = require('express');
let bodyParser = require('body-parser');
let api = require('./routes/favoritoRoute');

let app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/proyecto',api);



module.exports = app;



