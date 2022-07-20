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

   const stringifiedCart = JSON.stringify(cart);
   sessionStorage.setItem('cart', stringifiedCart);
   alert(name +' added to cart');
};

