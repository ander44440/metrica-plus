function cParaF(){
let v = document.getElementById("valorTemp").value;
document.getElementById("resultadoTemp").innerHTML =
(v * 9/5 + 32).toFixed(2) + " °F";
}

function fParaC(){
let v = document.getElementById("valorTemp").value;
document.getElementById("resultadoTemp").innerHTML =
((v - 32) * 5/9).toFixed(2) + " °C";
}

function btuParaW(){
let v = document.getElementById("valorBTU").value;
document.getElementById("resultado").innerHTML =
(v / 3.412).toFixed(2) + " W";
}

function wParaBTU(){
let v = document.getElementById("valorBTU").value;
document.getElementById("resultado").innerHTML =
(v * 3.412).toFixed(2) + " BTU/h";
}

function psiParaBar(){
let v = document.getElementById("valorPressao").value;
document.getElementById("resultadoPressao").innerHTML =
(v * 0.06895).toFixed(2) + " bar";
}

function barParaPsi(){
let v = document.getElementById("valorPressao").value;
document.getElementById("resultadoPressao").innerHTML =
(v / 0.06895).toFixed(2) + " PSI";
}

function horasParaMin(){
let v = document.getElementById("valorTempo").value;
document.getElementById("resultadoTempo").innerHTML =
(v * 60) + " minutos";
}

function minParaHoras(){
let v = document.getElementById("valorTempo").value;
document.getElementById("resultadoTempo").innerHTML =
(v / 60).toFixed(2) + " horas";
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