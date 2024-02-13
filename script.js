// dolar a peso
function dolaresAPesos(dolares, tasaCambio) {
    return dolares * tasaCambio;
  }
const dolares = parseFloat(prompt("Ingrese la cantidad de dolares:"));
const tasaCambioDolaresAPesos = 1170;

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
const tasaCambioPesosADolares = 1220;

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
const tasaCambioeurosAPesos = 1300;

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








// arrays y objetos 

const diferentesDivisas = [
  {
    moneda: "peso argentino",
    simbolo: "$",
    ambito: "argentina",
    tasaMomentanea: "1100",
    codigoIso:	"ARS",
  },
  {
    moneda: "dolar",
    simbolo: "$",
    ambito: "estados unidos",
    tasaMomentanea: "1200",
    codigoIso:	"USD",
  },
  {
    moneda: "euro",
    simbolo: "€",
    ambito: "europa",
    tasaMomentanea: "1250",
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
