
var express = require("express");
var router = express.Router()
var mongodb=require("mongodb")

router.post("/register" , async function(req,res,next){
    try{

        const data = req.body.data;
        const MongoClient =mongodb.MongoClient
        const server = await MongoClient.connect('mongodb+srv://vijay55:vj1455@register.yfcjb.mongodb.net/')
        const db = server.db("sms")
        const collection = db.collection("students");
        const result = await collection.insertOne(data)
        res.send(result)
    }catch(ex){ 
        res.send(ex.message)
    }
     
})


module.exports = router;

