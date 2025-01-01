const mongoose=require('mongoose')


const userschama=mongoose.Schema({
    product_name:{
        type:String,
        require:true
    },
    product_price:{
        type:String,
        require:true
    },
    product_qty:{
        type:String,
        require:true
    },
    product_description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }

})

const product =mongoose.model('product',userschama)

module.exports=product    