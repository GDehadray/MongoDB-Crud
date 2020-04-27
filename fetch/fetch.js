let express = require("express");
let mongodb = require("mongodb");
let ganeshIT = mongodb.MongoClient;


module.exports = express.Router().get("/",(req,res)=>{
    ganeshIT.connect("mongodb://localhost:27017/mongodb",
                        (err,db)=>{
       db.collection("products").find().toArray((err,records)=>{
            res.send(records);
        });        
    });
});