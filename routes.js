const express = require('express');
const jwt = require("jsonwebtoken");
// const jwt = require('express-jwt');
const router = express()
const feedBackTemplateCopy = require('../feedbackkbackend/models/FeedbackModels')
// import { getToken } from "./util.mjs";
const getToken = (user) => {
    return jwt.sign({
      _id: user._id,
      firstname: user.firstname,
      email: user.email,
    }, process.env.JWT_SIGNIN_KEY,{
        expiresIn: '48h'
    });
  };

router.post('/signup',(request,response)=>{
    console.log(request.body);
    const {firstname, lastname, dob, email, number, objective, service, specification, experience, location, pswrd, cpswrd}=request.body;
    feedBackTemplateCopy.findOne({email}).exec((err,user)=>{
       if(user){
           console.log("User with this email exists");
           return response.json({err: "User with this email exists"});
       }
       let newUser = new feedBackTemplateCopy({firstname, lastname, dob, email, number, objective, service, specification, experience, location, pswrd, cpswrd});
       newUser.save((err,success)=>{
           if(err){
               console.log("Error in SIgnup : ",err);
               return response.status(400), json({error : err})
           }
           response.json({
               message: "Signup SUccess!"
           })
       });
    })
})

router.get('/getdata',async(req,res,next)=>{
  let newfeed=await feedBackTemplateCopy.find();
  if(newfeed!==""){
    res.send(newfeed)
  }else{
    res.send("error");
  }
 
})
router.post('/signin', async (req,res) =>{
    const signinUser = await feedBackTemplateCopy.findOne({
      email: req.body.email,
      pswrd: req.body.pswrd
    });
    if(signinUser){
       
      res.send({
        _id: signinUser.id,
        firstname: signinUser.firstname,
        email: signinUser.email,
        token: getToken(signinUser)
      ,msg:'welcome',responsecode:"200"});
    }
    else{

      res.send({msg:'Invalid Email or Password.',responsecode:"401"});
    }
  })
  

   module.exports=router;