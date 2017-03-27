const { Router }= require('express');
const path = require('path');

const homeRouter =  Router();


homeRouter.get('/home',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../public','index.html'));
})

module.exports = homeRouter;
