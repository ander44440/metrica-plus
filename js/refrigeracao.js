function calcularDeltaT(){
let entrada = document.getElementById("tempEntrada").value;
let saida = document.getElementById("tempSaida").value;
let res = document.getElementById("resultadoDeltaT");

if (entrada === "" || saida === "") {
    res.innerHTML = "Preencha os dois valores.";
    return;
}

let tEntrada = parseFloat(entrada);
let tSaida = parseFloat(saida);

if (isNaN(tEntrada) || isNaN(tSaida)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let deltaT = tEntrada - tSaida;

res.innerHTML = "DeltaT = " + deltaT.toFixed(2) + " °C";
}

function calcularSuperheat(){
let suc = document.getElementById("tempSuc").value;
let evap = document.getElementById("tempEvap").value;
let res = document.getElementById("resultadoSuperheat");

if (suc === "" || evap === "") {
    res.innerHTML = "Preencha os dois valores.";
    return;
}

let tSuc = parseFloat(suc);
let tEvap = parseFloat(evap);

if (isNaN(tSuc) || isNaN(tEvap)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let superheat = tSuc - tEvap;

res.innerHTML = "Superheat = " + superheat.toFixed(2) + " °C";
}

function calcularSubcool(){
let cond = document.getElementById("tempCond").value;
let liquido = document.getElementById("tempLinhaLiquido").value;
let res = document.getElementById("resultadoSubcool");

if (cond === "" || liquido === "") {
    res.innerHTML = "Preencha os dois valores.";
    return;
}

let tCond = parseFloat(cond);
let tLiquido = parseFloat(liquido);

if (isNaN(tCond) || isNaN(tLiquido)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let subcool = tCond - tLiquido;

res.innerHTML = "Subcool = " + subcool.toFixed(2) + " °C";
}

function buscarPT(){
let p = document.getElementById("pressaoPT").value;
let res = document.getElementById("resultadoPT");

if (p === "") {
    res.innerHTML = "Digite um valor.";
    return;
}

let pressao = parseFloat(p);

if (isNaN(pressao)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let temperatura = pressao * 2;

res.innerHTML = "Temperatura aproximada: " + temperatura.toFixed(2) + " °C";
}