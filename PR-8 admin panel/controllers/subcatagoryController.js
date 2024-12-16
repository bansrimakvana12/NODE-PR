const catagoryuser = require('../models/catagoryModal')
const subcatagoryuser = require('../models/subcatagoryModal')


const routes = require('../routes/subcatagoryRoute')

const subCatagory = async (req , res) => {
    try {
        let subcatagory = await subcatagoryuser.find({}).populate("catagoryId")
        return res.render('view_subcatagory',{
            subcatagory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addsubCatagory = async (req , res) => {
    try {
        let catagory = await catagoryuser.find({});
        return res.render('add_subcatagory',{
            catagory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertsubCatagory = async (req , res) => {
    try {
        const {catagory , subcatagory} = req.body;
        await subcatagoryuser.create({
            catagoryId : catagory,
            subcatagory : subcatagory,
        })
        console.log("subcatagory craete");
        return res.redirect('/subcatagory')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deletesubCatagory = async (req , res) =>{
    try {
        const id = req.query.id;
        await subcatagoryuser.findByIdAndDelete(id);
        return res.redirect('/subcatagory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editsubCatagory = async (req , res) => {
    try {
        const id = req.query.id;
        let catagory = await catagoryuser.find({  });
        let single = await subcatagoryuser.findById(id).populate("catagoryId")
        return res.render('edit_subcatagory', {
            catagory,
            single 
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updatesubCatagory = async (req , res) => {
    try {
        const { editid, catagory, subcatagory } = req.body;
        await subcatagoryuser.findByIdAndUpdate(editid, {
            catagoryId: catagory,
            subcatagory: subcatagory
        })
        return res.redirect('/subcatagory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const changesubStatus = async (req , res) => {
    try {
        let id = req.query.id;
        let status = req.query.status;
        if (status == "active") {
            await subcatagoryuser.findByIdAndUpdate(id ,{
                status : "deactive",
            })
            return res.redirect('/subcatagory')
        }else{   
            await subcatagoryuser.findByIdAndUpdate(id ,{
                status : "active",
            })
            return res.redirect('/subcatagory')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    subCatagory , addsubCatagory ,insertsubCatagory , deletesubCatagory , editsubCatagory , updatesubCatagory , changesubStatus
}
