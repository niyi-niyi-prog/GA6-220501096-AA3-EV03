document.getElementById('newEntryForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const entryDate = document.getElementById('entryDate').value;
    const entryType = document.getElementById('entryType').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;


    alert("Registro guardado exitosamente");

    window.location.href = "dashboard.html";
});
