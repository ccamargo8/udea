const express = require ('express');
const bodyparser = require("bodyparser");

const app = express() //Debemos traer nuestra versión de la API / config.js

const{API_VERSION}=require('./config');

app.use(express.urlencoded({extended:false}));
app.use(express.json());