let express = require("express");
let mongodb= require("mongodb");
let ganeshIT = mongodb.MongoClient;

module.exports = express.Router().post("/",(req,res)=>{
    ganeshIT.connect("mongodb://localhost:27017/mongodb",
                        (err,db)=>{
         db.collection("products").insertOne({
             'p_id'  : req.body.p_id,
             'p_name': req.body.p_name,
             'p_cost': req.body.p_cost     
         },(err,result)=>{
              if(err)
                  res.send({insert:"fail"});
               else
                res.send({insert:"success"});
         });
    });
});