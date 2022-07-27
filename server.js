const { response } = require('express');
const express = require('express');
const path = require('path');
//const { send } = require('process');

const app = express();

app.use(express.json());



app.use(express.static(path.join(__dirname, 'client')))
    .get('/', (request, response) => response.render('index.html'));


    const productList=[
        {
            id:'1',
            name:'wooden bed',
            price: '39,999',
            originalPrice: '59,999',
            image:'bed4.webp',
        },
        {
            id:'2',
            name:' king wooden bed ',
            price: '49,999',
            originalPrice: '69,999',
            image:'bed3.webp',
        },
        {
            id:'3',
            name:' queen wooden bed ',
            price: '29,999',
            originalPrice: '49,999',
            image:'bed1.webp',
        },
        {
            id:'4',
            name:' queen wooden bed ',
            price: '25,999',
            originalPrice: '49,999',
            image:'bed6.jpg',
        },
        {
            id:'5',
            name:' Teak wooden bed ',
            price: '45,999',
            originalPrice: '49,999',
            image:'bed5.webp',
        },
        {
            id:'6',
            name:' Teak wooden bed ',
            price: '12,999',
            originalPrice: '19,999',
            image:'bed7.jpg',
        },
        {
            id:'7',
            name:'  wooden bed ',
            price: '25,999',
            originalPrice: '39,999',
            image:'bed2.webp',
        },
        {
            id:'5',
            name:' Teak wooden bed ',
            price: '45,999',
            originalPrice: '49,999',
            image:'bed5.webp',
        },
    ];

    app.get('/getProductList',(request,response)=>{
        response.send(productList);
        
    });

    app.post('/gettingProduct',(request,response)=>{
        const product=request.body;
        console.log(productList.length);
        productList.push(product);
        response.send({msg:'product added successfully'})
    });

    let cart = [];

    app.get('/getCart',(request, response)=>{
      
        response.send(cart);
    });

    app.post('/addToCart', (request, response) =>{
        const cartItem = request.body;
        // if item not present in cart make quantity =1
        // if item already present in cart increase quantity by 1
        let itemPresent=true;
        let quantity=[];

        for(i=0;i<productList.length;i++){
            if(productList[i].id!==cartItem.id){
                itemPresent=false;
                //console.log('item not Present')
            }
            cart.push(cartItem);

            if(itemPresent===true){
            //response.send={msg:'item Already Present'}
            if(quantity[productList[i]]){
                quantity[productList[i]]+=1;
            }
            cart.push(quantity);
        }   
        else
        }

       // cart.push(cartItem);
        response.send({msg: 'Item added to cart'});
        });

    
        // delete cart items

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


