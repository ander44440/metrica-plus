function calcularDeltaT(){
let e = document.getElementById("tempEntrada").value;
let s = document.getElementById("tempSaida").value;

document.getElementById("resultadoDeltaT").innerHTML =
"DeltaT = " + (e - s) + " °C";
}

function calcularSuperheat(){
let suc = document.getElementById("tempSuc").value;
let evap = document.getElementById("tempEvap").value;

document.getElementById("resultadoSuperheat").innerHTML =
"Superheat = " + (suc - evap) + " °C";
}

function calcularSubcool(){
let cond = document.getElementById("tempCond").value;
let liq = document.getElementById("tempLinhaLiquido").value;

document.getElementById("resultadoSubcool").innerHTML =
"Subcool = " + (cond - liq) + " °C";
}

function buscarPT(){
let p = document.getElementById("pressaoPT").value;

document.getElementById("resultadoPT").innerHTML =
"Temperatura aproximada: " + (p * 2) + " °C";
}