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