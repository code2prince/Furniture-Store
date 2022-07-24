// const { response } = require("express");



// const { response } = require("express");

// const strigifiedCard = sessionStorage.getItem('cart');
// const cartFromSession = JSON.parse(strigifiedCard);

// const cart = cartFromSession.length > 0 ? cartFromSession : [];


function createProduct(){
    const name=document.getElementById('name').value;
    const id=document.getElementById('id').value;
    const price=document.getElementById('price').value;
    //const image=document.getElementById('image').value;

    const product={
        name:name,
        id:id,
        price:price,
    };
    const reqObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };
    const promise=fetch('http://localhost:4000/gettingProduct',reqObject)
    promise.then(response=>response.json()).then(result=>{
        console.log('after post call success ,send product data to server',result);
    //alert( 'added');
    
});
}
//createProduct();











function getProduct(){
    fetch ('http://localhost:4000/getProductList')
    .then(response=>response.json())
    .then(result=>{
       displayProducts(result);
    });

}

function displayProducts(productList){
    var whereToDisplayItem= document.getElementById('product-list-container');
    whereToDisplayItem.innerHTML='';

    // productList.forEach(productitem => {
    //     const div = document.createElement('div');
    //     const h1 = document.createElement('h1');
    //     const h2 = document.createElement('h2');
    //     const h3 = document.createElement('h3');


    // h1.innerText = productitem.productName;
    // h2.innerText = productitem.id;
    // h3.innerText = productitem.price;
    // div.append(h1);
    // div.append(h2);
    // div.append(h3);
    for(var i=0; i<productList.length;i++){
        var id=document.createElement('div');
        id.innerText=productList[i].id;  
        
        var name=document.createElement('div');
        name.innerText=productList[i].name;  

        var price=document.createElement('div');
        price.innerText=productList[i].price;  

        // var image=document.createElement('div');
        // image.innerText=productList[i].image;  

        var productDiv=document.createElement('div');
        productDiv.setAttribute('id', 'product-list-container');

        productDiv.appendChild(id);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
        // productRow.appendChild(image);

    
    whereToDisplayItem.appendChild(productDiv);
}

}
getProduct();


function add2cart(name, id,price) {  
    
    const item = {
        id: id,
        productName: name,
        price:price,
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

