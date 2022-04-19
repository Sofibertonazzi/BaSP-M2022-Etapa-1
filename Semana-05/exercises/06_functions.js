//exercise A

function numbersToAdd(number1, number2) {
    return number1 + number2;
  }
  
  var result = numbersToAdd(10, 15);
  console.log(result);
  
  //exercise B
  
  function numbersToAddB(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
      return alert(NaN);
    }
    return number1 + number2;
  }
  
  result = numbersToAddB(10, 3);
  console.log(result);
  
  //exercise C
  
  function validateInteger(number) {
    return Number.isInteger(number);
  }
  
  console.log(validateInteger(10));
  
  //exercise D
  
  function numbersToAddD(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
      return alert(NaN);
    }
    if (!validateInteger(number1)) {
      return alert(`Decimal number. Closest is: ${Math.round(number1)}`);
    }
    if (!validateInteger(number2)) {
      return alert(`Decimal number. Closest is: ${Math.round(number2)}`);
    }
    if (validateInteger(number1) && validateInteger(number2)) {
      return number1 + number2;
    }
  }
  
  console.log(numbersToAddD(20, 25));
  
  //exercise E
  
  function validateNumbers(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
      alert(NaN);
      return false;
    }
    if (!validateInteger(number1)) {
      alert(`Decimal number. Closest is: ${Math.round(number1)}`);
      return false;
    }
    if (!validateInteger(number2)) {
      alert(`Decimal number. Closest is: ${Math.round(number2)}`);
      return false;
    }
    return true;
  }
  
  function numbersToAddE(number1, number2) {
    if (validateNumbers(number1, number2)) {
      return number1 + number2;
    } else {
      return "Something went wrong";
    }
  }
  
  console.log(numbersToAddE(5, 6.3));
  