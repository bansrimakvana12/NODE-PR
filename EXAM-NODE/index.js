const express = require('express');

const port = 8000;

const app = express();

app.set('view engine','ejs')   

const path = require('path');
const db = require('./config/db');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/',express.static(path.join(__dirname,'public')));
const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');       
app.use(session({
    secret:'rnwadmin',
    resave : true,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*24
    }
}))
app.use(passport.session());
app.use(passport.initialize());  
app.use(passport.setUser);
app.use(express.urlencoded());

app.use('/',require('./routes/indexRoute')); 

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }    
    console.log(`server is start on port :- ${port}`);
    
})
