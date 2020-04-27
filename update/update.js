let express = require("express");
let mongodb = require("mongodb");
let ganeshIT = mongodb.MongoClient;

module.exports = express.Router().post("/",(req,res)=>{
    ganeshIT.connect("mongodb://localhost:27017/products",
                          (err,db)=>{
         db.collection("products").updateOne({'p_id':req.body.p_id},
                                     {$set:{'p_name':req.body.p_name,
                                            'p_cost':req.body.p_cost}},
                                            (err,result)=>{
                      if(err)
                        res.send({update:"fail"});
                      else 
                         res.send({update:"success"});                          

            });  
    });
});