// dolar a peso
/*function dolaresAPesos(dolares, tasaCambio) {
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
} */

//login
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var userData = {
      nombre: "Usuario",
      email: email
  };
  localStorage.setItem("userEmail", email);

  mostrarDatosUsuario(userData);
  obtenerDatosDivisas();
}

function mostrarDatosUsuario(userData) {
  var elementoDatosUsuario = document.getElementById("userData");
  elementoDatosUsuario.innerHTML = "<h2>Bienvenido, " + userData.nombre + "</h2><p>Correo electrónico: " + userData.email + "</p>";
  elementoDatosUsuario.style.display = "block";
  document.getElementById("loginForm").style.display = "none";
}

function obtenerDatosDivisas() {
  var datosDivisas = {
      ARS: 1,
      USD: 850.75,
      EUR: 926.28,
      BRL: 170.32
  };
  var userEmail = localStorage.getItem("userEmail");
  if (userEmail) {
      console.log("Correo electrónico del usuario recuperado del almacenamiento local:", userEmail);
  } else {
      console.log("Correo electrónico del usuario no encontrado");
  }

  var elementoDatosDivisas = document.getElementById("currencyData");
  elementoDatosDivisas.innerHTML = "<h2>Información de divisas</h2>";
  for (var divisa in datosDivisas) {
      elementoDatosDivisas.innerHTML += "<p>" + divisa + ": " + datosDivisas[divisa] + "</p>";
  }
}

// cambio click

const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
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

// API- ploty
var data = [
  {
    x: ['2024-01-01 11:00:00', '2024-02-01 11:00:00', '2024-03-01 11:00:00'],
    y: [2, 3, 6],
    type: 'scatter'
  }
  
];

Plotly.newPlot('myDiv', data);



// arrays y objetos 

const diferentesDivisas = [
  {
    moneda: "peso argentino",
    simbolo: "$",
    ambito: "argentina",
    tasaMomentanea: "1",
    codigoIso:	"ARS",
  },
  {
    moneda: "dolar",
    simbolo: "$",
    ambito: "estados unidos",
    tasaMomentanea: "850.75",
    codigoIso:	"USD",
  },
  {
    moneda: "euro",
    simbolo: "€",
    ambito: "europa",
    tasaMomentanea: "926.28",
    codigoIso:	"EUR",
  },
  {
    moneda: "real",
    simbolo: "R$",
    ambito: "brasil",
    tasaMomentanea: "170.32",
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

