const express = require('express');

const routes = express.Router();

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

const { loginPage, registerPage, registerRecord, loginUser, dashboardPage,logout, addblog, addblogdata, deletdata, editpage, update,readmore  } = require('../controllers/AuthController');


routes.get('/',loginPage)
routes.get('/register',registerPage)
routes.post('/registerRecord',registerRecord)
routes.post('/loginUser',loginUser)
routes.get('/view',dashboardPage)

routes.get('/add',  addblog)
routes.post('/addblogg',fileUpload, addblogdata)
routes.get('/deletdata/:id', deletdata)
routes.get('/editpage/:id', editpage)
routes.post('/update',fileUpload, update)
routes.get('/readmore/:id',readmore)




routes.get('/logout',logout)


module.exports = routes;