document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("regBtn").addEventListener("click", function(){
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let verificador = true;
        if (email == ""){
            verificador = false;
            alert("Ingresa tu e-mail.");
        }
        if (password == ""){
            verificador = false;
            alert("Ingresa tu contraseña.");
        }
        if (verificador){
            window.location = "portada.html";
        }
    })
})

