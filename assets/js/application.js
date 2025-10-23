document
  .getElementById("applicationForm")
  .addEventListener("submit", function (e) {
    let isValid = true;

    // First Name validation
    const firstName = document.getElementById("firstname");
    const firstNameError = document.getElementById("firstname-error");
    if (!firstName.value.trim()) {
      firstNameError.textContent = "First name must fill this";
      firstNameError.style.display = "block";
      isValid = false;
    } else {
      firstNameError.style.display = "none";
    }

    // Last Name validation
    const lastName = document.getElementById("lastname");
    const lastNameError = document.getElementById("lastname-error");
    if (!lastName.value.trim()) {
      lastNameError.textContent = "Last name must fill this";
      lastNameError.style.display = "block";
      isValid = false;
    } else {
      lastNameError.style.display = "none";
    }

    // Email validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    if (!email.value.trim()) {
      emailError.textContent = "Email must fill this";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    if (!isValid) {
      e.preventDefault();
    }
  });

// Real-time validation
document.querySelectorAll("#firstname, #lastname, #email").forEach((input) => {
  input.addEventListener("input", function () {
    const errorElement = document.getElementById(this.id + "-error");
    if (this.value.trim()) {
      errorElement.style.display = "none";
    }
  });
});
