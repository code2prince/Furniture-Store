let userList = [];
function createUser() {
    const name = document.getElementById('name').value;
    const userid = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;


    const passwordMatched = password === confirmPassword;

    if (!userid || !password) {
        alert('Please enter Email and Password');
        return;
    }

    if (!passwordMatched) {
        alert("Your Password and Confirm-Password doesn't match");
        return;
    }

    const user = {
        name: name,
        email: userid,
        mobile: mobile,
        password: password,
    };

    const reqObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    const userPromise = fetch('http://localhost:3000/signUpUser', reqObject)
    userPromise.then(response => response.json()).then(result => {

        if (result.isRegistered === true) {
            alert("you are successfully Registered ");
        }
        else {
            alert(result.msg);
        }
    });
}