const express = require('express')
const { registerpage, registerusers, loginpage, loginuser, dashboardpage, addblog, addblougesdata, deletdata, editpage, update,logout,readmore } = require('../controller/authcontroller')

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

routes.get('/res', registerpage)
routes.get('/', loginpage)
routes.post('/ragister', registerusers)
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginuser)
routes.get('/view', passport.checkUser, dashboardpage)

routes.get('/add', passport.checkUser, addblog)
routes.post('/addblouges',fileUpload, addblougesdata)
routes.get('/deletdata/:id', deletdata)
routes.get('/editpage/:id', editpage)
routes.post('/update',fileUpload, update)

routes.get('/logout',logout)
routes.get('/readmore/:id',readmore)


module.exports = routes   