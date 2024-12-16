const express = require('express');

const routes = express.Router();

const { addCatagory , viewCatagory , insertCatagory , deleteCatagory ,editCatagory , updateCatagory , changeStatus} = require('../controllers/catagoryController');

const passport = require('passport');


routes.get('/addcatagory', passport.checkUser, addCatagory)
routes.get('/viewcatagory', passport.checkUser,viewCatagory)
routes.post('/insertcatagory', insertCatagory )
routes.get('/deletecatagory', deleteCatagory )
routes.get('/editcatagory', editCatagory )
routes.post('/updatecatagory', updateCatagory )

// change status 
routes.get('/changestatus', changeStatus )



module.exports = routes;
