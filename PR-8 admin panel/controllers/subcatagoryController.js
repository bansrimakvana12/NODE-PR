const catagoryuser = require('../models/catagoryModal')
const subcatagoryuser = require('../models/subcatagoryModal')

const routes = require('../routes/subcatagoryRoute')

const subCatagory = async (req , res) => {
    try {
        return res.render('view_subcatagory')
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

module.exports = {
    subCatagory , addsubCatagory ,
}
