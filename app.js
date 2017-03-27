'use strict';

const express = require('express');
const app = express();
const routes = require('./routes');

app.use(routes);

app.use((req,res)=>{
  res.send('404 not found');
})
app.listen(8080)
