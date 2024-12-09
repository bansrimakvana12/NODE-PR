const express = require('express');
const routes = express.Router();

const passport = require('passport');
const {exsubCatagory ,addexsubCatagory,insertexsubCatagory, deleteexsubCatagory , editexsubCatagory ,updateexsubCatagory , changeexsubStatus } = require('../controllers/exsubcatagoryController');

routes.get('/',exsubCatagory)
routes.get('/addexsubcatagory',addexsubCatagory)
routes.post('/insertexsubcatagory', insertexsubCatagory)
routes.get('/deleteexsubcatagory', deleteexsubCatagory)
routes.get('/editexsubcatagory',editexsubCatagory)
routes.post('/updateexsubcatagory',updateexsubCatagory)
routes.get('/changeexsubstatus',changeexsubStatus)



module.exports = routes;

