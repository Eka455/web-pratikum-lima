function login() {
    username = document.getElementById("user").Value;
    password = document.getElementById("pass").value;

    if (username == "" || paswword == ""){
        alert("login Gagal, username & paswword Salah");
        return false
    }
    else if (username == "Eka1933" && password == "persib1933"){
        alert("login sukses !!!");
        window.location= "loginsukses.html";
        return false
    }
    else{
        alert("login Gagal, username & paswword Salah.");
    }
}