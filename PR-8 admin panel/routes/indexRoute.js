const express = require('express');

const routes = express.Router();

routes.use('/',require('./authRoute'));
routes.use('/catagory',require('./catagoryRoutes'));
routes.use('/subcatagory',require('./subcatagoryRoute'));
routes.use('/exsubcatagory' ,require('./exsubcatagoryRoute'));



module.exports = routes;