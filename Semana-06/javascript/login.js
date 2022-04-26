window.onload = function() {
    var submitBtn = document.querySelector('#submit-btn');
    var emailInput = document.querySelector('#email');
    var emailMsg = document.querySelector('#email-error')
    var passwordInput = document.querySelector('#password');
    var passwordMsg = document.querySelector('#password-error')
  
    submitBtn.addEventListener("click", validateInputs);
  
    function validateInputs(){
      if(emailInput && passwordInput) {
        if(validateEmail() &&
        validatePassword()) {
          alert(`Successfully logged in!`)
        } else {
          alert(`Email or password does not match` )
        }
      }
    }
  
    function validateEmail() {
      return(emailInput.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/));
    }
  
    function validatePassword() {
      var numbers = ['1','2','3','4','5','6','7','8','9','0'];
      var inputNumbers = 0;
      var inputStrings = 0;
      for (var i = 0; i < passwordInput.value.length; i++) {
          if (numbers.includes(passwordInput.value[i])) {
              inputNumbers++;
          }
          else {
              inputStrings++;
          }
      if (inputNumbers > 0 && inputStrings > 0) {
          return true
      }}
      return false
    }
  
    emailInput.addEventListener("focus", function(){
      emailMsg.classList.add('validated');
    })
  
    emailInput.addEventListener("blur", function(){
      if(!validateEmail()){
        emailMsg.classList.remove('validated');
      } else{
        emailMsg.classList.add('validated');
      }
    })
  
    passwordInput.addEventListener("blur", function(){
      if(!validatePassword()){
        passwordMsg.classList.remove('validated');
      } else{
        passwordMsg.classList.add('validated');
      }
    })
  
    passwordInput.addEventListener("focus", function(){
      passwordMsg.classList.add('validated');
    })
  };
  