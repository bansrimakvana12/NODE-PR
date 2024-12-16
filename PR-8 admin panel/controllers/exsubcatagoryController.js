const catagoryuser = require('../models/catagoryModal')
const subcatagoryuser = require('../models/subcatagoryModal')
const exsubcatagoryuser = require('../models/exsubcatagoryModal')

const routes = require('../routes/exsubcatagoryRoute');

const exsubCatagory = async(req , res) => {
    try {
        let exsubcatagorydata = await exsubcatagoryuser.find({}).populate("catagoryId").populate("subcatagoryId");
        return res.render('view_exsubcatagory',{
            exsubcatagorydata
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}       

const addexsubCatagory = async (req , res) => {
    try {
        let catagory = await catagoryuser.find({});
        let subcatagory = await subcatagoryuser.find({});

        return res.render('add_exsubcatagory',{
            catagory ,
            subcatagory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertexsubCatagory = async (req , res) => {
    try {
        const {catagory , subcatagory , exsubcatagory} = req.body;
        await exsubcatagoryuser.create({
            catagoryId : catagory,
            subcatagoryId : subcatagory,
            exsubcatagory : exsubcatagory,
        })
        console.log("subcatagory craete");
        return res.redirect('/exsubcatagory')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteexsubCatagory = async (req , res) =>{
    try {
        const id = req.query.id;
        await exsubcatagoryuser.findByIdAndDelete(id);
        return res.redirect('/exsubcatagory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editexsubCatagory = async (req , res) =>{
    try {
        const id = req.query.id;
        let catagory = await catagoryuser.find({});
        let subcatagory = await subcatagoryuser.find({});
        let single = await exsubcatagoryuser.findById(id).populate("catagoryId").populate("subcatagoryId")
        return res.render('edit_exsubcatagory', {
            catagory,
            subcatagory,
            single 
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateexsubCatagory = async (req , res) => {
    try {
        const { editid, catagory, subcatagory , exsubcatagory } = req.body;
        console.log(req.body);
        
        await exsubcatagoryuser.findByIdAndUpdate(editid, {
            catagoryId: catagory,
            subcatagoryId: subcatagory ,
            exsubcatagory : exsubcatagory,
        })
        return res.redirect('/exsubcatagory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const changeexsubStatus = async (req , res) => {
    try {
        let id = req.query.id;
        let status = req.query.status;
        if (status== "active") {
            await exsubcatagoryuser.findByIdAndUpdate(id ,{
                status : "deactive",
            })
            return res.redirect('/exsubcatagory')
        }else{   
            await exsubcatagoryuser.findByIdAndUpdate(id ,{
                status : "active",
            })
            return res.redirect('/exsubcatagory')
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

module.exports = {
    exsubCatagory , addexsubCatagory ,insertexsubCatagory ,deleteexsubCatagory ,editexsubCatagory ,updateexsubCatagory ,changeexsubStatus , ajaxgetCatagory
}