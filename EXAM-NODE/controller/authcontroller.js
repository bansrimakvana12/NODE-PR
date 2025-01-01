
const usermodel = require('../models/userModal')

const path = require('path')
const fs = require('fs')
const productdata = require('../models/prodectModal')

const p_registerpage = (req, res) => {
    return res.render('regester')
}
const p_loginpage = (req, res) => {
    if(res.locals.user){
        return res.redirect('/dashboard')
    }
    return res.render('login')
}

const p_registerusers = async (req, res) => {
    try {
        const { p_name, p_email, p_password } = req.body
        await usermodel.create({
            p_name: p_name,
            p_email: p_email,
            p_password: p_password,
        })
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

const p_loginuser = async (req, res) => {
    try {
        const { p_email, p_password } = req.body
        const user = await usermodel.findOne({ p_email: p_email });

        if (!user || user.p_password != p_password) {
            console.log("email and password is not match");
            return false;
        }
        return res.redirect('/dashboard')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const p_dashboardpage = async (req, res) => {
    return res.render('dashboard')
   
};

const p_addproduct = (req, res) => {
    return res.render('add_product')
}
 const viewProduct = async (req, res) => {
    try {
       
        let product = await productdata.find({});
        return res.render('view_product', {
            product
        })
    } catch (err) {
        console.log(err);
        return false;
    }
 }
const p_insertproduct = async (req, res) => {
    try {
        const { product_name,product_price,product_qty,  product_description } = req.body
        const user = await productdata.create({
            product_name: product_name,
            product_price: product_price,
            product_qty: product_qty,
            product_description: product_description,
            image: req.file.path
        })
        return res.redirect('view_product')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const p_deletdata = async (req, res) => {
    try {
        let id = req.query.id;
        console.log(id);
        let single = await productdata.findById(id);
        await productdata.findByIdAndDelete(id);
        console.log(`user delete`);
        return res.redirect('/view_product');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const p_editpage = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await productdata.findById(id);
        return res.render('edit_product', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const  p_update = async (req, res) => {
    try {
        const { id,product_name,product_price,product_qty,product_description } = req.body;
        if (req.file) {
            let single = await productdata.findById(id);
            fs.unlinkSync(single.image);
            await productdata.findByIdAndUpdate(id, {
                product_name: product_name,
            product_price: product_price,
            product_qty: product_qty,
            product_description: product_description,
            image: req.file.path
            })
            console.log("record update");
            return res.redirect('/view_product');
        } else {
            const { editid, product_name,product_price,product_qty,product_description  } = req.body;
            let single = await productdata.findById(id);

            const up = await productdata.findByIdAndUpdate(editid, {
                product_name: product_name,
            product_price: product_price,
            product_qty: product_qty,
            product_description: product_description,
            // image: single.image
            })
            console.log("user update");
            return res.redirect('/view_product')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const logout = (req, res) => {
    req.logout((err)=>{
        console.log(err);
        return false;
    })
    return res.redirect('/');
}




module.exports = {
    p_registerpage, p_registerusers, p_loginpage, p_loginuser, p_dashboardpage, p_addproduct, p_insertproduct, p_deletdata, p_editpage,  p_update, logout, viewProduct
}