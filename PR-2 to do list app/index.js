const express = require('express')

const port = 8999;


const app = express();

app.set('view engine','ejs');

let users = []

app.use(express.urlencoded());


app.get('/',(req,res)=> {
    return res.render('index',{
       all:users
    });
})

// record add 
app.post('/recordInsert',(req,res)=>{
    const{ editid, task,status,deadline } = req.body;

    if (editid) {
        const {editid,task,status,deadline} = req.body;
    let up = users.map((val)=>{
        if (val.id == editid) {
            val.task = task,
            val.status = status,
            val.deadline = deadline
        }
        return val;
    })
    users = up;
    console.log("record update");
    return res.redirect('/')
    } else {
        
    let obj = {
        id : Math.floor(Math.random()*10000),
        task : task,
        status : status,
        deadline : deadline,
    }
    users.push(obj);
    console.log("user added ");
    return res.redirect('/')
    }

})

// delete user 
app.get('/delete',(req,res)=>{
    let id = req.query.deleteid;
    let d = users.filter(val => val.id != id);
    users = d;
    console.log("user success ");
    return res.redirect('/')
})

// edit 
app.get('/edit',(req,res)=>{
    let id= req.query.id;
    let single = users.find(val => val.id == req.query.id)
    return res.render('edit',{
        single
    })
})
app.post('/update',(req,res)=>{
    
})

app.listen(port,(err)=> {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server start on port : ${port}`);
})