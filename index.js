const express= require('express')
const mongoose=require("mongoose")  
const app=express()
const cors = require('cors');
app.use(cors());
app.use(express.json())
const comment=require("./moduls/comment")
const username="walid__1st"
const pass="1234567812345678"
mongoose.connect("mongodb+srv://walid__1st:1234567812345678@cluster0.kavrnnl.mongodb.net/contactApp?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected")
    app.listen(3000,()=>{
        console.log("listening")
    })
})
.catch(()=>{
    console.log("fail to connect")
})
app.post("/comment", async (req, res) => {
    try {
        const newcomment = new comment({
            first_name: req.body.first_name,
            family_name: req.body.family_name,
            message: req.body.message,
            email: req.body.email
        });
        await newcomment.save();
        console.log("new comment!")
        res.status(201).json({ message: "Comment saved successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to save comment." });
    }
});
app.get("/comments",async(req,res)=>{
    const comments=await comment.find()
    res.json(comments)
})
