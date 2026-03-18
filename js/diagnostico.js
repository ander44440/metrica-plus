function gerarDiagnostico(){

let sh = parseFloat(document.getElementById("superheatDiag").value);
let sc = parseFloat(document.getElementById("subcoolDiag").value);

let resultado = "";
let cor = "";

if(isNaN(sh) || isNaN(sc)){
resultado = "Preencha os valores corretamente";
cor = "orange";
}

else if(sh > 15 && sc < 5){
resultado = "Falta de gás";
cor = "red";
}

else if(sh < 5 && sc > 15){
resultado = "Excesso de gás";
cor = "red";
}

else if(sh > 15 && sc > 15){
resultado = "Restrição ou fluxo baixo";
cor = "orange";
}

else if(sh >= 5 && sh <= 15 && sc >= 5 && sc <= 15){
resultado = "Sistema OK";
cor = "green";
}

else{
resultado = "Condição fora do padrão";
cor = "orange";
}

let dica = "";

if(resultado === "Falta de gás"){
dica = "→ Verifique vazamentos e recarregue o sistema";
}

if(resultado === "Excesso de gás"){
dica = "→ Remova o excesso de fluido refrigerante";
}

if(resultado === "Restrição ou fluxo baixo"){
dica = "→ Verifique filtro secador e capilar";
}

if(resultado === "Sistema OK"){
dica = "→ Operação normal";
}

document.getElementById("resultadoDiagnostico").innerHTML =
`<span style="color:${cor}; font-weight:bold;">${resultado}</span><br>${dica}`;
}

function diagnosticoAvancado(){

let sh = parseFloat(document.getElementById("shA").value);
let sc = parseFloat(document.getElementById("scA").value);
let ps = parseFloat(document.getElementById("psA").value);
let pd = parseFloat(document.getElementById("pdA").value);

let resultado = "";
let cor = "";

if(isNaN(sh) || isNaN(sc) || isNaN(ps) || isNaN(pd)){
resultado = "Preencha todos os dados corretamente";
cor = "orange";
}

else if(sh > 15 && sc < 5 && ps < 3){
resultado = "Falta de gás (forte indício)";
cor = "red";
}

else if(sh < 5 && sc > 15 && pd > 18){
resultado = "Excesso de gás";
cor = "red";
}

else if(sh > 15 && sc > 15){
resultado = "Restrição na linha líquida";
cor = "orange";
}

else if(ps < 2 && pd < 10){
resultado = "Baixa eficiência do compressor";
cor = "orange";
}

else if(ps > 3 && pd > 20){
resultado = "Condensador sujo ou ventilação ruim";
cor = "orange";
}

else{
resultado = "Sistema fora de padrão";
cor = "orange";
}

document.getElementById("resultadoAvancado").innerHTML =
`<span style="color:${cor}; font-weight:bold;">${resultado}</span>`;
}