const submitForm = document.querySelector(".service-booking-form");
const submitButton = document.querySelector(".service-form-button");

submitForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    showMessage("Ваша заявка прийнята");
    submitForm.reset();
  }
});

function validateForm() {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");

  if (nameInput.value.trim() === "") {
    alert("Будь ласка, введіть ваше ім'я");
    return false;
  }

  if (phoneInput.value.trim() === "") {
    alert("Будь ласка, введіть ваш телефон");
    return false;
  }

  return true;
}

function showMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message");

  const container = document.querySelector(".service-booking-section");
  container.appendChild(messageElement);

  setTimeout(function () {
    messageElement.remove();
  }, 4000);
}
