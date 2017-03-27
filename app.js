'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 8080
app.use(routes);

app.use((req,res)=>{
  res.send('404 not found');
})
app.listen(port,()=>{
  console.log(`listening ${port}`)
})
