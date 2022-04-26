window.onload = function () {
    var submitBtn = document.querySelector("#submit-btn");
    var nameInput = document.querySelector("#name");
    var nameMsg = document.querySelector("#name-error");
    var lastNameInput = document.querySelector("#last-name");
    var lastNameMsg = document.querySelector("#last-name-error");
    var dniInput = document.querySelector("#dni");
    var dniMsg = document.querySelector("#dni-error");
    var birthDateInput = document.querySelector("#birth-date");
    var birthDateMsg = document.querySelector("#birth-date-error");
    var addressInput = document.querySelector("#address");
    var addressMsg = document.querySelector("#address-error");
    var locationInput = document.querySelector("#location");
    var locationMsg = document.querySelector("#location-error");
    var zipCodeInput = document.querySelector("#zip-code");
    var zipCodeMsg = document.querySelector("#zip-code-error");
    var emailInput = document.querySelector("#email");
    var emailMsg = document.querySelector("#email-error");
    var passwordInput = document.querySelector("#password");
    var passwordMsg = document.querySelector("#password-error");
    var repeatPasswordInput = document.querySelector("#repeat-password");
    var repeatPasswordMsg = document.querySelector("#repeat-password-error");
  
    submitBtn.addEventListener("click", validateInputs);
  
    function validateInputs() {
      if (emailInput && passwordInput) {
        if (
          validateEmail() &&
          validatePassword() &&
          validatePasswordConfirm() &&
          validateName() &&
          validateLastName() &&
          validateDni() &&
          validateBirthDate() &&
          validateAddress() &&
          validateLocation() &&
          validateZipCode()
        ) {
          alert(`
          Successfully registered! Your data:
          Name: ${nameInput.value}
          Last name: ${lastNameInput.value}
          DNI: ${dniInput.value}
          Birth date: ${birthDateInput.value}
          Address: ${addressInput.value}
          Location: ${locationInput.value}
          Zip code: ${zipCodeInput.value}
          Email: ${emailInput.value}
          Password: ${passwordInput.value}`);
        } else {
          alert(`Email or password does not match`);
        }
      }
    }
  
    function hasNumbers(text) {
      for (var i = 0; i < text.length; i++) {
        if (text[i] >= "0" && text[i] <= "9") return true;
      }
      return false;
    }
  
    function hasLetters(text) {
      for (var i = 0; i < text.length; i++) {
        if (text[i] >= "a" && text[i] <= "z") return true;
        if (hasSpecialCharacters(text)) return true;
      }
      return false;
    }
  
    function hasSpecialCharacters(text) {
      var specialCharacters = [
        "!",
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "@",
        "[",
        "]",
        "^",
        "_",
        "`",
        "{",
        "|",
        "}",
        "~",
      ];
      for (var i = 0; i < text.length; i++) {
        if (specialCharacters.includes(text[i])) return true;
      }
      return false;
    }
  
    function validateEmail() {
      return emailInput.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
    }
  
    function validatePassword() {
      if (passwordInput.value.length < 6) {
        return false;
      } else if (!hasNumbers(passwordInput.value)) {
        return false;
      }
      return true;
    }
  
    function validatePasswordConfirm() {
      return passwordInput.value === repeatPasswordInput.value;
    }
  
    function validateName() {
      if (nameInput.value.length <= 3) {
        return false;
      } else if (hasNumbers(nameInput.value)) {
        return false;
      } else {
        return true;
      }
    }
  
    function validateLastName() {
      if (lastNameInput.value.length <= 3) {
        return false;
      } else if (hasNumbers(lastNameInput.value)) {
        return false;
      } else {
        return true;
      }
    }
  
    function validateDni() {
      if (dniInput.value.length <= 7) {
        return false;
      } else if (hasLetters(dniInput.value)) {
        return false;
      } else {
        return true;
      }
    }
  
    function validateZipCode() {
      if (zipCodeInput.value.length < 4 || zipCodeInput.value.length > 5) {
        return false;
      } else if (hasLetters(zipCodeInput.value)) {
        return false;
      } else {
        return true;
      }
    }
  
    function validateBirthDate() {
      if (
        new Date(birthDateInput.value) > new Date() ||
        isNaN(Date.parse(birthDateInput.value))
      ) {
        return false;
      } else {
        return true;
      }
    }
  
    function validateAddress() {
      if (addressInput.value.length <= 5) {
        return false;
      } else if (!hasNumbers(addressInput.value)) {
        return false;
      } else if (!addressInput.value.includes(" ")) {
        return false;
      } else {
        return true;
      }
    }
  
    function validateLocation() {
      if (locationInput.value.length <= 3) {
        return false;
      } else if (hasSpecialCharacters(locationInput.value)) {
        return false;
      } else {
        return true;
      }
    }
  
    emailInput.addEventListener("focus", function () {
      emailMsg.classList.add("validated");
    });
  
    emailInput.addEventListener("blur", function () {
      if (!validateEmail()) {
        emailMsg.classList.remove("validated");
      } else {
        emailMsg.classList.add("validated");
      }
    });
  
    passwordInput.addEventListener("blur", function () {
      if (!validatePassword()) {
        passwordMsg.classList.remove("validated");
      } else {
        passwordMsg.classList.add("validated");
      }
    });
  
    passwordInput.addEventListener("focus", function () {
      passwordMsg.classList.add("validated");
    });
  
    repeatPasswordInput.addEventListener("blur", function () {
      if (!validatePasswordConfirm()) {
        repeatPasswordMsg.classList.remove("validated");
      } else {
        repeatPasswordMsg.classList.add("validated");
      }
    });
  
    repeatPasswordInput.addEventListener("focus", function () {
      repeatPasswordMsg.classList.add("validated");
    });
  
    nameInput.addEventListener("focus", function () {
      nameMsg.classList.add("validated");
    });
  
    nameInput.addEventListener("blur", function () {
      if (validateName()) {
        nameMsg.classList.add("validated");
      } else {
        nameMsg.classList.remove("validated");
      }
    });
  
    lastNameInput.addEventListener("focus", function () {
      lastNameMsg.classList.add("validated");
    });
  
    lastNameInput.addEventListener("blur", function () {
      if (validateLastName()) {
        lastNameMsg.classList.add("validated");
      } else {
        lastNameMsg.classList.remove("validated");
      }
    });
  
    dniInput.addEventListener("focus", function () {
      dniMsg.classList.add("validated");
    });
  
    dniInput.addEventListener("blur", function () {
      if (validateDni()) {
        dniMsg.classList.add("validated");
      } else {
        dniMsg.classList.remove("validated");
      }
    });
  
    birthDateInput.addEventListener("focus", function () {
      birthDateMsg.classList.add("validated");
    });
  
    birthDateInput.addEventListener("blur", function () {
      if (validateBirthDate()) {
        birthDateMsg.classList.add("validated");
      } else {
        birthDateMsg.classList.remove("validated");
      }
    });
  
    addressInput.addEventListener("focus", function () {
      addressMsg.classList.add("validated");
    });
  
    addressInput.addEventListener("blur", function () {
      if (validateAddress()) {
        addressMsg.classList.add("validated");
      } else {
        addressMsg.classList.remove("validated");
      }
    });
  
    locationInput.addEventListener("focus", function () {
      locationMsg.classList.add("validated");
    });
  
    locationInput.addEventListener("blur", function () {
      if (validateLocation()) {
        locationMsg.classList.add("validated");
      } else {
        locationMsg.classList.remove("validated");
      }
    });
  
    zipCodeInput.addEventListener("focus", function () {
      zipCodeMsg.classList.add("validated");
    });
  
    zipCodeInput.addEventListener("blur", function () {
      if (validateZipCode()) {
        zipCodeMsg.classList.add("validated");
      } else {
        zipCodeMsg.classList.remove("validated");
      }
    });
  };
  