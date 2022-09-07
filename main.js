const express = require('express');
const app = express();
const productos = require('./productos');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', productos)

app.use("/", express.static(__dirname +"/assets"))

app.listen(8080, ()=>{
  console.log('server iniciado'); 
})
 

