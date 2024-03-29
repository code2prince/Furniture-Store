const { response } = require('express');
const express = require('express');
const path = require('path');
//const { send } = require('process');

const app = express();

app.use(express.json());



app.use(express.static(path.join(__dirname, 'client')))
    .get('/', (request, response) => response.render('index.html'));


const productList = [
    {
        id: '1',
        name: 'wooden bed',
        price: '39999',
        originalPrice: '59,999',
        image: 'bed4.webp',
    },
    {
        id: '2',
        name: ' king wooden bed ',
        price: '49999',
        originalPrice: '69,999',
        image: 'bed3.webp',
    },
    {
        id: '3',
        name: ' queen wooden bed ',
        price: '29999',
        originalPrice: '49,999',
        image: 'bed1.webp',
    },
    {
        id: '4',
        name: ' queen wooden bed ',
        price: '25999',
        originalPrice: '49,999',
        image: 'bed6.jpg',
    },
    {
        id: '5',
        name: ' Teak wooden bed ',
        price: '45999',
        originalPrice: '49,999',
        image: 'bed5.webp',
    },
    {
        id: '6',
        name: ' Teak wooden bed ',
        price: '12999',
        originalPrice: '19,999',
        image: 'bed7.jpg',
    },
    {
        id: '7',
        name: '  wooden bed ',
        price: '25999',
        originalPrice: '39,999',
        image: 'bed2.webp',
    },
    {
        id: '8',
        name: ' Teak wooden bed ',
        price: '45999',
        originalPrice: '49,999',
        image: 'bed5.webp',
    },
    {
        id: '9',
        name: 'Royal 4 chair Dinning ',
        price: '39999',
        originalPrice: '49,999',
        image: 'dinning1.jpg',
    },
    {
        id: '10',
        name: ' Dinning 6 chairs ',
        price: '29999',
        originalPrice: '49,999',
        image: 'dinning2.webp',
    },
    {
        id: '11',
        name: ' Dinning 4 seater ',
        price: '19999',
        originalPrice: '29,999',
        image: 'dinning.jpg',
    },
    {
        id: '12',
        name: ' Grand Dinning 10 seater ',
        price: '45999',
        originalPrice: '69,999',
        image: 'dinning4.jpg',
    },

];

app.get('/getProductList', (request, response) => {
    response.send(productList);

});

app.post('/gettingProduct', (request, response) => {
    const product = request.body;
    console.log(productList.length);
    productList.push(product);
    response.send({ msg: 'product added successfully' })
});

let cart = [];


app.get('/getCart', (request, response) => {

    let total=0;
    for(i=0; i<cart.length; i++){
        
        const totalPrice= parseInt(cart[i].price)*cart[i].qty;
        total+=totalPrice;
       
        }
        console.log("total:" ,total);
    response.send(cart);
});


app.post('/addToCart', (request, response) => {
    const cartItem = request.body;
    // if item not present in cart make quantity =1
    // if item already present in cart increase quantity by 1
    let index = -1;

    for (i = 0; i < cart.length; i++) {
        if (cart[i].id === cartItem.id) {
            index = i;
            //console.log('item not Present')
        }
    }
    if(index !== -1) {
        cart[index].qty =  cart[index].qty +1;
    } else {
        var cartWithQty = {
            id: cartItem.id,
            name: cartItem.productName,
            price: cartItem.price,
            img: cartItem.img,
            originalPrice: cartItem.originalPrice,
            qty: 1
        }
        cart.push(cartWithQty);
    }

    response.send(cart);
});


// delete cart items

app.delete('/cartDelete', (request, response) => {
    //const name=request.body; 
    console.log("request.body", request.body);

    const filteredCard = cart.filter(c => c.id !== request.body.id);
    console.log('filteredCard ', filteredCard);
    cart = filteredCard;
    response.send({ msg: 'Item deleted' });
});


app.put('/reduceItem',(request,response)=>{
    const prodIDObj = request.body;
    
    const updatedCart = cart.map(item => {
        if(item.id === prodIDObj.id) {
            return {
                ...item,
                qty: item.qty - 1,
            }
        } 
        return item;
    }).filter(a => a.qty !== 0)
    

    cart = updatedCart;
    response.send({msg:'item reduced'})

});
app.put('/increaseItem',(request,response)=>{
    const prodIDObj = request.body;
    
    const updatedCart = cart.map(item => {
        if(item.id === prodIDObj.id) {
            return {
                ...item,
                qty: item.qty + 1,
            }
        } 
        return item;
    });

    console.log(updatedCart);

    cart = updatedCart;
    
    response.send({msg:'item increased'})

});

const AddressList=[
    {id: 1,   useremail:  "prince@gmail.com", address: 'chennai'},
    {id: 2,   useremail:  "prince@gmail.com", address: 'siwan'}
];

app.post('/customerAddress', (req,res)=>{
    const add= req.body;
    AddressList.push(add);
    res.send({msg:'address sucessfully recieved'});
});

// const paymentList=[];

// app.get('/getPayment', (req,res)=>{
//     res.send(paymentList);
// });

const userList = [
    {
        email: "prince@gmail.com",
        mobile: "8873091666",
        name: "Prince Sharma",
        password: "12345",
    },

    {
        email: "raj@gmail.com",
        mobile: "8873091777",
        name: "Rajeev Sharma",
        password: "12345",
       
    },
    {
        email: "amit@gmail.com",
        mobile: "8873091888",
        name: "amit SHARMA",
        password: "12345",
       
    },
];
// signup

app.get('/getUserlist', (req, res) => {
    res.send(userList);
});

app.post('/signUpUser', (req, res) => {
    const user = req.body;
    console.log(userList.length);
    let userExist = false;
    for (i = 0; i < userList.length; i++) {
        if (userList[i].email === user.email) {
            userExist = true;
            console.log('user exist');
        }
        
    }
    if (userExist === true) {
         const response={
            msg: 'User already exist, please try with another email account',
            isRegistered: false,
         }
         res.send(response);
    }
    else {
        userList.push(user);
        const response = { msg: 'User successfully added' , isRegistered: true, userid:user.email};
        res.send(response);
    }

});



//Login

app.get('/getLogin',(req,res)=>{

    var userLogin=false;
  
    ////logic////
    if(userLogin === true) {
        res.send({userLogin:true })
    } else 
        res.send({userLogin:false})
    
    
});

app.post('/loginFeature', (req, res) => {
    const user = req.body;

    var loginSuccess = false;
    for(var i=0; i<userList.length; i++) {
        if(userList[i].email === user.email  && userList[i].password === user.password ){
            loginSuccess = true;
        } 
    }
    if(loginSuccess === true) {
        res.send({loginSuccess:true ,userid:user.email})
    } else {
        res.send({loginSuccess:false})
    }
});


app.listen(4000, function () {
    console.log('Server is running on port 4000')
});




// -- create
// CREATE TABLE USER (
//   id INTEGER PRIMARY KEY,
//   email TEXT NOT NULL,
//   password TEXT NOT NULL,
//   name TEXT NOT NULL
// );

// -- insert
// INSERT INTO USER VALUES (1, 'prince@mail.com', '12345', 'Prince');
// INSERT INTO USER VALUES (2, 'amit@mail.com', '12345', 'Amit');
// INSERT INTO USER VALUES (3, 'rohit@mail.com', '12345', 'Rohit');

// SELECT * FROM USER WHERE dept = 'Sales';