
function abrirModulo(modulo){
    

 let area = document.getElementById("modulo");

// REMOVE classe home sempre
area.classList.remove("homeAtiva");

if(!area){
console.error("Elemento #modulo não encontrado");
return;
}


// HOME
if(modulo === "home"){

area.innerHTML = `
<h1>Painel Técnico</h1>

<div class="card" onclick="abrirModulo('temperatura')">🌡<h3>Temperatura</h3></div>
<div class="card" onclick="abrirModulo('btu')">❄<h3>BTU ↔ W</h3></div>
<div class="card" onclick="abrirModulo('pressao')">📊<h3>Pressão</h3></div>
<div class="card" onclick="abrirModulo('eletrica')">⚡<h3>Elétrica</h3></div>

<div class="card" onclick="abrirModulo('deltaT')">📉<h3>Delta T</h3></div>
<div class="card" onclick="abrirModulo('superheat')">🔥<h3>Superheat</h3></div>
<div class="card" onclick="abrirModulo('subcool')">❄<h3>Subcool</h3></div>
<div class="card" onclick="abrirModulo('tempo')">⏱<h3>Tempo</h3></div>

<div class="card" onclick="abrirModulo('tabelaPT')">📘<h3>Tabela PT</h3></div>
<div class="card" onclick="abrirModulo('diagnostico')">🧠<h3>Diagnóstico</h3></div>
<div class="card" onclick="abrirModulo('diagnosticoAvancado')">🚀<h3>Diag. Avançado</h3></div>
`;
}


// TEMPERATURA
if(modulo === "temperatura"){
area.innerHTML = `
<button onclick="abrirModulo('home')">⬅</button>
<h2>Temperatura</h2>
<input id="valorTemp" type="number">
<br><br>
<button onclick="cParaF()">C → F</button>
<button onclick="fParaC()">F → C</button>
<h3 id="resultadoTemp"></h3>
`;
}


// BTU
if(modulo === "btu"){
area.innerHTML = `
<button onclick="abrirModulo('home')">⬅</button>
<h2>BTU ↔ W</h2>
<input id="valorBTU" type="number">
<br><br>
<button onclick="btuParaW()">BTU → W</button>
<button onclick="wParaBTU()">W → BTU</button>
<h3 id="resultado"></h3>
`;
}


// PRESSÃO
if(modulo === "pressao"){
area.innerHTML = `
<button onclick="abrirModulo('home')">⬅</button>
<h2>Pressão</h2>
<input id="valorPressao" type="number">
<br><br>
<button onclick="psiParaBar()">PSI → Bar</button>
<button onclick="barParaPsi()">Bar → PSI</button>
<h3 id="resultadoPressao"></h3>
`;
}


// DELTA T
if(modulo === "deltaT"){
area.innerHTML = `
<button onclick="abrirModulo('home')">⬅</button>
<h2>Delta T</h2>
<input id="tempEntrada" placeholder="Temp entrada">
<br><br>
<input id="tempSaida" placeholder="Temp saída">
<br><br>
<button onclick="calcularDeltaT()">Calcular</button>
<h3 id="resultadoDeltaT"></h3>
`;
}


// SUPERHEAT
if(modulo === "superheat"){
area.innerHTML = `
<button onclick="abrirModulo('home')">⬅</button>
<h2>Superaquecimento</h2>
<input id="tempSuc" placeholder="Temp sucção">
<br><br>
<input id="tempEvap" placeholder="Temp evaporação">
<br><br>
<button onclick="calcularSuperheat()">Calcular</button>
<h3 id="resultadoSuperheat"></h3>
`;
}


// SUBCOOL
if(modulo === "subcool"){
area.innerHTML = `
<button onclick="abrirModulo('home')">⬅</button>
<h2>Sub-resfriamento</h2>
<input id="tempCond" placeholder="Temp condensação">
<br><br>
<input id="tempLinhaLiquido" placeholder="Temp linha líquido">
<br><br>
<button onclick="calcularSubcool()">Calcular</button>
<h3 id="resultadoSubcool"></h3>
`;
}


// TEMPO
if(modulo === "tempo"){
area.innerHTML = `
<button onclick="abrirModulo('home')">⬅</button>
<h2>Conversor de Tempo</h2>
<input id="valorTempo">
<br><br>
<button onclick="horasParaMin()">Horas → Min</button>
<button onclick="minParaHoras()">Min → Horas</button>
<h3 id="resultadoTempo"></h3>
`;
}


// ELÉTRICA
if(modulo === "eletrica"){
  area.innerHTML = `
    <button onclick="abrirModulo('home')">⬅ Voltar</button>
    <h2>Lei de Ohm (Completa)</h2>
    <p>Preencha 2 valores para calcular os outros:</p>
    
    <input type="number" id="vOhm" placeholder="Tensão (V)">
    <br><br>
    <input type="number" id="iOhm" placeholder="Corrente (A)">
    <br><br>
    <input type="number" id="rOhm" placeholder="Resistência (Ω)">
    <br><br>
    <input type="number" id="pOhm" placeholder="Potência (W)">
    <br><br>
    
    <button onclick="calcularOhmCompleto()">Calcular</button>
    
    <div id="resultadoOhmWheel" style="margin-top: 20px; line-height: 1.6;"></div>
  `;
}


// TABELA PT
if(modulo === "tabelaPT"){
area.innerHTML = `
<button onclick="abrirModulo('home')">⬅</button>

<h2>Tabela PT</h2>

<input id="gas" placeholder="Ex: R22">

<br><br>

<input id="pressaoPT" placeholder="Pressão (bar)">

<br><br>

<button onclick="buscarPT()">Buscar</button>

<h3 id="resultadoPT"></h3>
`;
}


// DIAGNÓSTICO
if(modulo === "diagnostico"){
area.innerHTML = `
<button onclick="abrirModulo('home')">⬅</button>

<h2>Diagnóstico</h2>

<input id="superheatDiag" placeholder="Superheat (°C)">
<br><br>

<input id="subcoolDiag" placeholder="Subcool (°C)">
<br><br>

<button onclick="gerarDiagnostico()">Analisar</button>

<h3 id="resultadoDiagnostico"></h3>
`;
}


// DIAGNÓSTICO AVANÇADO
if(modulo === "diagnosticoAvancado"){
area.innerHTML = `
<button onclick="abrirModulo('home')">⬅</button>

<h2>Diagnóstico Avançado</h2>

<input id="shA" placeholder="Superheat (°C)">
<br><br>

<input id="scA" placeholder="Subcool (°C)">
<br><br>

<input id="psA" placeholder="Pressão sucção (bar)">
<br><br>

<input id="pdA" placeholder="Pressão descarga (bar)">
<br><br>

<button onclick="diagnosticoAvancado()">Analisar</button>

<h3 id="resultadoAvancado"></h3>
`;
}
// INICIALIZAÇÃO
window.onload = function(){
abrirModulo("home");
}
}