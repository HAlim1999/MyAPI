const express = require('express')
const {Router} = express;
const router = Router();

const productos = [{"title":"Escuadra","price":123.45,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png","id":1}];



/*------------------*/
router.get('/productos', (req, res) =>{
    res.send(productos)
});


/*------------------*/
router.get('/productos/:id', (req, res) =>{
    const {id} = req.params;
    const producto = productos.find((producto) => producto.id == id);

    if(isNaN(parseInt(id))){
        res.status(404).send({error: true, message: 'Invalid id'});
    }else if(producto){
        res.send(producto)
    }else{
        res.send({message: 'Id not found'});        
    }
  });



/*------------------*/
  router.post('/productos', (req, res)=>{
    const {title,price,thumbnail} = req.body;
    const id = productos.length +1;
    productos.push({title,price, thumbnail,id});
    res.send({agregado: {title,price,thumbnail,id}});
});


/*------------------*/
router.put('/productos/:id', (req, res)=>{
    const {id} = req.params;
    const {title,price,thumbnail} = req.body;
    const index = productos.findIndex(producto => producto.id == id);

    if(title && price && thumbnail){
        if(index >= 0){
            productos[index].title = title;
            productos[index].price = price;
            productos[index].thumbnail = thumbnail;
            }
    }
    res.send(productos)
});


/*------------------*/

  router.delete('/productos/:id', (req, res) =>{
    const {id} = req.params;
    const producto = productos.find((producto) => producto.id == id);
    let index = productos.indexOf(producto);
    productos.splice(index, 1);

    if(isNaN(parseInt(id))){
        res.status(404).send({error: true, message: 'Invalid id'});
    }else if(producto){
        res.send(producto)
    }else{
        res.send({message: 'Id not found'});        
    }
  });

  module.exports = router;