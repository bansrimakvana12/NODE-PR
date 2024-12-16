const catagoryuser = require('../models/catagoryModal')
const subcatagoryuser = require('../models/subcatagoryModal')
const exsubcatagoryuser = require('../models/exsubcatagoryModal')
const productuser = require('../models/productModal')

const fs = require('fs')
const path = require('path')


const   Product = async(req , res) => {
    try {
        let productdata = await productuser.find({}).populate("catagoryId").populate("subcatagoryId").populate("exsubcatagoryId");
        return res.render('view_product',{
            productdata
        })
    } catch (err) {
        console.log(err);
        return false;
    }
} 
const addProduct = async (req , res) => {
    try {
        let catagory = await catagoryuser.find({});
        let subcatagory = await subcatagoryuser.find({});
        let exsubcatagory = await exsubcatagoryuser.find({});
        return res.render('add_product',{
            catagory ,
            subcatagory , 
            exsubcatagory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertProduct = async (req , res) => {
    try {

        const {catagory, subcatagory, exsubcatagory, name, description, price} = req.body;
        console.log(req.file.path);
        
        await productuser.create({
            catagoryId : catagory,
            subcatagoryId : subcatagory,
            exsubcatagoryId : exsubcatagory,
            name : name,
            price : price,
            description : description ,
            image: req.file.path,

        })
        console.log("product craete");
        return res.redirect('/product')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.query.id;
        await productuser.findByIdAndDelete(id);
        return res.redirect('/product');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editProduct = async (req , res) =>{
    try {
        const id = req.query.id;
        let catagory = await catagoryuser.find({});
        let subcatagory = await subcatagoryuser.find({});
        let exsubcatagory = await exsubcatagoryuser.find({});

        let single = await productuser.findById(id).populate("catagoryId").populate("subcatagoryId").populate("exsubcatagoryId")
        return res.render('edit_product', {
            catagory,
            subcatagory,
            exsubcatagory ,
            single 
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateProduct = async (req , res) => {
    try {
        const { editid, catagory, subcatagory , exsubcatagory , name , price , description } = req.body;
        
        if (req.file) {
            const single = await productuser.findById(editid)
            fs.unlinkSync(single.image)
            await productuser.findByIdAndUpdate(editid, {
                catagoryId: catagory,
                subcatagoryId: subcatagory ,
                exsubcatagoryId : exsubcatagory,
                name : name,
                price : price,
                description : description,
                image: req.file.path,
            })
            return res.redirect('/product');
        }else{
            const single = await productuser.findById(editid) 

            await productuser.findByIdAndUpdate(editid, {
                catagoryId: catagory,
                subcatagoryId: subcatagory ,
                exsubcatagoryId : exsubcatagory,
                name : name,
                price : price,
                description : description,
                image: single.image,
            })
            return res.redirect('/product');

        }


       
    } catch (err) {
        console.log(err);
        return false;
    }
}

const changeProduct = async (req , res) => {
    try {
        let id = req.query.id;
        let status = req.query.status;
        if (status== "active") {
            await productuser.findByIdAndUpdate(id ,{
                status : "deactive",
            })
            return res.redirect('/product')
        }else{   
            await productuser.findByIdAndUpdate(id ,{
                status : "active",
            })
            return res.redirect('/product')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const ajaxgetCatagory = async (req , res) => {
    try {
        let id = req.query.id;
        let catagory = await subcatagoryuser.find({catagoryId:id});
        return res.send({
            success: true,
            message : "record fetch",
            catagory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const ajaxgetsubCatagory = async (req , res) => {
    try {
        let id = req.query.id;
        let subcatagory = await exsubcatagoryuser.find({subcatagoryId:id});
        return res.send({
            success: true,
            message : "record fetch",
            subcatagory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    Product , addProduct , insertProduct , deleteProduct ,editProduct , updateProduct , changeProduct,ajaxgetCatagory,ajaxgetsubCatagory
}