const strigifiedCard = sessionStorage.getItem('cart');
const cartFromSession = JSON.parse(strigifiedCard);

const cart = cartFromSession.length > 0 ? cartFromSession : [];

function add2cart(name, id) {  
    const item = {
        id: id,
        productName: name,
    };

   cart.push(item);
   console.log('Current cart items >>> ', cart);

   // this is testing througn local Storage
   const stringifiedCart = JSON.stringify(cart);
   sessionStorage.setItem('cart', stringifiedCart);
   alert(name +' added to cart');

   
   // real implementation through server
   // >>>>> call '/addtocart api and send cart data to server
   
   

   
};

