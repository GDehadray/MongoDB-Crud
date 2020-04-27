let express = require("express");
let mongodb = require("mongodb");
let ganeshIT = mongodb.MongoClient;


module.exports = express.Router().post("/",(req,res)=>{
    ganeshIT.connect("mongodb://localhost:27017/mongodb",
                       (err,db)=>{
          db.collection("products").deleteOne({'p_id':req.body.p_id},(err,result)=>{
                  if(err)
                      res.send({delete:"fail"});
                 else 
                      res.send({delete:"success"});
          });
    });
});