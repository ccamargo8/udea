const express = require ("express");
const bodyParser = require ("body-parser");

const app = express(); //Debemos traer nuestra versión de la API | config.js
const { API_VERSION } = require ('./config');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

module.exports = app;
