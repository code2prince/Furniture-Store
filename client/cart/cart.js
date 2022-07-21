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
        h1.innerText = item.productName;
        div.append(h1);

        const cartParentDiv = document.getElementById('cart-items');
        cartParentDiv.appendChild(div);
    });
}

getkart();