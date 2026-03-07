document.getElementById("login-btn").addEventListener("click", function() {
     const userName=document.getElementById("user-name").value;
    const password=document.getElementById("input-password").value;

    if(userName=='admin' && password=='admin123'){
        window.location.assign("home.html") ;
    }else{
        alert("Invalid Username number or Password. Please try again.");
        return;
    }


});