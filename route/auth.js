const express=require('express');
const {login,register,getUserById,updateUserProfile}=require('../controller/auth');
const { verifyToken } = require('../controller/auth');
const { getUserByToken } = require('../controller/auth');
const router=express.Router();

router.post("/Login",login);
router.post("/createUser",register);
router.get("/getOneUserById/:id",getUserById);
router.put("/UpdateOneUserById/:id",updateUserProfile);

 
router.get('/test',(req,res)=>
res.send({"name":"ahmed",age:33})
);
module.exports=router;