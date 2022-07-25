// const { response } = require("express");



// const { response } = require("express");

// const strigifiedCard = sessionStorage.getItem('cart');
// const cartFromSession = JSON.parse(strigifiedCard);

// const cart = cartFromSession.length > 0 ? cartFromSession : [];



function createProduct() {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const price = document.getElementById('price').value;
    //const image=document.getElementById('image').value;

    const product = {
        name: name,
        id: id,
        price: price,
    };
    const reqObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };
    const promise = fetch('http://localhost:4000/gettingProduct', reqObject)
    promise.then(response => response.json()).then(result => {
        console.log('after post call success ,send product data to server', result);
        //alert( 'added');

    });
}




function getProduct() {
    fetch('http://localhost:4000/getProductList')
        .then(response => response.json())
        .then(result => {
            productList = result;
            //  console.log(result);
            displayProducts(productList);
        });

}

function displayProducts(productList) {
    var whereToDisplayItem = document.getElementById('product-list-container');
    whereToDisplayItem.innerHTML = '';

    productList.forEach(productitem => {
        
        const productItem = document.createElement('div');
        productItem.setAttribute('class', 'product-item');

        const prodImg = document.createElement('div');
        prodImg.setAttribute('class', 'prod-img');
        const bed = document.createElement('div');
        bed.setAttribute('class', 'bed');
        const img = document.createElement('img');
        img.src=`../image/${productitem.image}`;
        bed.appendChild(img);
        prodImg.appendChild(bed);
        productItem.appendChild(prodImg)


        const prodDetail = document.createElement('div');
        prodImg.setAttribute('class', 'prod-detail');

        const linkWrapper = document.createElement('div');
        const span = document.createElement('span');
        span.innerText = productitem.name;
        linkWrapper.appendChild(span);
        prodDetail.appendChild(linkWrapper);

        const originalPriceDiv = document.createElement('div');
        const originalPriceSpan = document.createElement('span');
        originalPriceSpan.setAttribute('class', 'original-price');
        originalPriceDiv.appendChild(originalPriceSpan);
        prodDetail.appendChild(originalPriceDiv)

        const discountPriceDiv = document.createElement('div');
        const discountPriceSpan = document.createElement('span');
        discountPriceDiv.appendChild(discountPriceSpan);
        prodDetail.appendChild(discountPriceDiv)

        const iconDiv = document.createElement('div');
    
        const iconTag1 = document.createElement('i');
        iconTag1.setAttribute('class', 'fa fa-star');
        const iconTag2 = document.createElement('i');
        iconTag2.setAttribute('class', 'fa fa-star');
        const iconTag3 = document.createElement('i');
        iconTag3.setAttribute('class', 'fa fa-star');
        const iconTag4 = document.createElement('i');
        iconTag4.setAttribute('class', 'fa fa-star');
        const iconTag5 = document.createElement('i');
        iconTag5.setAttribute('class', 'fa fa-star');

        iconDiv.appendChild(iconTag1);
        iconDiv.appendChild(iconTag2);
        iconDiv.appendChild(iconTag3);
        iconDiv.appendChild(iconTag4);
        iconDiv.appendChild(iconTag5);


        /**/
        // create div block and append to product-detail
        /**/

        prodDetail.appendChild(iconDiv);
        productItem.appendChild(prodDetail);


       
        

        whereToDisplayItem.appendChild(productItem);
    });

    //     for(var i=0; i<productList.length;i++){
    //         var id=document.createElement('div');
    //         id.innerText=productList[i].id;  

    //         var name=document.createElement('div');
    //         name.innerText=productList[i].name;  

    //         var price=document.createElement('div');
    //         price.innerText=productList[i].price;  

    //         // var image=document.createElement('div');
    //         // image.innerText=productList[i].image;  

    //         var productDiv=document.createElement('div');
    //         productDiv.setAttribute('id', 'product-list-container');

    //         productDiv.appendChild(id);
    //         productDiv.appendChild(name);
    //         productDiv.appendChild(price);
    //         // productDiv.appendChild(image);


    //     whereToDisplayItem.appendChild(productDiv);
    // }

}
getProduct();
// createProduct();










function add2cart(name, id, price) {

    const item = {
        id: id,
        productName: name,
        price: price,
    };

    //     cart.push(item);
    //    console.log('Current cart items >>> ', cart);

    //    // this is testing througn local Storage
    //    const stringifiedCart = JSON.stringify(cart);
    //    sessionStorage.setItem('cart', stringifiedCart);
    //    alert(name +' added to cart');


    // real implementation through server
    // >>>>> call '/addtocart api and send cart data to server

    const requestObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    };
    const productPromise = fetch('http://localhost:4000/addToCart', requestObject)
    productPromise.then(response => response.json()).then(result =>
        console.log('after post call success ,send cart data to server', result));
    alert(name + 'added to cart');


}

//add2cart(name,id);

