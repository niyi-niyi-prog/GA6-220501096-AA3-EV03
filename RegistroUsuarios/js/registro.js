document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const Apellido = document.getElementById('Apellido').value;
    const documento = document.getElementById('documento').value;
    const cuenta = document.getElementById('cuenta').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log('Registro exitoso:', { nombre, Apellido,documento, cuenta, contrasena });

   Swal.fire("¡Registro exitoso! Tu cuenta ha sido creada");
    
    this.reset();
    window.location.href = "../index.html";

});