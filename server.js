const express = require('express');
const path = require('path');
//const { send } = require('process');

const app = express();

app.use(express.json());



app.use(express.static(path.join(__dirname, 'client')))
    .get('/', (request, response) => response.render('index.html'));



    let cart = [];

    app.get('/getCart',(request, response)=>{
      
        response.send(cart);
    });

    app.post('/addToCart', (request, response) =>{
        const cartItem = request.body;

        cart.push(cartItem);
        response.send({msg: 'Item added to cart'});
        });


    app.delete('/cartDelete',(request,response)=>{
        // const name=request.body; 
        console.log("request.body", request.body);

        const filteredCard = cart.filter(c => c.id !== parseInt(request.body.id));
       console.log('filteredCard ', filteredCard);
        cart = filteredCard;
        response.send({msg: 'Item deleted'});
    });



app.listen(4000,function(){
        console.log('Server is running on port 4000')
    });


