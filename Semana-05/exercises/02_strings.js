//exercise A

var animals = "big elephant";
console.log(animals.toUpperCase());

//exercise B

var fruits = "juicy apple";
var result = fruits.substring(0, 5);
console.log(result);

//exercise C

var vegetables = "big pumpkin";
result = vegetables.substring(vegetables.length - 3, vegetables.length);
console.log(result);

//exercise D

var clothes = "yellow jacket";
result =
  clothes.substring(0, 1).toUpperCase() +
  clothes.substring(1, clothes.length).toLowerCase();
console.log(result);

//exercise E

var countries = "australia ";
result = countries.indexOf(" ");
console.log(result);

//exercise F

var names = "gianfranco franchesco";
var spaceIndexOf = names.indexOf(" ");
result =
  names.substring(0, 1).toUpperCase() +
  names.substring(1, spaceIndexOf).toLowerCase() +
  names.substring(spaceIndexOf, spaceIndexOf + 2).toUpperCase() +
  names.substring(spaceIndexOf + 2, names.length).toLowerCase();
console.log(result);
