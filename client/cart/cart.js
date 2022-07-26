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
        const cartGrid=document.createElement('div');
        cartGrid.setAttribute('class','cart-grid');

        const img = document.createElement('img');
        img.src=`../image/${item.image}`;

        cartGrid.appendChild(img);


        const detailDiv=document.createElement('div');

        const detailDiv1 = document.createElement('h1');
        detailDiv1.setAttribute('class','cart-item-name');
        detailDiv1.innerText=item.productName;


        const PriceDiv= document.createElement('div');
        PriceDiv.setAttribute('class','cart-item-price');
        PriceDiv.innerText=item.originalPrice;

        const discountPriceDiv=document.createElement('div');
        discountPriceDiv.setAttribute('class', 'cart-item-d-price');
        discountPriceDiv.innerText=item.price;

        const deletebtn=document.createElement('button');
        deletebtn.innerText='Remove';
        deletebtn.onclick=deleteItemFromCart;
        deletebtn.appendChild(discountPriceDiv);

        // detailDiv.appendChild(detailDiv1);
        // detailDiv.appendChild(PriceDiv);
        // detailDiv.appendChild(discountPriceDiv);
        // cartGrid.appendChild(detailDiv);

        discountPriceDiv.appendChild(PriceDiv);
        PriceDiv.appendChild(detailDiv1);
        detailDiv1.appendChild(detailDiv);
        detailDiv.appendChild(cartGrid);


        cartParentDiv.appendChild(cartGrid);

    });

}
// getkart();
//////////////////////////////
        // const imgCart=document.createElement('div');
        // imgCart.setAttribute('class', 'imgcart');
        //     const div = document.createElement('div');
        //     const h1 = document.createElement('h1');
        //     const h2 = document.createElement('h2');
        //     const h3 = document.createElement('h3');
        //     const img = document.createElement('img');
        //     img.src = `../image/${item.img}`;

        //     cartParentDiv.appendChild(img);

        // var deletebtn = document.createElement('button');
        // deletebtn.setAttribute('data-id', item.id);
        // deletebtn.innerText = 'Remove-Item';
        // deletebtn.onclick = deleteItemFromCart;

        // // const id=document.createElement('id')

        // h1.innerText = item.productName;
        // h2.innerText = item.id;
        // h3.innerText = item.price;
        // div.append(h1);
        // div.append(h2);
        // div.append(h3);
        // div.append(deletebtn);
        // // id.innerText=item.id;
        // // div.append(id);

        
        // cartParentDiv.appendChild(div);
//     });



// }



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