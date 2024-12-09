const catagoryuser = require('../models/catagoryModal')

const addCatagory = (req , res) =>{
    return res.render('add_catagory')
}

const viewCatagory = async (req , res) => {
    try {
       
        let catagory = await catagoryuser.find({});
        return res.render('view_catagory', {
            catagory
        })
    } catch (err) {
        console.log(err);
        return false;
    }


}

const insertCatagory = async (req , res) => {
    try {
       await catagoryuser.create ({
        catagory_name : req.body.catagory
       })
       console.log("catagory create");
        return res.redirect('/catagory/viewcatagory')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteCatagory  = async (req , res) =>{
    try {
        let id = req.query.id;
        console.log(id);
        let single = await catagoryuser.findById(id);
        await catagoryuser.findByIdAndDelete(id);
        console.log(`user delete`);
        return res.redirect('/catagory/viewcatagory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editCatagory = async (req , res) => {
    try {
        let id = req.query.id;
        let single = await catagoryuser.findById(id);
        return res.render('edit_catagory', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const  updateCatagory = async (req , res) => {
    try {
        const { name , editid  } = req.body;
        let single = await catagoryuser.findById(editid);
            await catagoryuser.findByIdAndUpdate(editid, {
                catagory_name : req.body.catagory
            })
            console.log("record update");
            return res.redirect('/catagory/viewcatagory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const changeStatus = async (req , res) => {
    try {
        let id = req.query.id;
        let status = req.query.status;
        if (status== "active") {
            await catagoryuser.findByIdAndUpdate(id ,{
                status : "deactive",
            })
            return res.redirect('/catagory/viewcatagory')
        }else{   
            await catagoryuser.findByIdAndUpdate(id ,{
                status : "active",
            })
            return res.redirect('/catagory/viewcatagory')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addCatagory , viewCatagory , insertCatagory , deleteCatagory , editCatagory , updateCatagory , changeStatus
}