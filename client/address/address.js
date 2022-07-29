//const { response } = require("express");

function saveForm() {
    const name= document.getElementById('name').value;
    const mobile=document.getElementById('mobile').value;
    const alternate=document.getElementById('alternate').value;
    const pincode=document.getElementById('pincode').value;
    const address=document.getElementById('address').value;
    const city=document.getElementById('city').value;
    const state=document.getElementById('state').value;
    const landmark=document.getElementById('landmark').value;

    var radioButton= document.querySelectorAll('input[name=addressType]');
    var selectedAddressType;
    for(var rd of radioButton){
        if(rd.checked){
            selectedAddressType=rd.value;
            break;
        }
    }

    const add={
        name:name,
        mobile:mobile,
        alternate:alternate,
        pincode:pincode,
        address:address,
        city:city,
        state:state,
        landmark:landmark,
        addresstype:selectedAddressType,

    };

    const reqObject={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(add)
    };

    const addPromise=fetch('http://localhost:4000/customerAddress',reqObject)
    addPromise.then(response=>response.json()).then (result=>
    console.log('after post call succed',result));

    if(name && mobile && address){
        console.log('customer address', name,mobile,alternate,pincode,address,city,state,landmark,selectedAddressType);

        window.location.href ="http://localhost:4000/payment/payment.html";
    }else{
        alert('Please provide full Address Details');
    }
 
   

}




