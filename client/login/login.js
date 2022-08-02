//const { response } = require("express");

function Login(){
    const userid=document.getElementById('userid').value;
    const password=document.getElementById('password').value;
    
    if(!userid || ! password){
        alert("please enter userid and password");
    } else{
        //send data to server and wait for response

        const user={
            email:userid,
            password:password,
        };
        const reqObject={
            method:'POST',
            headers:{'Content-type': "application/json"},
            body:JSON.stringify(user)
        };
        const loginPromise=fetch('http://localhost:4000/loginFeature',reqObject);
        loginPromise.then(response=>response.json())
        .then(result => {
            if(result.loginSuccess === false) {
                alert('login fail');
            }
            else{
                sessionStorage.setItem('login', true);
                sessionStorage.setItem('userid', result.userid);
                
                window.location.href='http://localhost:4000/cart/cart.html';
            }
        });  
    }
}