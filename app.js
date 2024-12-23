let form = document.getElementById("form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let message = document.getElementById("message");

// Initialize toast on page load
// let toastEl = document.querySelector('.toast');
// let toast = new bootstrap.Toast(toastEl, {
//     animation: true,
//     autohide: true,
//     delay: 3000
// });

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!firstName.value || !lastName.value || !email.value || !message.value) {
        showPopup("Please fill all fields");
        return;
    }
    else {
        showPopup(`Message sent!
             Thanks for completing the form. We'll be in touch soon!`)
    }


 });

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, true)
    })
  })()


  function showPopup(message) {
    const popup = document.getElementById("popupMessage");
    const popupText = document.getElementById("popupText");

    popupText.textContent = message;
    popup.classList.remove("hidden");

    // Set timeout to automatically close the popup after 3 seconds
    setTimeout(() => {
        closePopup();
    }, 3000);
}

function closePopup() {
    const popup = document.getElementById("popupMessage");
    popup.classList.add("hidden");
}
  