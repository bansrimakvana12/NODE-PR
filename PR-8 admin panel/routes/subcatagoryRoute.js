const express = require('express');
const routes = express.Router();

const { subCatagory , addsubCatagory , viewsubCatagory } = require('../controllers/subcatagoryController');

const passport = require('passport');

routes.get('/',subCatagory)
routes.get('/addsubcatagory',addsubCatagory)
routes.get('/viewsubcatagory',viewsubCatagory)



module.exports = routes;
