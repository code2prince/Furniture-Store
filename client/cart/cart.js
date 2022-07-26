function getkart() {
    fetch("http://localhost:4000/getCart")
        .then(response => response.json())
        .then(result => {
            debugger;
            displayCart(result)
        });

}

function displayCart(cart) {
    const cartParentDiv = document.getElementById('cart-items');
    cartParentDiv.innerHTML = '';

    cart.forEach(item => {

    //     const cartFrame=document.createElement('div');
    //     cartFrame.setAttribute('class',cart-frame);

    //     const imgCart=document.createElement('div');
    //     imgCart.setAttribute('class', 'imgcart');

    //         const h1 = document.createElement('h1');
    //         const h2 = document.createElement('h2');
    //         const h3 = document.createElement('h3');

    //     const img=document.createElement('img');
    //     img.src=`../image/${item.img}`;

    //     cartParentDiv.appendChild(img);

    //     var deletebtn = document.createElement('button');
    //     deletebtn.setAttribute('data-id', item.id);
    //     deletebtn.innerText = 'Remove-Item';
    //     deletebtn.onclick = deleteItemFromCart;


    //     h1.innerText = item.productName;
    //     h2.innerText = item.id;
    //     h3.innerText = item.price;
    //     div.append(h1);
    //     div.append(h2);
    //     div.append(h3);
    //     div.append(deletebtn);

    //     cartParentDiv.appendChild(div);
    // });



        const imgCart=document.createElement('div');
        imgCart.setAttribute('class', 'imgcart');
            const div = document.createElement('div');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');
            const img = document.createElement('img');
            img.src = `../image/${item.img}`;

            cartParentDiv.appendChild(img);

        var deletebtn = document.createElement('button');
        deletebtn.setAttribute('data-id', item.id);
        deletebtn.innerText = 'Remove-Item';
        deletebtn.onclick = deleteItemFromCart;

        // const id=document.createElement('id')

        h1.innerText = item.productName;
        h2.innerText = item.id;
        h3.innerText = item.price;
        div.append(h1);
        div.append(h2);
        div.append(h3);
        div.append(deletebtn);
        // id.innerText=item.id;
        // div.append(id);

        
        cartParentDiv.appendChild(div);
    });



}



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