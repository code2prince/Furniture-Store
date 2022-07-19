console.log("hello");
function submitForm(){
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var phone = document.getElementById('phone').value;
   var query = document.getElementById('query').value;

   const customer={
    name:name,
    email:email,
    phone:phone,
    query:query,
   };
   if(name && email && phone && query ) {
   console.log('send data to server' ,customer);
   } else {
   alert('Please provide full detail')
  }

}  