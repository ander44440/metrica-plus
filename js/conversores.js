function cParaF(){
let v = document.getElementById("valorTemp").value;
let res = document.getElementById("resultadoTemp");

if (v === "") {
    res.innerHTML = "Digite um valor.";
    return;
}

let C = parseFloat(v);

if (isNaN(C)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let F = (C * 9/5) + 32;

res.innerHTML = C.toFixed(2) + " °C = " + F.toFixed(2) + " °F";
}

function fParaC(){
let v = document.getElementById("valorTemp").value;
let res = document.getElementById("resultadoTemp");

if (v === "") {
    res.innerHTML = "Digite um valor.";
    return;
}

let F = parseFloat(v);

if (isNaN(F)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let C = (F - 32) * 5/9;

res.innerHTML = F.toFixed(2) + " °F = " + C.toFixed(2) + " °C";
}

function cParaK() {
    const valor = parseFloat(document.getElementById("valorTemp").value);
    const res = document.getElementById("resultadoTemp");

    if (isNaN(valor)) {
        res.innerHTML = "Digite um valor válido.";
        return;
    }

    const resultado = valor + 273.15;

    res.innerHTML = `
        <strong>Conversão:</strong><br>
        ${valor.toFixed(2)} °C = ${resultado.toFixed(2)} K
    `;
}

function kParaC() {
    const valor = parseFloat(document.getElementById("valorTemp").value);
    const res = document.getElementById("resultadoTemp");

    if (isNaN(valor)) {
        res.innerHTML = "Digite um valor válido.";
        return;
    }

    const resultado = valor - 273.15;

    res.innerHTML = `
        <strong>Conversão:</strong><br>
        ${valor.toFixed(2)} K = ${resultado.toFixed(2)} °C
    `;
}

function cParaRankine() {
    const valor = parseFloat(document.getElementById("valorTemp").value);
    const res = document.getElementById("resultadoTemp");

    if (isNaN(valor)) {
        res.innerHTML = "Digite um valor válido.";
        return;
    }

    const resultado = (valor + 273.15) * 9 / 5;

    res.innerHTML = `
        <strong>Conversão:</strong><br>
        ${valor.toFixed(2)} °C = ${resultado.toFixed(2)} °R
    `;
}

function rankineParaC() {
    const valor = parseFloat(document.getElementById("valorTemp").value);
    const res = document.getElementById("resultadoTemp");

    if (isNaN(valor)) {
        res.innerHTML = "Digite um valor válido.";
        return;
    }

    const resultado = (valor - 491.67) * 5 / 9;

    res.innerHTML = `
        <strong>Conversão:</strong><br>
        ${valor.toFixed(2)} °R = ${resultado.toFixed(2)} °C
    `;
}

function fParaK() {
    const valor = parseFloat(document.getElementById("valorTemp").value);
    const res = document.getElementById("resultadoTemp");

    if (isNaN(valor)) {
        res.innerHTML = "Digite um valor válido.";
        return;
    }

    const resultado = (valor - 32) * 5 / 9 + 273.15;

    res.innerHTML = `
        <strong>Conversão:</strong><br>
        ${valor.toFixed(2)} °F = ${resultado.toFixed(2)} K
    `;
}

function kParaF() {
    const valor = parseFloat(document.getElementById("valorTemp").value);
    const res = document.getElementById("resultadoTemp");

    if (isNaN(valor)) {
        res.innerHTML = "Digite um valor válido.";
        return;
    }

    const resultado = (valor - 273.15) * 9 / 5 + 32;

    res.innerHTML = `
        <strong>Conversão:</strong><br>
        ${valor.toFixed(2)} K = ${resultado.toFixed(2)} °F
    `;
}

function fParaRankine() {
    const valor = parseFloat(document.getElementById("valorTemp").value);
    const res = document.getElementById("resultadoTemp");

    if (isNaN(valor)) {
        res.innerHTML = "Digite um valor válido.";
        return;
    }

    const resultado = valor + 459.67;

    res.innerHTML = `
        <strong>Conversão:</strong><br>
        ${valor.toFixed(2)} °F = ${resultado.toFixed(2)} °R
    `;
}

function rankineParaF() {
    const valor = parseFloat(document.getElementById("valorTemp").value);
    const res = document.getElementById("resultadoTemp");

    if (isNaN(valor)) {
        res.innerHTML = "Digite um valor válido.";
        return;
    }

    const resultado = valor - 459.67;

    res.innerHTML = `
        <strong>Conversão:</strong><br>
        ${valor.toFixed(2)} °R = ${resultado.toFixed(2)} °F
    `;
}

function btuParaW(){
let v = document.getElementById("valorBTU").value;
let res = document.getElementById("resultado");

if (v === "") {
    res.innerHTML = "Digite um valor.";
    return;
}

let BTU = parseFloat(v);

if (isNaN(BTU)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let W = BTU / 3.412;

res.innerHTML = BTU.toFixed(2) + " BTU/h = " + W.toFixed(2) + " W";
}

function wParaBTU(){
let v = document.getElementById("valorBTU").value;
let res = document.getElementById("resultado");

if (v === "") {
    res.innerHTML = "Digite um valor.";
    return;
}

let W = parseFloat(v);

if (isNaN(W)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let BTU = W * 3.412;

res.innerHTML = W.toFixed(2) + " W = " + BTU.toFixed(2) + " BTU/h";
}

function psiParaBar(){
let v = document.getElementById("valorPressao").value;
let res = document.getElementById("resultadoPressao");

if (v === "") {
    res.innerHTML = "Digite um valor.";
    return;
}

let PSI = parseFloat(v);

if (isNaN(PSI)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let bar = PSI * 0.06895;

res.innerHTML = PSI.toFixed(2) + " PSI = " + bar.toFixed(2) + " bar";
}

function barParaPsi(){
let v = document.getElementById("valorPressao").value;
let res = document.getElementById("resultadoPressao");

if (v === "") {
    res.innerHTML = "Digite um valor.";
    return;
}

let bar = parseFloat(v);

if (isNaN(bar)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let PSI = bar / 0.06895;

res.innerHTML = bar.toFixed(2) + " bar = " + PSI.toFixed(2) + " PSI";
}

function horasParaMin(){
let v = document.getElementById("valorTempo").value;
let res = document.getElementById("resultadoTempo");

if (v === "") {
    res.innerHTML = "Digite um valor.";
    return;
}

let horas = parseFloat(v);

if (isNaN(horas)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let minutos = horas * 60;

res.innerHTML = horas.toFixed(2) + " horas = " + minutos.toFixed(2) + " minutos";
}

function minParaHoras(){
let v = document.getElementById("valorTempo").value;
let res = document.getElementById("resultadoTempo");

if (v === "") {
    res.innerHTML = "Digite um valor.";
    return;
}

let minutos = parseFloat(v);

if (isNaN(minutos)) {
    res.innerHTML = "Valor inválido.";
    return;
}

let horas = minutos / 60;

res.innerHTML = minutos.toFixed(2) + " minutos = " + horas.toFixed(2) + " horas";
}

function cParaF2() {
  const valor = parseFloat(document.getElementById("valorTemp").value);
  const saida = document.getElementById("resultadoTemp");

  if (isNaN(valor)) {
    saida.innerHTML = "Digite um valor válido.";
    return;
  }

  const resultado = (valor * 9/5) + 32;
  saida.innerHTML = `${valor} °C = ${resultado.toFixed(2)} °F`;
}

function fParaC2() {
  const valor = parseFloat(document.getElementById("valorTemp").value);
  const saida = document.getElementById("resultadoTemp");

  if (isNaN(valor)) {
    saida.innerHTML = "Digite um valor válido.";
    return;
  }

  const resultado = (valor - 32) * 5/9;
  saida.innerHTML = `${valor} °F = ${resultado.toFixed(2)} °C`;
}