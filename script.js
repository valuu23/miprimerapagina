function showAlert() {
    alert('¡Hola, esta es una alerta desde Javascript!');
}
const form = document.getElementById('myForm');
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const input = document.getElementById('email');
    const inputValue = input.value
    if (!validateEmail(inputValue)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }
  if (form) {
    form.addEventListener('submit', function(lala) {
      lala.preventDefault();
      validateForm();
    })
  }
  document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
  })