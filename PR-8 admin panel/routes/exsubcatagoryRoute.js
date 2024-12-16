const express = require('express');
const routes = express.Router();

const passport = require('passport');
const {exsubCatagory ,addexsubCatagory,insertexsubCatagory, deleteexsubCatagory , editexsubCatagory ,updateexsubCatagory , changeexsubStatus , ajaxgetCatagory } = require('../controllers/exsubcatagoryController');

routes.get('/', passport.checkUser,exsubCatagory)
routes.get('/addexsubcatagory',passport.checkUser ,addexsubCatagory)
routes.post('/insertexsubcatagory', insertexsubCatagory)

routes.get('/deleteexsubcatagory', deleteexsubCatagory)
routes.get('/editexsubcatagory',editexsubCatagory)
routes.post('/updateexsubcatagory',updateexsubCatagory)

routes.get('/changeexsubstatus',changeexsubStatus)
routes.get('/ajaxgetcatagory', ajaxgetCatagory)


module.exports = routes;

