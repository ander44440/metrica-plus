function renderizarFichaFluido(idFluido) {
  const areaFicha = document.getElementById("fichaFluido");
  const areaResultado = document.getElementById("resultadoFluidos");

  if (!areaFicha || !window.fluidosRefrigerantes) return;

  const fluido = window.fluidosRefrigerantes.find(function(f) {
    return f.id === idFluido;
  });

  if (!fluido) return;

  areaFicha.innerHTML = `
    <div class="cardFluido">
      <h3>${fluido.nome || "-"}</h3>
      <p><strong>Família:</strong> ${fluido.familia || "-"}</p>
      <p><strong>Classe:</strong> ${fluido.classe || "-"}</p>
      <p><strong>Pressão:</strong> ${fluido.pressao || "-"}</p>
      <p><strong>Aplicação:</strong> ${fluido.aplicacao || "-"}</p>
      <p><strong>Óleo:</strong> ${fluido.oleo || "-"}</p>
      <p><strong>Glide:</strong> ${fluido.glide || "-"}</p>
      <p><strong>Tipo:</strong> ${fluido.tipo || "-"}</p>
      <p><strong>Substitui:</strong> ${fluido.substitui || "-"}</p>
      <p><strong>Substituto por:</strong> ${fluido.substitutoPor || "-"}</p>
      <p><strong>Baixa temperatura:</strong> ${fluido.baixaTemp || "-"}</p>
      <p><strong>Média temperatura:</strong> ${fluido.mediaTemp || "-"}</p>
      <p><strong>Alta temperatura:</strong> ${fluido.altaTemp || "-"}</p>
      <p><strong>Residencial:</strong> ${fluido.residencial || "-"}</p>
      <p><strong>Comercial:</strong> ${fluido.comercial || "-"}</p>
      <p><strong>Industrial:</strong> ${fluido.industrial || "-"}</p>
      <p><strong>Automotivo:</strong> ${fluido.automotivo || "-"}</p>
      <p><strong>Inflamável:</strong> ${fluido.inflamavel || "-"}</p>
      <p><strong>Tóxico:</strong> ${fluido.toxico || "-"}</p>
      <p><strong>Cuidado principal:</strong> ${fluido.cuidadoPrincipal || "-"}</p>
      <p><strong>Manuseio:</strong> ${fluido.manuseio || "-"}</p>
      <p><strong>Nota técnica:</strong> ${fluido.notaTecnica || "-"}</p>
    </div>
  `;

  if (areaResultado) {
    areaResultado.innerHTML = `Ficha técnica de <strong>${fluido.nome || "-"}</strong>`;
  }

  document.querySelectorAll(".botaoFluido").forEach(function(botao) {
    botao.classList.remove("ativo");
  });

  const botaoAtivo = document.querySelector(`[data-fluido="${idFluido}"]`);
  if (botaoAtivo) {
    botaoAtivo.classList.add("ativo");
  }
}

function montarReguaFluidos() {
  if (!window.fluidosRefrigerantes) {
    return `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Régua de Fluidos</h2>
        <div class="resultado" id="resultadoFluidos">
          ERRO: fluidosRefrigerantes não foi carregado.
        </div>
      </div>
    `;
  }

  if (!window.fluidosRefrigerantes.length) {
    return `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Régua de Fluidos</h2>
        <div class="resultado" id="resultadoFluidos">
          ERRO: lista de fluidos vazia.
        </div>
      </div>
    `;
  }

  const botoes = window.fluidosRefrigerantes.map(function(fluido) {
    return `
      <button class="botaoFluido" data-fluido="${fluido.id}" onclick="renderizarFichaFluido('${fluido.id}')">
        ${fluido.nome}
      </button>
    `;
  }).join("");

  return `
    <div class="moduloPadrao">
      <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
      <h2 class="titulo-modulo">Régua de Fluidos</h2>

      <div class="resultado" id="resultadoFluidos">
        Toque em um fluido para ver a ficha técnica.
      </div>

      <div class="reguaFluidos">
        ${botoes}
      </div>

      <div id="fichaFluido" class="fichaFluido"></div>
    </div>
  `;
}


function abrirMenuLateral() {
  const menu = document.getElementById("menuLateral");
  const overlay = document.getElementById("overlayMenu");

  if (menu && overlay) {
    menu.classList.add("aberto");
    overlay.classList.add("ativo");
    document.body.style.overflow = "hidden";
  }
}

function fecharMenuLateral() {
  const menu = document.getElementById("menuLateral");
  const overlay = document.getElementById("overlayMenu");

  if (menu && overlay) {
    menu.classList.remove("aberto");
    overlay.classList.remove("ativo");
    document.body.style.overflow = "";
  }
}

function navegarModulo(modulo) {
  fecharMenuLateral();
  abrirModulo(modulo);
}

function abrirModulo(modulo) {
  let area = document.getElementById("modulo");
  if (!area) return;

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
  if (modulo === "home") {
    area.innerHTML = `
      <div class="homeTela">

        <img src="img/logo-metrica.png" class="logoHome">

        <div class="boasVindasBox">
          <h2>Painel Técnico</h2>
          <p>Olá, Técnico.<br>Estou aqui para facilitar o seu trabalho.</p>

          <div class="barra-loading">
            <div class="progresso-loading"></div>
          </div>
        </div>

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
          <div class="card" onclick="abrirModulo('fluidos')">🧪<h3>Régua de Fluidos</h3></div>
        </div>

      </div>
    `;
  }

  // ================= TEMPERATURA =================
  else if (modulo === "temperatura") {
    area.innerHTML = `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Temperatura</h2>

        <div class="resultado" id="resultadoTemp">
          O resultado aparecerá aqui
        </div>

        <div class="grupoInputs">
          <input id="valorTemp" placeholder="Digite o valor">
          <button onclick="cParaF()">C → F</button>
          <button onclick="fParaC()">F → C</button>
        </div>
      </div>
    `;

    setTimeout(() => {
      const input = document.getElementById("valorTemp");

      if (input) {
        input.focus();
        input.addEventListener("keypress", function(e) {
          if (e.key === "Enter") {
            cParaF();
          }
        });
      }
    }, 0);
  }

  // ================= BTU =================
  else if (modulo === "btu") {
    area.innerHTML = layout("BTU ↔ W", "resultado", `
      <input id="valorBTU" placeholder="Digite o valor">
      <button onclick="btuParaW()">BTU → W</button>
      <button onclick="wParaBTU()">W → BTU</button>
    `);

    setTimeout(() => {
      const input = document.getElementById("valorBTU");

      if (input) {
        input.focus();
        input.addEventListener("keypress", function(e) {
          if (e.key === "Enter") {
            btuParaW();
          }
        });
      }
    }, 0);
  }

  // ================= PRESSÃO =================
  else if (modulo === "pressao") {
    area.innerHTML = layout("Pressão", "resultadoPressao", `
      <input id="valorPressao" placeholder="Digite o valor">
      <button onclick="psiParaBar()">PSI → Bar</button>
      <button onclick="barParaPsi()">Bar → PSI</button>
    `);

    setTimeout(() => {
      const input = document.getElementById("valorPressao");

      if (input) {
        input.focus();
        input.addEventListener("keypress", function(e) {
          if (e.key === "Enter") {
            psiParaBar();
          }
        });
      }
    }, 0);
  }

  // ================= ELÉTRICA =================
  else if (modulo === "eletrica") {
    area.innerHTML = layout("Lei de Ohm", "resultadoOhmWheel", `
      <input id="vOhm" placeholder="Tensão (V)">
      <input id="iOhm" placeholder="Corrente (A)">
      <input id="rOhm" placeholder="Resistência (Ω)">
      <input id="pOhm" placeholder="Potência (W)">
      <button onclick="calcularOhmCompleto()">Calcular</button>
    `);

    setTimeout(() => {
      const v = document.getElementById("vOhm");
      const i = document.getElementById("iOhm");
      const r = document.getElementById("rOhm");
      const p = document.getElementById("pOhm");

      if (v) v.focus();

      [v, i, r, p].forEach(input => {
        if (input) {
          input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
              calcularOhmCompleto();
            }
          });
        }
      });
    }, 0);
  }

  // ================= DELTA T =================
  else if (modulo === "deltaT") {
    area.innerHTML = layout("Delta T", "resultadoDeltaT", `
      <input id="tempEntrada" placeholder="Temp entrada">
      <input id="tempSaida" placeholder="Temp saída">
      <button onclick="calcularDeltaT()">Calcular</button>
    `);

    setTimeout(() => {
      const entrada = document.getElementById("tempEntrada");
      const saida = document.getElementById("tempSaida");

      if (entrada) entrada.focus();

      [entrada, saida].forEach(input => {
        if (input) {
          input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
              calcularDeltaT();
            }
          });
        }
      });
    }, 0);
  }

  // ================= SUPERHEAT =================
  else if (modulo === "superheat") {
    area.innerHTML = layout("Superheat", "resultadoSuperheat", `
      <input id="tempSuc" placeholder="Temp sucção">
      <input id="tempEvap" placeholder="Temp evaporação">
      <button onclick="calcularSuperheat()">Calcular</button>
    `);

    setTimeout(() => {
      const suc = document.getElementById("tempSuc");
      const evap = document.getElementById("tempEvap");

      if (suc) suc.focus();

      [suc, evap].forEach(input => {
        if (input) {
          input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
              calcularSuperheat();
            }
          });
        }
      });
    }, 0);
  }

  // ================= SUBCOOL =================
  else if (modulo === "subcool") {
    area.innerHTML = layout("Subcool", "resultadoSubcool", `
      <input id="tempCond" placeholder="Temp condensação">
      <input id="tempLinhaLiquido" placeholder="Temp linha líquido">
      <button onclick="calcularSubcool()">Calcular</button>
    `);

    setTimeout(() => {
      const cond = document.getElementById("tempCond");
      const liquido = document.getElementById("tempLinhaLiquido");

      if (cond) cond.focus();

      [cond, liquido].forEach(input => {
        if (input) {
          input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
              calcularSubcool();
            }
          });
        }
      });
    }, 0);
  }

  // ================= TEMPO =================
  else if (modulo === "tempo") {
    area.innerHTML = layout("Tempo", "resultadoTempo", `
      <input id="valorTempo" placeholder="Digite o valor">
      <button onclick="horasParaMin()">Horas → Min</button>
      <button onclick="minParaHoras()">Min → Horas</button>
    `);

    setTimeout(() => {
      const input = document.getElementById("valorTempo");

      if (input) {
        input.focus();
        input.addEventListener("keypress", function(e) {
          if (e.key === "Enter") {
            horasParaMin();
          }
        });
      }
    }, 0);
  }

  // ================= TABELA PT =================
  else if (modulo === "tabelaPT") {
    area.innerHTML = layout("Tabela PT", "resultadoPT", `
      <input id="pressaoPT" placeholder="Pressão (bar)">
      <button onclick="buscarPT()">Buscar</button>
    `);

    setTimeout(() => {
      const input = document.getElementById("pressaoPT");

      if (input) {
        input.focus();
        input.addEventListener("keypress", function(e) {
          if (e.key === "Enter") {
            buscarPT();
          }
        });
      }
    }, 0);
  }

  // ================= DIAGNÓSTICO =================
  else if (modulo === "diagnostico") {
    area.innerHTML = layout("Diagnóstico", "resultadoDiagnostico", `
      <input id="superheatDiag" placeholder="Superheat (°C)">
      <input id="subcoolDiag" placeholder="Subcool (°C)">
      <button onclick="gerarDiagnostico()">Analisar</button>
    `);

    setTimeout(() => {
      const sh = document.getElementById("superheatDiag");
      const sc = document.getElementById("subcoolDiag");

      if (sh) sh.focus();

      [sh, sc].forEach(input => {
        if (input) {
          input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
              gerarDiagnostico();
            }
          });
        }
      });
    }, 0);
  }

  // ================= DIAGNÓSTICO AVANÇADO =================
  else if (modulo === "diagnosticoAvancado") {
    area.innerHTML = layout("Diagnóstico Avançado", "resultadoAvancado", `
      <input id="shA" placeholder="Superheat (°C)">
      <input id="scA" placeholder="Subcool (°C)">
      <input id="psA" placeholder="Pressão sucção (bar)">
      <input id="pdA" placeholder="Pressão descarga (bar)">
      <button onclick="diagnosticoAvancado()">Analisar</button>
    `);

    setTimeout(() => {
      const sh = document.getElementById("shA");
      const sc = document.getElementById("scA");
      const ps = document.getElementById("psA");
      const pd = document.getElementById("pdA");

      if (sh) sh.focus();

      [sh, sc, ps, pd].forEach(input => {
        if (input) {
          input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
              diagnosticoAvancado();
            }
          });
        }
      });
    }, 0);
  }

  // ================= FLUIDOS =================
 else if (modulo === "fluidos") {
  area.innerHTML = montarReguaFluidos();

  setTimeout(() => {
    if (window.fluidosRefrigerantes && window.fluidosRefrigerantes.length > 0) {
      renderizarFichaFluido(window.fluidosRefrigerantes[0].id);
    }
  }, 0);
}
}

// ===== INICIALIZAÇÃO =====
window.onload = () => {
  fecharMenuLateral();
  abrirModulo("home");
};