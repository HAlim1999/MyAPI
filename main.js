const express = require('express');
const productos = require('./productos.js');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', productos)

// app.use('/', express.static(__dirname +'/assets'))

app.listen(8080, ()=>{
  console.log('server iniciado'); 
})
 