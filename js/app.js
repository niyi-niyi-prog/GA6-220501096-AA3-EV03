document.getElementById('loginBtn').addEventListener('click', iniciarSesion);

function iniciarSesion(event) {
    event.preventDefault(); 
    const email = document.getElementById('UserNameTB').value;
    const password = document.getElementById('PasswordTB').value;

    if (email === "usuario" && password === "123456") {
         window.location.href = "Dashboard/dashboard.html";
    } else {
        Swal.fire("Correo o contraseña incorrectos");
    }
}


function envioemail(){
    swal.fire({
        text: "Te enviaremos un correo electronico para el cambio de contraseña.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Enviar",
        cancelButtonText: "Cancelar",
        reverseButtons: true
      })
}

function registroUsuario(){
    window.location.href = "RegistroUsuarios/registrousuario.html";
}