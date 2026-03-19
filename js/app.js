function abrirModulo(modulo) {

let area = document.getElementById("modulo");

// ===== LAYOUT PADRÃO (NÃO MEXER NOS IDs) =====
function layout(titulo, resultadoId, inputs) {
return `
<div class="moduloPadrao">

<button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>

<h2 class="titulo-modulo">${titulo}</h2>

<div class="resultado" id="${resultadoId}">
O resultado aparecerá aqui
</div>

<div class="grupoInputs">
${inputs}
</div>

</div>
`;
}

// ================= HOME =================
if(modulo === "home"){
area.innerHTML = `
<div class="homeTela">

<h1>Painel Técnico</h1>

<div class="homeModulos">

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

</div>

</div>
`;
}

// ================= TEMPERATURA =================
else if(modulo === "temperatura"){
area.innerHTML = `
<div class="moduloPadrao">
  <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
  <h2 class="titulo-modulo">Temperatura</h2>

 <div class="resultado" id="resultadoTemp">
    O resultado aparecerá aqui
  </div>

  <div class="grupoInputs">
    <input id="valorTemp" placeholder="Digite o valor">
    <button onclick="cParaF2()">C → F</button>
    <button onclick="fParaC2()">F → C</button>
  </div>
</div>
`;
}

// ================= BTU =================
else if(modulo === "btu"){
area.innerHTML = layout("BTU ↔ W","resultado",`
<input id="valorBTU" placeholder="Digite o valor">
<button onclick="btuParaW()">BTU → W</button>
<button onclick="wParaBTU()">W → BTU</button>
`);
}

// ================= PRESSÃO =================
else if(modulo === "pressao"){
area.innerHTML = layout("Pressão","resultadoPressao",`
<input id="valorPressao" placeholder="Digite o valor">
<button onclick="psiParaBar()">PSI → Bar</button>
<button onclick="barParaPsi()">Bar → PSI</button>
`);
}

// ================= ELÉTRICA =================
else if(modulo === "eletrica"){
area.innerHTML = layout("Lei de Ohm","resultadoOhmWheel",`
<input id="vOhm" placeholder="Tensão (V)">
<input id="iOhm" placeholder="Corrente (A)">
<input id="rOhm" placeholder="Resistência (Ω)">
<input id="pOhm" placeholder="Potência (W)">
<button onclick="calcularOhmCompleto()">Calcular</button>
`);
}

// ================= DELTA T =================
else if(modulo === "deltaT"){
area.innerHTML = layout("Delta T","resultadoDeltaT",`
<input id="tempEntrada" placeholder="Temp entrada">
<input id="tempSaida" placeholder="Temp saída">
<button onclick="calcularDeltaT()">Calcular</button>
`);
}

// ================= SUPERHEAT =================
else if(modulo === "superheat"){
area.innerHTML = layout("Superheat","resultadoSuperheat",`
<input id="tempSuc" placeholder="Temp sucção">
<input id="tempEvap" placeholder="Temp evaporação">
<button onclick="calcularSuperheat()">Calcular</button>
`);
}

// ================= SUBCOOL =================
else if(modulo === "subcool"){
area.innerHTML = layout("Subcool","resultadoSubcool",`
<input id="tempCond" placeholder="Temp condensação">
<input id="tempLinhaLiquido" placeholder="Temp linha líquido">
<button onclick="calcularSubcool()">Calcular</button>
`);
}

// ================= TEMPO =================
else if(modulo === "tempo"){
area.innerHTML = layout("Tempo","resultadoTempo",`
<input id="valorTempo" placeholder="Digite o valor">
<button onclick="horasParaMin()">Horas → Min</button>
<button onclick="minParaHoras()">Min → Horas</button>
`);
}

// ================= TABELA PT =================
else if(modulo === "tabelaPT"){
area.innerHTML = layout("Tabela PT","resultadoPT",`
<input id="pressaoPT" placeholder="Pressão (bar)">
<button onclick="buscarPT()">Buscar</button>
`);
}

// ================= DIAGNÓSTICO =================
else if(modulo === "diagnostico"){
area.innerHTML = layout("Diagnóstico","resultadoDiagnostico",`
<input id="superheatDiag" placeholder="Superheat (°C)">
<input id="subcoolDiag" placeholder="Subcool (°C)">
<button onclick="gerarDiagnostico()">Analisar</button>
`);
}

// ================= DIAGNÓSTICO AVANÇADO =================
else if(modulo === "diagnosticoAvancado"){
area.innerHTML = layout("Diagnóstico Avançado","resultadoAvancado",`
<input id="shA" placeholder="Superheat (°C)">
<input id="scA" placeholder="Subcool (°C)">
<input id="psA" placeholder="Pressão sucção (bar)">
<input id="pdA" placeholder="Pressão descarga (bar)">
<button onclick="diagnosticoAvancado()">Analisar</button>
`);
}

}

// ===== INICIALIZAÇÃO =====
window.onload = () => abrirModulo("home");