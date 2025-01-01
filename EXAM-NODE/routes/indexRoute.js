const express = require('express')
const { p_registerpage, p_registerusers, p_loginpage, p_loginuser, p_dashboardpage,  p_addproduct, p_insertproduct, p_deletdata,  p_editpage,  p_update,logout , viewProduct } = require('../controller/authcontroller')

const routes = express.Router()

const passport = require('passport');

const multer = require('multer');

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const uniqname = Date.now();
        cb(null, `${file.fieldname}-${uniqname}`);
    }
})
const fileUpload = multer({ storage: st }).single('image');
// regester login user 
routes.get('/p_regester', p_registerpage)
routes.get('/', p_loginpage)
routes.post('/p_ragister', p_registerusers)
routes.post('/p_loginuser',passport.authenticate('local', { failureRedirect: '/' }), p_loginuser)
routes.get('/dashboard',passport.checkUser, p_dashboardpage)
// add view data 
routes.get('/p_add',passport.checkUser, p_addproduct)
routes.get('/view_product',passport.checkUser,viewProduct)
routes.post('/p_insertproduct',fileUpload, p_insertproduct)
routes.get('/deletdata', p_deletdata)
routes.get('/editdata', p_editpage)
routes.post('/p_update',fileUpload, p_update)

routes.get('/logout',logout)


module.exports = routes   