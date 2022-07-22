const express = require('express');
const path = require('path');
//const { send } = require('process');

const app = express();

app.use(express.json());



app.use(express.static(path.join(__dirname, 'client')))
    .get('/', (request, response) => response.render('index.html'));



    const cart = [];

    app.get('/getCart',(request, response)=>{
      
        response.send(cart);
    });

    app.post('/addToCart', (request, response) =>{
        const cartItem = request.body;

        cart.push(cartItem);
        response.send({msg: 'Item added to cart'});
        });


    app.delete('/cartDelete',(request,response)=>{
        //const name=request.body.name;
        const name=request.body;
       // const newCart=cart.filter((x)=>x.newCart=name);
       var found=cart.find(x=>(x.name===name))
       if(found.length>0){
        response.send(found[0])
       }
       else{
        response.send('not found similar')
       }
    //     cart=newCart;
    //     response.send({msg: 'Item removed to cart'});
    //    }
    });



app.listen(4000,function(){
        console.log('Server is running on port 4000')
    });


