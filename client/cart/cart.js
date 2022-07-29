//const { response } = require("express");

function getkart() {
    fetch("http://localhost:4000/getCart")
        .then(response => response.json())
        .then(result => {
            displayCart(result)
        });

}

function displayCart(cart) {
    const cartParentDiv = document.getElementById('cart-item');
    cartParentDiv.innerHTML = '';

    cart.forEach(item => {

      
    //    const h1 = document.createElement('h1');
    //    h1.setAttribute('class','product-name');
    //    h1.innerText=item.productName;

    //    cartParentDiv.appendChild(h1); 
       
    //    const priceDiv=document.createElement('div');
    //    priceDiv.setAttribute('class','price');
    //    priceDiv.innerText=item.price;

    //    cartParentDiv.appendChild(priceDiv);

    //    const img = document.createElement('img');
    //    img.setAttribute('class','product-img');
    //     img.src=`../image/${item.img}`;
    //     cartParentDiv.appendChild(img);

       const cartGrid=document.createElement('div');
        cartGrid.setAttribute('class','cart-grid');

        const img = document.createElement('img');
        img.src=`../image/${item.img}`;

        cartGrid.appendChild(img);


        const detailDiv=document.createElement('div');

        const nameDiv = document.createElement('h1');
        nameDiv.setAttribute('class','cart-item-name');
        nameDiv.innerText=item.name;


        const PriceDiv= document.createElement('div');
        PriceDiv.setAttribute('class','cart-item-price');
        PriceDiv.innerText=item.price;

        const discountPriceDiv=document.createElement('div');
        discountPriceDiv.setAttribute('class', 'cart-item-d-price');
        discountPriceDiv.innerText=item.originalPrice;

        const deletebtn=document.createElement('button');
        deletebtn.innerText='Remove';
        deletebtn.onclick=deleteItemFromCart;
////////
        const quantityIconDiv=document.createElement('div');
        quantityIconDiv.setAttribute('class','quantity-icons');

        const reduceBtn=document.createElement('button');
        reduceBtn.setAttribute('class','reduce');
        reduceBtn.innerText='-';
        reduceBtn.onclick=reduce;

        const quantityBoxDiv=document.createElement('div');
        quantityBoxDiv.setAttribute('class','quantity-box');
        quantityBoxDiv.innerText=item.qty;

        const increaseBtn=document.createElement('button');
        increaseBtn.setAttribute('class','increase');
        increaseBtn.innerText='+';
        increaseBtn.onclick=increase;

       
//////

        detailDiv.appendChild(nameDiv);
        detailDiv.appendChild(PriceDiv);
        detailDiv.appendChild(discountPriceDiv);
    

        quantityIconDiv.appendChild(reduceBtn);
        quantityIconDiv.appendChild(quantityBoxDiv);
        quantityIconDiv.appendChild(increaseBtn);
        detailDiv.appendChild(quantityIconDiv);

        detailDiv.appendChild(deletebtn);
        
     
       cartGrid.appendChild(detailDiv);

        // discountPriceDiv.appendChild(PriceDiv);
        // PriceDiv.appendChild(detailDiv1);
        // detailDiv1.appendChild(detailDiv);
        // detailDiv.appendChild(cartGrid);


        cartParentDiv.appendChild(cartGrid);

    });

}

function reduce(e){
    const qty={quantity:e.target.dataset.qty};
    const requestObject={
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(qty)
    };
    const reducePromise= fetch('http://localhost:4000/reduceItem',requestObject)
    reducePromise
    .then(response=>response.json())
    .then(result=>{
        console.log(result);
        getkart();
    });
};

function increase(e){
    const qty={quantity:e.target.dataset.qty};
    const requestObject={
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(qty)
    };
    const reducePromise= fetch('http://localhost:4000/increaseItem',requestObject)
    reducePromise
    .then(response=>response.json())
    .then(result=>{
        console.log(result);
        getkart();
    });

};

function orderPlace() {
   window.location.href= 'http://localhost:4000/address/address.html';
}


// function next(){
//     //dynmically gen address form
//     // append it to target div
//     const inputBox= document.createElement('input');
//     const targetDiv=document.getElementById('address-section');
//     targetDiv.appendChild(inputBox);
  

//     const paymentBtn=document.createElement('button');
//     paymentBtn.innerText='Place Order';
//     paymentBtn.onclick=showPaymentForm;
//     targetDiv.appendChild(paymentBtn);



// };

// function showPaymentForm(){
//     const input=document.createElement('input');
//     const targetDiv=document.getElementById('payment-section');
//     targetDiv.appendChild(input);

// };

function deleteItemFromCart(e) {
    const id = {id : e.target.dataset.id};

    const requestObject = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(id)
    };
    const productPromise = fetch('http://localhost:4000/cartDelete', requestObject)
    productPromise
    .then(response => response.json())
    .then(result =>{
        // success
        console.log(result);
        debugger;
        getkart();
    });

        
};
getkart();