const express=require('express');
const {login,register}=require('../controller/auth');
const { verifyToken } = require('../controller/auth');
const { getUserByToken } = require('../controller/auth');
const router=express.Router();

router.post("/Login",login);
router.post("/createUser",register);
 
router.get('/test',(req,res)=>
res.send({"name":"ahmed",age:33})
);
module.exports=router;