const { Router } = require('express');
const path = require('path');

const eggRouter = Router();
const requestedTime = new Date();
console.log(requestedTime)
eggRouter.get('/see-our-eggs',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../public','eggs.html'))
  console.log(`You found the Easter Egg at ${requestedTime.toISOString()} GMT-0500 (CDT)`)

   console.log(`
                      ,ggadddd8888888bbbbaaa,_
                 ,ad888,       Y88,       Y888baa,
               ,dP"  "Y8b,       "Y8b,       "Y8888ba,
              ,88      "Y88b,       "Y8ba,        "Y88Ya,
             ,P88b,       "Y88b,        "Y8ba,_       ""8a,
            ,P'"Y88b,        "Y88b,         "Y8ba,_       Ya,
            8'    "Y88b,        ""Y8ba,         ""Y8ba,_    8,
            8b       "Y88b,         ""Y8ba,_         ""Y88baaY
            88b,        "Y88ba,         ""Y88ba,_          ""P
            8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
             b,"Y88ba,         ""Y88baa,_         """Y888bd"
              b,  "Y88ba,_         ""Y888baa,_         ,8"
               8,    ""Y88ba,_          """Y8888baaaaaP"
                Ya,      ""Y888ba,_            "d88P"
                  "Yb,,_      ""Y888baa,__,,adP""
                      """YYYY8888888PPPP"""'`)
});

module.exports = eggRouter;
