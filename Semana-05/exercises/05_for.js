//exercise A

var list = ["word1", "word2", "word3", "word4", "word5"];

for (var bucle = 0; bucle < list.length; bucle++) {
  alert(list[bucle]);
}

// exercise B

for (var bucle = 0; bucle < list.length; bucle++) {
  alert(
    list[bucle].substring(0, 1).toUpperCase() +
      list[bucle].substring(1, list[bucle].length).toLowerCase()
  );
}

// exercise C

var sentence = "";

for (var bucle = 0; bucle < list.length; bucle++) {
  sentence = sentence + list[bucle];
}

alert(sentence);

//exercise D

var emptyArray = [];

for (let bucle = 0; bucle < 10; bucle++) {
  emptyArray.push(bucle);
}

console.log(emptyArray);
