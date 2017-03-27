const { Router } = require('express');
const path = require('path');

const seeRouter = Router();

seeRouter.get('/see-our-chickens',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../public','see.html'));
  console.log("see-our-chickens")
});

module.exports = seeRouter;
