(function getCart() {
    const strigifiedCard = sessionStorage.getItem('cart');
    const cart = JSON.parse(strigifiedCard);

    console.log('Cart ', cart);
    displayCart(cart);
})();


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

