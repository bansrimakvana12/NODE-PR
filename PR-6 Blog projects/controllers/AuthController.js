const UserModel = require('../models/UserModel'); 
const path = require('path')
const fs = require('fs')
const blogModal = require('../models/bolgModal')

const loginPage = (req,res) => {
    if(req.cookies['auth']){
        return res.redirect('/view');
    }
    return res.render('login');
}
const registerPage = (req,res) => {
    return res.render('register');
}
const registerRecord = async(req,res) => {
    try{
        const {name,email,password} = req.body;
        const user = await new UserModel({
            name:name,
            email:email,
            password:password
        }).save();
        console.log("record successfully add");
        
        return res.redirect('/');
    }catch(err){
        console.log(err);
        return false;
    }
}
const loginUser = async(req,res) => {
    try{
       const {email,password} = req.body;
       const user = await UserModel.findOne({email:email});
      
       if(!user || user.password != password){
            console.log(`Email and Password not valid`);
            return res.redirect('/');
       }

       res.cookie('auth',user);
       return res.redirect('/view')
       
    }catch(err){
        console.log(err);
        return false;
    }
}


const dashboardPage = async (req, res) => {
    try {
        if(!req.cookies['auth']){
            return res.redirect('/');
        }
        const { name, description, image } = req.body; 

        const user = await blogModal.find({});

        return res.render('view', {
            user
        });

    } catch (error) {
        console.log(err);
        return false;
    }
};

const addblog = (req, res) => {
    if(!req.cookies['auth']){
        return res.redirect('/');
    }
    return res.render('add')
}

const addblogdata = async (req, res) => {
    try {
        if(!req.cookies['auth']){
            return res.redirect('/');
        }
        const { name, description } = req.body
        const user = await blogModal.create({
            name: name,
            description: description,
            image: req.file.path
        })
        return res.redirect('view')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deletdata = async (req, res) => {
    try {

        let id = req.params.id;
        let single = await blogModal.findById(id);
        fs.unlinkSync(single.image);
        await blogModal.findByIdAndDelete(req.params.id);
        console.log(`user delete`)
        return res.redirect('/view');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editpage = async (req, res) => {
    try {
        let id = req.params.id;

        let single = await blogModal.findById(id);
        return res.render('edit', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const update = async (req, res) => {
    try {
        const { id, name, description } = req.body;
        if (req.file) {
            let single = await blogModal.findById(id);
            fs.unlinkSync(single.image);
            await blogModal.findByIdAndUpdate(id, {
                name: name,
                description: description,
                image: req.file.path
            })
            console.log("record update");
            return res.redirect('/view');
        } else {
            const { id, name, description } = req.body;
            let single = await blogModal.findById(id);

            const up = await blogModal.findByIdAndUpdate(id, {
                name: name,
                description: description,
                image: single.image
            })
            console.log("user update");
            return res.redirect('/view')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const readmore = async (req,res) => {
    try {
        let id = req.params.id
        console.log(id);
       
        
        let single = await blogModal.findById(id);
        return res.render('readmore', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const logout = (req,res) => {
    return res.clearCookie('auth').redirect('/');
}

module.exports = {
    loginPage,registerPage,registerRecord,loginUser,dashboardPage,logout ,addblog, addblogdata, deletdata, editpage, update, readmore
}