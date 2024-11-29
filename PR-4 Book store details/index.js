const express = require('express');

const port = 9000;

const app = express();

app.set('view engine', 'ejs')

const db = require('./config/db');

const user = require('./models/usermodel');

app.use(express.urlencoded());




app.get('/', (req, res) => {

    user.find({})
        .then((data) => {
            return res.render('view', {
                record: data
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })


})

app.get('/deleterecord', (req, res) => {
    let id = req.query.deleteid;

    user.findByIdAndDelete(id)

        .then((data) => {
            console.log("user delete");
            return res.redirect('/')
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.get('/editrecord', (req, res) => {
    let id = req.query.editid;

    user.findById(id)
        .then((single) => {
            return res.render('edit', {
                data: single
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.post('/updateRecord', (req, res) => {

    const { editid, book_name, book_price, book_pages, book_author } = req.body;
    console.log(book_name, book_price, book_pages, book_author);


    user.findByIdAndUpdate(editid, {
        book_name: book_name,
        book_price: book_price,
        book_pages: book_pages,
        book_author: book_author,

    }).then((data) => {
        console.log("user update");
        return res.redirect('/')
    }).catch((err) => {
        console.log(err);
        return false;
    })
})





app.get('/add', (req, res) => {
    return res.render('add')
})

const userModal = require('./models/usermodel');

app.post('/insertRecord', (req, res) => {

    const { book_name, book_price, book_pages, book_author } = req.body;

    userModal.create({
        book_name: book_name,
        book_price: book_price,
        book_pages: book_pages,
        book_author: book_author,

    }).then((data, err) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log('record add');
        return res.redirect('/add')
    })

})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is runn:- ${port}`);

})