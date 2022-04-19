//exercise A

var months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  console.log(months[4], months[10]);
  
  //exercise B
  
  console.log(months.sort());
  
  //exercise C
  
  months.unshift("element1");
  months.push("element2");
  console.log(months);
  
  //exercise D
  
  months.shift("element1");
  months.pop("element2");
  console.log(months);
  
  //exercise E
  
  console.log(months.reverse());
  
  //exercise F
  
  var months2 = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  
  console.log(months2.join("-"));
  
  //exercise G
  
  console.log(months2.slice(4, 11));
  