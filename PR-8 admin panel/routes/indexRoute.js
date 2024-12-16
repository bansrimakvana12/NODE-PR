const express = require('express');

const routes = express.Router();

routes.use('/',require('./authRoute'));
routes.use('/catagory',require('./catagoryRoutes'));
routes.use('/subcatagory',require('./subcatagoryRoute'));
routes.use('/exsubcatagory' ,require('./exsubcatagoryRoute'));
routes.use('/product' ,require('./productRoute'));



module.exports = routes;