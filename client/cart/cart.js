function getkart() {
    fetch("http://localhost:4000/getCart")
        .then(response => response.json())
        .then(result => {
            displayCart(result)
        });

}

function displayCart(cart) {

    cart.forEach(item => {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2=document.createElement('h2');
        const h3=document.createElement('h3');
       // const id=document.createElement('id')

        h1.innerText = item.productName;
        h2.innerText=item.id;
        h3.innerText=item.price;
        div.append(h1);
        div.append(h2);
        div.append(h3);
        // id.innerText=item.id;
        // div.append(id);

        const cartParentDiv = document.getElementById('cart-items');
        cartParentDiv.appendChild(div);
    });
}

function deleteItemFromCart(name){
    const id={
        name:name,
    };
    const requestObject={
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(id)
   };
   const productPromise= fetch('http://localhost:4000/cartDelete',requestObject)
   productPromise.then(response=> response.json()).then(result=>
    console.log('after delete call success , delete cart data from server',result));
    //alert(result.msg);
    };
    deleteItemFromCart(name);

getkart();