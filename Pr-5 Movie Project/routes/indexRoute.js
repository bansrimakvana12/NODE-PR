const express = require('express');

const routes = express.Router();

const { formPage, addRecord, viewData, deleteRecord, editRecord, updateRecord } = require('../controllers/CrudController');

const multer = require('multer');

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 100000000);
        cb(null, `${file.fieldname}-${uniq}`);
    }
})

const upload = multer({ storage: st }).single('image')

routes.get('/', formPage);

routes.post('/insertRecord', upload, addRecord);
routes.get('/viewrecord', viewData);

routes.get('/deleteRecord', deleteRecord);
routes.get('/editRecord', editRecord);
routes.post('/updateRecord', upload, updateRecord);

module.exports  = upload;

module.exports  = routes;

