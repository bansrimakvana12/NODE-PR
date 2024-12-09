const express = require('express');

const routes = express.Router();

const { addCatagory , viewCatagory , insertCatagory , deleteCatagory ,editCatagory , updateCatagory , changeStatus} = require('../controllers/catagoryController');

routes.get('/addcatagory', addCatagory)
routes.get('/viewcatagory',viewCatagory)
routes.post('/insertcatagory', insertCatagory )
routes.get('/deletecatagory', deleteCatagory )
routes.get('/editcatagory', editCatagory )
routes.post('/updatecatagory', updateCatagory )

// change status 
routes.get('/changestatus', changeStatus )



module.exports = routes;
