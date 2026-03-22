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
    ],
    "R407C": [
      { p: 3.5, t: -10 },
      { p: 4.3, t: -5 },
      { p: 5.2, t: 0 },
      { p: 6.2, t: 5 },
      { p: 7.3, t: 10 },
      { p: 8.6, t: 15 },
      { p: 10.0, t: 20 }
    ],
    "R507": [
      { p: 3.2, t: -20 },
      { p: 4.3, t: -10 },
      { p: 5.5, t: 0 },
      { p: 6.9, t: 10 },
      { p: 8.4, t: 20 },
      { p: 10.1, t: 30 },
      { p: 12.0, t: 40 }
    ],
    "R290": [
      { p: 2.1, t: -20 },
      { p: 2.9, t: -10 },
      { p: 3.8, t: 0 },
      { p: 4.9, t: 10 },
      { p: 6.2, t: 20 },
      { p: 7.8, t: 30 },
      { p: 9.7, t: 40 }
    ],
    "R600a": [
      { p: 0.5, t: -20 },
      { p: 0.8, t: -10 },
      { p: 1.2, t: 0 },
      { p: 1.7, t: 10 },
      { p: 2.4, t: 20 },
      { p: 3.2, t: 30 },
      { p: 4.3, t: 40 }
    ],
    "R438A": [
      { p: 3.8, t: -10 },
      { p: 4.7, t: -5 },
      { p: 5.7, t: 0 },
      { p: 6.8, t: 5 },
      { p: 8.0, t: 10 },
      { p: 9.4, t: 15 },
      { p: 10.9, t: 20 }
    ],
    "R448A": [
      { p: 3.1, t: -20 },
      { p: 4.2, t: -10 },
      { p: 5.4, t: 0 },
      { p: 6.8, t: 10 },
      { p: 8.4, t: 20 },
      { p: 10.2, t: 30 },
      { p: 12.2, t: 40 }
    ],
    "R449A": [
      { p: 3.0, t: -20 },
      { p: 4.1, t: -10 },
      { p: 5.3, t: 0 },
      { p: 6.7, t: 10 },
      { p: 8.2, t: 20 },
      { p: 10.0, t: 30 },
      { p: 11.9, t: 40 }
    ],
    "R717": [
      { p: 2.0, t: -20 },
      { p: 2.9, t: -10 },
      { p: 4.2, t: 0 },
      { p: 6.0, t: 10 },
      { p: 8.5, t: 20 },
      { p: 11.8, t: 30 },
      { p: 16.0, t: 40 }
    ],
    "R141b": [
      { p: 0.3, t: -10 },
      { p: 0.5, t: 0 },
      { p: 0.8, t: 10 },
      { p: 1.2, t: 20 },
      { p: 1.8, t: 30 },
      { p: 2.5, t: 40 },
      { p: 3.5, t: 50 }
    ],
    "R1234yf": [
      { p: 1.8, t: -10 },
      { p: 2.2, t: -5 },
      { p: 2.7, t: 0 },
      { p: 3.3, t: 5 },
      { p: 3.9, t: 10 },
      { p: 4.6, t: 15 },
      { p: 5.4, t: 20 }
    ],
    "R1234ze": [
      { p: 1.1, t: -10 },
      { p: 1.4, t: -5 },
      { p: 1.8, t: 0 },
      { p: 2.2, t: 5 },
      { p: 2.7, t: 10 },
      { p: 3.3, t: 15 },
      { p: 4.0, t: 20 }
    ],
    "R744": [
      { p: 17.0, t: -20 },
      { p: 20.0, t: -10 },
      { p: 26.0, t: 0 },
      { p: 35.0, t: 10 },
      { p: 45.0, t: 20 },
      { p: 58.0, t: 30 },
      { p: 73.0, t: 40 }
    ],
    "R11": [
      { p: 0.2, t: -10 },
      { p: 0.4, t: 0 },
      { p: 0.7, t: 10 },
      { p: 1.1, t: 20 },
      { p: 1.6, t: 30 },
      { p: 2.3, t: 40 },
      { p: 3.2, t: 50 }
    ],
    "R12": [
      { p: 1.6, t: -10 },
      { p: 2.0, t: -5 },
      { p: 2.5, t: 0 },
      { p: 3.1, t: 5 },
      { p: 3.8, t: 10 },
      { p: 4.6, t: 15 },
      { p: 5.5, t: 20 }
    ],
    "R13": [
      { p: 8.0, t: -40 },
      { p: 10.2, t: -30 },
      { p: 12.8, t: -20 },
      { p: 15.9, t: -10 },
      { p: 19.5, t: 0 },
      { p: 23.7, t: 10 },
      { p: 28.5, t: 20 }
    ],
    "R14": [
      { p: 10.5, t: -80 },
      { p: 13.8, t: -70 },
      { p: 17.8, t: -60 },
      { p: 22.6, t: -50 },
      { p: 28.2, t: -40 },
      { p: 34.7, t: -30 },
      { p: 42.0, t: -20 }
  ],
  "R401A": [
      { p: 3.2, t: -20 },
      { p: 4.1, t: -10 },
      { p: 5.2, t: 0 },
      { p: 6.4, t: 10 },
      { p: 7.8, t: 20 },
      { p: 9.4, t: 30 },
      { p: 11.2, t: 40 }
    ],
    "R402A": [
      { p: 3.4, t: -20 },
      { p: 4.5, t: -10 },
      { p: 5.8, t: 0 },
      { p: 7.2, t: 10 },
      { p: 8.8, t: 20 },
      { p: 10.6, t: 30 },
      { p: 12.7, t: 40 }
    ],
    "R402B": [
      { p: 3.3, t: -20 },
      { p: 4.4, t: -10 },
      { p: 5.6, t: 0 },
      { p: 7.0, t: 10 },
      { p: 8.6, t: 20 },
      { p: 10.4, t: 30 },
      { p: 12.4, t: 40 }
    ],
    "R408A": [
      { p: 3.1, t: -20 },
      { p: 4.2, t: -10 },
      { p: 5.4, t: 0 },
      { p: 6.8, t: 10 },
      { p: 8.3, t: 20 },
      { p: 10.1, t: 30 },
      { p: 12.1, t: 40 }
    ],
    "R407A": [
      { p: 3.3, t: -10 },
      { p: 4.1, t: -5 },
      { p: 5.0, t: 0 },
      { p: 6.0, t: 5 },
      { p: 7.1, t: 10 },
      { p: 8.4, t: 15 },
      { p: 9.8, t: 20 }
    ],
    "R407F": [
      { p: 3.4, t: -20 },
      { p: 4.5, t: -10 },
      { p: 5.8, t: 0 },
      { p: 7.2, t: 10 },
      { p: 8.9, t: 20 },
      { p: 10.8, t: 30 },
      { p: 12.9, t: 40 }
    ],
    "R422D": [
      { p: 3.1, t: -10 },
      { p: 3.9, t: -5 },
      { p: 4.8, t: 0 },
      { p: 5.8, t: 5 },
      { p: 7.0, t: 10 },
      { p: 8.3, t: 15 },
      { p: 9.8, t: 20 }
    ],
    "R427A": [
      { p: 3.0, t: -10 },
      { p: 3.8, t: -5 },
      { p: 4.7, t: 0 },
      { p: 5.7, t: 5 },
      { p: 6.9, t: 10 },
      { p: 8.2, t: 15 },
      { p: 9.7, t: 20 }
    ],
    "R421A": [
      { p: 3.0, t: -10 },
      { p: 3.8, t: -5 },
      { p: 4.7, t: 0 },
      { p: 5.7, t: 5 },
      { p: 6.8, t: 10 },
      { p: 8.1, t: 15 },
      { p: 9.5, t: 20 }
    ],
    "R421B": [
      { p: 3.1, t: -10 },
      { p: 3.9, t: -5 },
      { p: 4.8, t: 0 },
      { p: 5.9, t: 5 },
      { p: 7.1, t: 10 },
      { p: 8.4, t: 15 },
      { p: 9.9, t: 20 }
    ],
    "R422A": [
      { p: 3.2, t: -10 },
      { p: 4.0, t: -5 },
      { p: 4.9, t: 0 },
      { p: 5.9, t: 5 },
      { p: 7.1, t: 10 },
      { p: 8.5, t: 15 },
      { p: 10.0, t: 20 }
    ],
    "R422B": [
      { p: 3.3, t: -10 },
      { p: 4.1, t: -5 },
      { p: 5.0, t: 0 },
      { p: 6.1, t: 5 },
      { p: 7.3, t: 10 },
      { p: 8.7, t: 15 },
      { p: 10.2, t: 20 }
    ],
    "R424A": [
      { p: 3.1, t: -10 },
      { p: 3.9, t: -5 },
      { p: 4.8, t: 0 },
      { p: 5.8, t: 5 },
      { p: 7.0, t: 10 },
      { p: 8.3, t: 15 },
      { p: 9.8, t: 20 }
    ],
    "R434A": [
      { p: 3.0, t: -10 },
      { p: 3.8, t: -5 },
      { p: 4.7, t: 0 },
      { p: 5.7, t: 5 },
      { p: 6.9, t: 10 },
      { p: 8.2, t: 15 },
      { p: 9.7, t: 20 }
    ],
    "R437A": [
      { p: 3.0, t: -10 },
      { p: 3.8, t: -5 },
      { p: 4.7, t: 0 },
      { p: 5.8, t: 5 },
      { p: 7.0, t: 10 },
      { p: 8.4, t: 15 },
      { p: 9.9, t: 20 }
    ],
    "R452A": [
      { p: 3.3, t: -20 },
      { p: 4.4, t: -10 },
      { p: 5.7, t: 0 },
      { p: 7.1, t: 10 },
      { p: 8.7, t: 20 },
      { p: 10.6, t: 30 },
      { p: 12.7, t: 40 }
    ],
    "R452B": [
      { p: 5.8, t: -10 },
      { p: 7.2, t: -5 },
      { p: 8.8, t: 0 },
      { p: 10.7, t: 5 },
      { p: 12.8, t: 10 },
      { p: 15.3, t: 15 },
      { p: 18.1, t: 20 }
    ],
    "R454A": [
      { p: 4.1, t: -10 },
      { p: 5.1, t: -5 },
      { p: 6.2, t: 0 },
      { p: 7.5, t: 5 },
      { p: 9.0, t: 10 },
      { p: 10.7, t: 15 },
      { p: 12.6, t: 20 }
    ],
    "R454B": [
      { p: 5.7, t: -10 },
      { p: 7.1, t: -5 },
      { p: 8.7, t: 0 },
      { p: 10.5, t: 5 },
      { p: 12.7, t: 10 },
      { p: 15.1, t: 15 },
      { p: 17.9, t: 20 }
    ],
    "R454C": [
      { p: 4.0, t: -10 },
      { p: 5.0, t: -5 },
      { p: 6.1, t: 0 },
      { p: 7.4, t: 5 },
      { p: 8.8, t: 10 },
      { p: 10.5, t: 15 },
      { p: 12.4, t: 20 }
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