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

function buscarPT() {
  let fluido = document.getElementById("fluidoPT").value;
  let p = document.getElementById("pressaoPT").value;
  let res = document.getElementById("resultadoPT");

  if (fluido === "") {
    res.innerHTML = "Selecione o fluido.";
    return;
  }

  if (p === "") {
    res.innerHTML = "Digite a pressão.";
    return;
  }

  let pressao = parseFloat(p);

  if (isNaN(pressao)) {
    res.innerHTML = "Valor inválido.";
    return;
  }

  const tabelaPT = {
    "R22": [
      { p: 4.0, t: -5 },
      { p: 5.0, t: 0 },
      { p: 6.0, t: 5 },
      { p: 7.0, t: 10 },
      { p: 8.0, t: 15 },
      { p: 9.0, t: 20 },
      { p: 10.0, t: 25 }
    ],
    "R134a": [
      { p: 1.9, t: -10 },
      { p: 2.3, t: -5 },
      { p: 2.7, t: 0 },
      { p: 3.2, t: 5 },
      { p: 3.7, t: 10 },
      { p: 4.3, t: 15 },
      { p: 5.0, t: 20 }
    ],
    "R404A": [
      { p: 3.0, t: -20 },
      { p: 4.1, t: -10 },
      { p: 5.2, t: 0 },
      { p: 6.5, t: 10 },
      { p: 7.9, t: 20 },
      { p: 9.5, t: 30 },
      { p: 11.3, t: 40 }
    ],
    "R410A": [
      { p: 6.5, t: -10 },
      { p: 8.0, t: -5 },
      { p: 9.7, t: 0 },
      { p: 11.7, t: 5 },
      { p: 14.0, t: 10 },
      { p: 16.7, t: 15 },
      { p: 19.8, t: 20 }
    ],
    "R32": [
      { p: 7.2, t: -10 },
      { p: 8.8, t: -5 },
      { p: 10.7, t: 0 },
      { p: 12.8, t: 5 },
      { p: 15.3, t: 10 },
      { p: 18.1, t: 15 },
      { p: 21.3, t: 20 }
    ]
  };

  let tabela = tabelaPT[fluido];

  if (!tabela) {
    res.innerHTML = "Fluido ainda não disponível na tabela PT.";
    return;
  }

  let pontoExato = tabela.find(function(item) {
    return item.p === pressao;
  });

  if (pontoExato) {
    res.innerHTML =
      "<span class='pt-label'>Fluido:</span> <span class='pt-valor'>" + fluido + "</span><br>" +
      "<span class='pt-label'>Pressão:</span> <span class='pt-valor'>" + pressao.toFixed(2) + " bar</span>" +
      "<span class='pt-temp'>Temperatura de saturação: " + pontoExato.t.toFixed(2) + " °C</span>";
    return;
  }

  let menor = null;
  let maior = null;

  for (let i = 0; i < tabela.length; i++) {
    if (tabela[i].p < pressao) {
      menor = tabela[i];
    }
    if (tabela[i].p > pressao) {
      maior = tabela[i];
      break;
    }
  }

  if (!menor || !maior) {
    res.innerHTML = "Pressão fora da faixa da tabela para " + fluido + ".";
    return;
  }

  let temperaturaInterpolada =
    menor.t + ((pressao - menor.p) * (maior.t - menor.t)) / (maior.p - menor.p);

  res.innerHTML =
    "<span class='pt-label'>Fluido:</span> <span class='pt-valor'>" + fluido + "</span><br>" +
    "<span class='pt-label'>Pressão:</span> <span class='pt-valor'>" + pressao.toFixed(2) + " bar</span>" +
    "<span class='pt-temp'>Temperatura de saturação aproximada: " + temperaturaInterpolada.toFixed(2) + " °C</span>";
}