const express = require('express');
const path = require('path');
//const { send } = require('process');

const app = express();

app.use(express.json());



app.use(express.static(path.join(__dirname, 'client')))
    .get('/', (request, response) => response.render('index.html'));



    const cart = [];


    app.post('/addToCart', (request, response) =>{
        const cartItem = request.body;

        cart.push(cartItem);
        response.send({msg: 'Item added to cart'});
        
    });

    app.post('/getCart',(request, response)=>{
      
        response.send(cart);
    });

    
    // app.get('/getCart',(request, response)=>{
      
    //     response.send(cart);
    // });

    // app.post('/getCart',(request, response)=>{
    //     const carts=request.body;
    //     cart.push(carts);
      
    //     response.send(cart);
    // });
    

app.listen(4000,function(){
        console.log('Server is running on port 4000')
    });


