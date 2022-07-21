// const { response } = require("express");

// const strigifiedCard = sessionStorage.getItem('cart');
// const cartFromSession = JSON.parse(strigifiedCard);

// const cart = cartFromSession.length > 0 ? cartFromSession : [];

function add2cart(name, id) {  
    debugger;
    const item = {
        id: id,
        productName: name,
    };

//     cart.push(item);
//    console.log('Current cart items >>> ', cart);

//    // this is testing througn local Storage
//    const stringifiedCart = JSON.stringify(cart);
//    sessionStorage.setItem('cart', stringifiedCart);
//    alert(name +' added to cart');

   
   // real implementation through server
   // >>>>> call '/addtocart api and send cart data to server
   
   const requestObject={
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(item)
   };
   const productPromise= fetch('http://localhost:4000/addToCart',requestObject)
   productPromise.then(response=> response.json()).then(result=>
    console.log('after post call success ,send cart data to server',result));
    alert(name+ 'added to cart');

   
}
//add2cart(name,id);

