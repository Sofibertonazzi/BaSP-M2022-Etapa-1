window.onload = function () {
    var submitBtn = document.querySelector("#submit-btn");
    var emailInput = document.querySelector("#email");
    var emailMsg = document.querySelector("#email-error");
    var passwordInput = document.querySelector("#password");
    var passwordMsg = document.querySelector("#password-error");
  
    submitBtn.addEventListener("click", validateInputs);
  
    function validateInputs() {
      if (emailInput && passwordInput) {
        if (validateEmail() && validatePassword()) {
          alert(`Successfully logged in!`);
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
  };
  