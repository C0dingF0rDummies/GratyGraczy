function register() {
    event.preventDefault();
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;


    if (email == "") {
        alert("Email required.");
        return;
    }
    else if (password == "") {
        alert("Password required.");
        return;
    }
    else if (passwordRetype == "") {
        alert("Password required.");
        return;
    }
    else if (password != passwordRetype) {
        alert("Password don't match retype your Password.");
        return;
    }
    else {
        alert(email + "  Thanks for registration. \nTry to login Now");
        var nazwa = document.getElementById("re").value;
        var haslo = document.getElementById("rrp").value;
        localStorage.setItem("nazwa", nazwa)
        localStorage.setItem("haslo", haslo)
        document.getElementById("re").value = "";
        document.getElementById("rp").value = "";
        document.getElementById("rrp").value = "";
        document.getElementById("sname").value = "";
        document.getElementById("fname").value = "";
        window.location.assign("./login.html");
    }
}
function login() {
    event.preventDefault();
    let nazwa2 = localStorage.getItem("nazwa")
    let haslo2 = localStorage.getItem("haslo")
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    if (email != nazwa2) {
        if (email == "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        return;
    }
    else if (password != haslo2) {
        if (password == "") {
            alert("Password required.");
            return;
        }
        alert("Password does not match.");
        return;
    }
    else{
        alert(email + " yor are logged in now \n welcome to our website.");
        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
        window.location.assign("./projektHTML.html");
        localStorage.setItem("stan", 1);
        return;
    }
}
function forgot() {
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        return;
    }

    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value = "";
}
