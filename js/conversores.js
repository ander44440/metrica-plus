function cParaF() {
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

  let F = (C * 9 / 5) + 32;

  res.innerHTML = `
    ${C.toFixed(2)} °C = ${F.toFixed(2)} °F
  `;
}

function fParaC() {
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

  let C = (F - 32) * 5 / 9;

  res.innerHTML = `
    <strong>Conversão:</strong><br>
    ${F.toFixed(2)} °F = ${C.toFixed(2)} °C
  `;
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

function btuParaW() {
  let v = document.getElementById("valorBTU").value;
  let res = document.getElementById("resultadoBTU");

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

function wParaBTU() {
  let v = document.getElementById("valorBTU").value;
  let res = document.getElementById("resultadoBTU");

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

function horasParaMin() {
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

function minParaHoras() {
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

// ================= PRESSÃO =================

function lerValorPressao() {
  const campo = document.getElementById("valorPressao");
  if (!campo) return null;

  const valor = parseFloat(campo.value);

  if (isNaN(valor)) {
    const resultado = document.getElementById("resultadoPressao");
    if (resultado) {
      resultado.innerHTML = "Digite um valor válido.";
    }
    return null;
  }

  return valor;
}

function mostrarResultadoPressao(texto) {
  const resultado = document.getElementById("resultadoPressao");
  if (resultado) {
    resultado.innerHTML = texto;
  }
}

// ---- PSI / BAR ----
function psiParaBar() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor * 0.0689476;
  mostrarResultadoPressao(`${valor} PSI = <strong>${convertido.toFixed(4)} bar</strong>`);
}

function barParaPsi() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor * 14.5038;
  mostrarResultadoPressao(`${valor} bar = <strong>${convertido.toFixed(4)} PSI</strong>`);
}

// ---- PSI / kPa ----
function psiParaKpa() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor * 6.89476;
  mostrarResultadoPressao(`${valor} PSI = <strong>${convertido.toFixed(2)} kPa</strong>`);
}

function kpaParaPsi() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor / 6.89476;
  mostrarResultadoPressao(`${valor} kPa = <strong>${convertido.toFixed(4)} PSI</strong>`);
}

// ---- PSI / MPa ----
function psiParaMpa() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor * 0.00689476;
  mostrarResultadoPressao(`${valor} PSI = <strong>${convertido.toFixed(5)} MPa</strong>`);
}

function mpaParaPsi() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor / 0.00689476;
  mostrarResultadoPressao(`${valor} MPa = <strong>${convertido.toFixed(4)} PSI</strong>`);
}

// ---- PSI / kgf/cm² ----
function psiParaKgf() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor * 0.0703069;
  mostrarResultadoPressao(`${valor} PSI = <strong>${convertido.toFixed(4)} kgf/cm²</strong>`);
}

function kgfParaPsi() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor / 0.0703069;
  mostrarResultadoPressao(`${valor} kgf/cm² = <strong>${convertido.toFixed(4)} PSI</strong>`);
}

// ---- BAR / kPa ----
function barParaKpa() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor * 100;
  mostrarResultadoPressao(`${valor} bar = <strong>${convertido.toFixed(2)} kPa</strong>`);
}

function kpaParaBar() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor / 100;
  mostrarResultadoPressao(`${valor} kPa = <strong>${convertido.toFixed(4)} bar</strong>`);
}

// ---- BAR / MPa ----
function barParaMpa() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor * 0.1;
  mostrarResultadoPressao(`${valor} bar = <strong>${convertido.toFixed(4)} MPa</strong>`);
}

function mpaParaBar() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor * 10;
  mostrarResultadoPressao(`${valor} MPa = <strong>${convertido.toFixed(4)} bar</strong>`);
}

// ---- BAR / kgf/cm² ----
function barParaKgf() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor * 1.01972;
  mostrarResultadoPressao(`${valor} bar = <strong>${convertido.toFixed(4)} kgf/cm²</strong>`);
}

function kgfParaBar() {
  const valor = lerValorPressao();
  if (valor === null) return;

  const convertido = valor / 1.01972;
  mostrarResultadoPressao(`${valor} kgf/cm² = <strong>${convertido.toFixed(4)} bar</strong>`);
}

// ================= VÁCUO =================

function lerValorVacuo() {
  const campo = document.getElementById("valorVacuo");
  if (!campo) return null;

  const valor = parseFloat(campo.value);

  if (isNaN(valor)) {
    const resultado = document.getElementById("resultadoVacuo");
    if (resultado) {
      resultado.innerHTML = "Digite um valor válido.";
    }
    return null;
  }

  return valor;
}

function mostrarResultadoVacuo(texto) {
  const resultado = document.getElementById("resultadoVacuo");
  if (resultado) {
    resultado.innerHTML = texto;
  }
}

// ---- inHg / mmHg ----
function inhgParaMmhg() {
  const valor = lerValorVacuo();
  if (valor === null) return;

  const convertido = valor * 25.4;
  mostrarResultadoVacuo(`${valor} inHg = <strong>${convertido.toFixed(2)} mmHg</strong>`);
}

function mmhgParaInhg() {
  const valor = lerValorVacuo();
  if (valor === null) return;

  const convertido = valor / 25.4;
  mostrarResultadoVacuo(`${valor} mmHg = <strong>${convertido.toFixed(4)} inHg</strong>`);
}

// ---- inHg / microns ----
function inhgParaMicrons() {
  const valor = lerValorVacuo();
  if (valor === null) return;

  const convertido = valor * 25400;
  mostrarResultadoVacuo(`${valor} inHg = <strong>${convertido.toFixed(0)} microns</strong>`);
}

function micronsParaInhg() {
  const valor = lerValorVacuo();
  if (valor === null) return;

  const convertido = valor / 25400;
  mostrarResultadoVacuo(`${valor} microns = <strong>${convertido.toFixed(6)} inHg</strong>`);
}

// ---- mmHg / microns ----
function mmhgParaMicrons() {
  const valor = lerValorVacuo();
  if (valor === null) return;

  const convertido = valor * 1000;
  mostrarResultadoVacuo(`${valor} mmHg = <strong>${convertido.toFixed(0)} microns</strong>`);
}

function micronsParaMmhg() {
  const valor = lerValorVacuo();
  if (valor === null) return;

  const convertido = valor / 1000;
  mostrarResultadoVacuo(`${valor} microns = <strong>${convertido.toFixed(3)} mmHg</strong>`);
}

// ================= VAZÃO =================

function obterValorVazao() {
  let v = parseFloat(document.getElementById("valorVazao").value);
  let res = document.getElementById("resultadoVazao");

  if (isNaN(v)) {
    if (res) res.innerHTML = "Digite um valor.";
    return null;
  }

  return v;
}

function lminParaLh() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(2)} L/min = <strong>${(v * 60).toFixed(2)} L/h</strong>`;
}

function lhParaLmin() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(2)} L/h = <strong>${(v / 60).toFixed(2)} L/min</strong>`;
}

function lminParaM3h() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(2)} L/min = <strong>${(v * 0.06).toFixed(3)} m³/h</strong>`;
}

function m3hParaLmin() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(3)} m³/h = <strong>${(v / 0.06).toFixed(2)} L/min</strong>`;
}

function lminParaCfm() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(2)} L/min = <strong>${(v * 0.0353147).toFixed(3)} CFM</strong>`;
}

function cfmParaLmin() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(3)} CFM = <strong>${(v / 0.0353147).toFixed(2)} L/min</strong>`;
}

function lhParaM3h() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(2)} L/h = <strong>${(v / 1000).toFixed(3)} m³/h</strong>`;
}

function m3hParaLh() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(3)} m³/h = <strong>${(v * 1000).toFixed(2)} L/h</strong>`;
}

function lhParaCfm() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(2)} L/h = <strong>${(v * 0.000588578).toFixed(3)} CFM</strong>`;
}

function cfmParaLh() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(3)} CFM = <strong>${(v / 0.000588578).toFixed(2)} L/h</strong>`;
}

function m3hParaCfm() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(3)} m³/h = <strong>${(v * 0.588578).toFixed(3)} CFM</strong>`;
}

function cfmParaM3h() {
  let v = obterValorVazao();
  if (v === null) return;
  document.getElementById("resultadoVazao").innerHTML = `${v.toFixed(3)} CFM = <strong>${(v / 0.588578).toFixed(3)} m³/h</strong>`;
}

// ================= MÉTRICO / IP ↔ SI =================

// ===== COMPRIMENTO =====

function obterValorComprimento() {
  let v = parseFloat(document.getElementById("valorComprimento").value);
  let res = document.getElementById("resultadoComprimento");

  if (isNaN(v)) {
    if (res) res.innerHTML = "Digite um valor.";
    return null;
  }

  return v;
}

function mmParaPol() {
  let v = obterValorComprimento();
  if (v === null) return;
  document.getElementById("resultadoComprimento").innerHTML = `${v.toFixed(2)} mm = <strong>${(v / 25.4).toFixed(4)} pol</strong>`;
}

function polParaMm() {
  let v = obterValorComprimento();
  if (v === null) return;
  document.getElementById("resultadoComprimento").innerHTML = `${v.toFixed(4)} pol = <strong>${(v * 25.4).toFixed(2)} mm</strong>`;
}

function mParaPes() {
  let v = obterValorComprimento();
  if (v === null) return;
  document.getElementById("resultadoComprimento").innerHTML = `${v.toFixed(2)} m = <strong>${(v * 3.28084).toFixed(4)} pés</strong>`;
}

function pesParaM() {
  let v = obterValorComprimento();
  if (v === null) return;
  document.getElementById("resultadoComprimento").innerHTML = `${v.toFixed(4)} pés = <strong>${(v / 3.28084).toFixed(4)} m</strong>`;
}

// ===== ÁREA =====

function obterValorArea() {
  let v = parseFloat(document.getElementById("valorArea").value);
  let res = document.getElementById("resultadoArea");

  if (isNaN(v)) {
    if (res) res.innerHTML = "Digite um valor.";
    return null;
  }

  return v;
}

function m2ParaFt2() {
  let v = obterValorArea();
  if (v === null) return;
  document.getElementById("resultadoArea").innerHTML = `${v.toFixed(2)} m² = <strong>${(v * 10.7639).toFixed(4)} ft²</strong>`;
}

function ft2ParaM2() {
  let v = obterValorArea();
  if (v === null) return;
  document.getElementById("resultadoArea").innerHTML = `${v.toFixed(4)} ft² = <strong>${(v / 10.7639).toFixed(4)} m²</strong>`;
}

// ===== VOLUME =====

function obterValorVolume() {
  let v = parseFloat(document.getElementById("valorVolume").value);
  let res = document.getElementById("resultadoVolume");

  if (isNaN(v)) {
    if (res) res.innerHTML = "Digite um valor.";
    return null;
  }

  return v;
}

function litrosParaGalao() {
  let v = obterValorVolume();
  if (v === null) return;
  document.getElementById("resultadoVolume").innerHTML = `${v.toFixed(2)} L = <strong>${(v / 3.78541).toFixed(4)} gal</strong>`;
}

function galaoParaLitros() {
  let v = obterValorVolume();
  if (v === null) return;
  document.getElementById("resultadoVolume").innerHTML = `${v.toFixed(4)} gal = <strong>${(v * 3.78541).toFixed(2)} L</strong>`;
}

function m3ParaFt3() {
  let v = obterValorVolume();
  if (v === null) return;
  document.getElementById("resultadoVolume").innerHTML = `${v.toFixed(3)} m³ = <strong>${(v * 35.3147).toFixed(4)} ft³</strong>`;
}

function ft3ParaM3() {
  let v = obterValorVolume();
  if (v === null) return;
  document.getElementById("resultadoVolume").innerHTML = `${v.toFixed(4)} ft³ = <strong>${(v / 35.3147).toFixed(4)} m³</strong>`;
}

// ===== MASSA =====

function obterValorMassa() {
  let v = parseFloat(document.getElementById("valorMassa").value);
  let res = document.getElementById("resultadoMassa");

  if (isNaN(v)) {
    if (res) res.innerHTML = "Digite um valor.";
    return null;
  }

  return v;
}

function kgParaLb() {
  let v = obterValorMassa();
  if (v === null) return;
  document.getElementById("resultadoMassa").innerHTML = `${v.toFixed(2)} kg = <strong>${(v * 2.20462).toFixed(4)} lb</strong>`;
}

function lbParaKg() {
  let v = obterValorMassa();
  if (v === null) return;
  document.getElementById("resultadoMassa").innerHTML = `${v.toFixed(4)} lb = <strong>${(v / 2.20462).toFixed(4)} kg</strong>`;
}