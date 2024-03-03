// dolar a peso
function dolaresAPesos(dolares, tasaCambio) {
    return dolares * tasaCambio;
  }
const dolares = parseFloat(prompt("Ingrese la cantidad de dolares:"));
const tasaCambioDolaresAPesos = 950;

if (isNaN(dolares) || isNaN(tasaCambioDolaresAPesos)) {
  console.log("Por favor, ingrese valores numericos validos.");
} else {
  const pesosConvertidos = dolaresAPesos(dolares, tasaCambioDolaresAPesos);
  console.log(`${dolares} dólares son ${pesosConvertidos} pesos argentinos.`);
}

// peso a dolar
function pesosADolares(pesos, tasaCambio) {
    return pesos / tasaCambio;
  }

const pesos = parseFloat(prompt("Ingrese la cantidad de pesos argentinos:"));
const tasaCambioPesosADolares = 1000;

if (isNaN(pesos) || isNaN(tasaCambioPesosADolares)) {
  console.log("Por favor, ingrese valores numericos validos.");
} else {
  const dolaresConvertidos = pesosADolares(pesos, tasaCambioPesosADolares);
  console.log(`${pesos} pesos argentinos son ${dolaresConvertidos} dólares.`);
}

// euro a pesos
function eurosAPesos(euros, tasaCambio) {
  return euros * tasaCambio;
}
const euros = parseFloat(prompt("Ingrese la cantidad de euros:"));
const tasaCambioeurosAPesos = 1100;

if (isNaN(euros) || isNaN(tasaCambioeurosAPesos)) {
console.log("Por favor, ingrese valores numericos validos.");
} else {
const pesosConvertidos = eurosAPesos(euros, tasaCambioeurosAPesos);
console.log(`${euros} euros son ${pesosConvertidos} pesos argentinos.`);
}

// real a pesos
function realesAPesos(reales, tasaCambio) {
  return reales * tasaCambio;
}
const reales = parseFloat(prompt("Ingrese la cantidad de reales:"));
const tasaCambiorealesAPesos = 200;

if (isNaN(reales) || isNaN(tasaCambiorealesAPesos)) {
console.log("Por favor, ingrese valores numericos validos.");
} else {
const pesosConvertidos = realesAPesos(reales, tasaCambiorealesAPesos);
console.log(`${reales} reales son ${pesosConvertidos} pesos argentinos.`);
}


// cambio click

const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-uno');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');

//dom
function calculate(){
  const moneda_one = monedaEl_one.value;
  const moneda_two = monedaEl_two.value;

 fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
 .then(res => res.json() )
 .then(data => {
     const taza = data.rates[moneda_two];

     cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

     cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

  } );

}
//eventos

monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

calculate();




// arrays y objetos 

const diferentesDivisas = [
  {
    moneda: "peso argentino",
    simbolo: "$",
    ambito: "argentina",
    tasaMomentanea: "950",
    codigoIso:	"ARS",
  },
  {
    moneda: "dolar",
    simbolo: "$",
    ambito: "estados unidos",
    tasaMomentanea: "1000",
    codigoIso:	"USD",
  },
  {
    moneda: "euro",
    simbolo: "€",
    ambito: "europa",
    tasaMomentanea: "1100",
    codigoIso:	"EUR",
  },
  {
    moneda: "real",
    simbolo: "R$",
    ambito: "brasil",
    tasaMomentanea: "200",
    codigoIso:"BRL",
  },
  
];

for (let i = 0; i < diferentesDivisas.length; i++) {
  console.log("Moneda:" + diferentesDivisas[i].moneda);
  console.log("Simbolo: " + diferentesDivisas[i].simbolo);
  console.log("Ambito: " + diferentesDivisas[i].ambito);
  console.log("Tasa: " + diferentesDivisas[i].tasaMomentanea);
  console.log("codigoIso: " + diferentesDivisas[i].codigoIso);

}
// utilizando metodos nativos 
  // forEach para imprimir la informacion de cada divisa
  diferentesDivisas.forEach(function(divisa) {
    console.log(`Moneda: ${divisa.moneda}, Tasa: ${divisa.tasaMomentanea}`);
});

// filter para obtener las divisas con un simbolo
var divisasConSimboloDolar = diferentesDivisas.filter(function(divisa) {
    return divisa.simbolo === "$";
});
console.log("Divisas con símbolo $:", divisasConSimboloDolar);

// sort para ordenar las divisas por tasa de cambio
diferentesDivisas.sort(function(a, b) {
    return parseFloat(a.tasaMomentanea) - parseFloat(b.tasaMomentanea);
});
console.log("Divisas ordenadas por tasa de cambio:", diferentesDivisas);

//cards

