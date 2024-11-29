const express = require('express');

const port = 9911;

const app = express();


app.set('view engine','ejs');

app.use(express.urlencoded());

const path = require('path');

app.use('/',express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    return res.render('index')
})
app.get('/widgets',(req,res)=>{
    return res.render('widgets')
})
app.get('/charts',(req,res)=>{
    return res.render('charts')
})
app.get('/tables',(req,res)=>{
    return res.render('tables')
})
app.get('/full-width',(req,res)=>{
    return res.render('full-width')
})
app.get('/form-basic',(req,res)=>{
    return res.render('form-basic')
})
app.get('/form-wizard',(req,res)=>{
    return res.render('form-wizard')
})
app.get('/buttons',(req,res)=>{
    return res.render('buttons')
})
app.get('/icon-material',(req,res)=>{
    return res.render('icon-material')
})
app.get('/icon-fontawesome',(req,res)=>{
    return res.render('icon-fontawesome')
})
app.get('/page-element',(req,res)=>{
    return res.render('page-element')
})
app.get('/dashboard2',(req,res)=>{
    return res.render('dashboard2')
})
app.get('/gallery',(req,res)=>{
    return res.render('gallery')
})
app.get('/calendar',(req,res)=>{
    return res.render('calendar')
})
app.get('/invoice',(req,res)=>{
    return res.render('invoice')
})
app.get('/chat',(req,res)=>{
    return res.render('chat')
})
app.get('/login',(req,res)=>{
    return res.render('login')
})
app.get('/regester',(req,res)=>{
    return res.render('regester')
})
app.get('/error403',(req,res)=>{
    return res.render('error403')
})
app.get('/error404',(req,res)=>{
    return res.render('error404')
})
app.get('/error405',(req,res)=>{
    return res.render('error405')
})
app.get('/error500',(req,res)=>{
    return res.render('error500')
})

app.listen(port,(err)=>{
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server runn :- ${port}`);
    
})