//dependencies

var express = require('express');
var router = express.Router();

//Models
var Products = require('../models/product');
var ExerciseProgram = require('../models/exerciseprogram');

//routes
Products.methods(['get', 'put', 'post', 'delete']);
Products.register (router, '/products');
ExerciseProgram.methods(['get', 'put', 'post', 'delete']);
ExerciseProgram.register(router, '/exerciseprogram')

//return router

module.exports = router;