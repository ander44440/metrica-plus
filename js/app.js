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

      <p><strong>Classificação:</strong> ${fluido.classe || fluido.familia || "-"}</p>
      <p><strong>Aplicação:</strong> ${fluido.aplicacao || "-"}</p>

      <p><strong>Óleo compatível:</strong> ${fluido.oleo || "-"}</p>
      <p><strong>Glide:</strong> ${fluido.glide || "-"}</p>

      <p><strong>Segurança:</strong> Inflamável: ${fluido.inflamavel || "-"} | Tóxico: ${fluido.toxico || "-"}</p>
      <p><strong>Cuidado principal:</strong> ${fluido.cuidadoPrincipal || "-"}</p>

      <p><strong>Substitui:</strong> ${fluido.substitui || "-"}</p>
      <p><strong>Substituto por:</strong> ${fluido.substitutoPor || "-"}</p>

      <p><strong>Baixa temperatura:</strong> ${fluido.baixaTemp || "-"}</p>
      <p><strong>Média temperatura:</strong> ${fluido.mediaTemp || "-"}</p>
      <p><strong>Alta temperatura:</strong> ${fluido.altaTemp || "-"}</p>

      <p><strong>Pressão:</strong> ${fluido.pressao || "-"}</p>
      <p><strong>Tipo:</strong> ${fluido.tipo || "-"}</p>
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

        <div class="blocoTecnicoFluidos">
          <h3 class="tituloBlocoFluidos">Consulta de Fluidos</h3>

          <div class="resultadoFluidoTopo" id="resultadoFluidos">
            ERRO: fluidosRefrigerantes não foi carregado.
          </div>
        </div>
      </div>
    `;
  }

  if (!window.fluidosRefrigerantes.length) {
    return `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Régua de Fluidos</h2>

        <div class="blocoTecnicoFluidos">
          <h3 class="tituloBlocoFluidos">Consulta de Fluidos</h3>

          <div class="resultadoFluidoTopo" id="resultadoFluidos">
            ERRO: lista de fluidos vazia.
          </div>
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

      <div class="blocoTecnicoFluidos">
        <h3 class="tituloBlocoFluidos">Consulta de Fluidos</h3>

        <div class="resultadoFluidoTopo" id="resultadoFluidos">
          Toque em um fluido para ver a ficha técnica.
        </div>

        <div class="reguaFluidos">
          ${botoes}
        </div>

        <div id="fichaFluido" class="fichaFluido"></div>
      </div>
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

        <div class="blocoTecnico">
          <h3 class="tituloBlocoTecnico">Conversões de Temperatura</h3>
          <p class="textoApoioBloco">
            Digite um valor e escolha a conversão desejada.
          </p>

          <div class="resultado" id="resultadoTemp">
            O resultado aparecerá aqui
          </div>

          <div class="grupoInputs">
            <input id="valorTemp" placeholder="Digite o valor">

            <div class="gridBotoes2">
              <button onclick="cParaF()">C → F</button>
              <button onclick="fParaC()">F → C</button>

              <button onclick="cParaK()">C → K</button>
              <button onclick="kParaC()">K → C</button>

              <button onclick="cParaRankine()">C → Rk</button>
              <button onclick="rankineParaC()">Rk → C</button>

              <button onclick="fParaK()">F → K</button>
              <button onclick="kParaF()">K → F</button>

              <button onclick="fParaRankine()">F → Rk</button>
              <button onclick="rankineParaF()">Rk → F</button>
            </div>
          </div>
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
    // ================= BTU =================
  else if (modulo === "btu") {
    area.innerHTML = `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">BTU ↔ W</h2>

        <div class="blocoTecnicoAzul">
          <h3 class="tituloBlocoTecnicoAzul">Conversão de Capacidade</h3>
          <p class="textoApoioBloco">
            Digite um valor e escolha a conversão entre BTU/h e watts.
          </p>

          <div class="resultado" id="resultadoBTU">
            O resultado aparecerá aqui
          </div>

          <div class="grupoInputs">
            <input id="valorBTU" placeholder="Digite o valor">

            <div class="gridBotoes2">
              <button onclick="btuParaW()">BTU → W</button>
              <button onclick="wParaBTU()">W → BTU</button>
            </div>
          </div>
        </div>
      </div>
    `;

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
    area.innerHTML = `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Pressão</h2>

        <div class="blocoPressao blocoPressaoPositiva">
          <h3 class="tituloBlocoPressao pressaoPositiva">Pressão Positiva</h3>

          <div class="resultado" id="resultadoPressao">
            O resultado aparecerá aqui
          </div>

          <div class="grupoInputs">
            <input id="valorPressao" placeholder="Digite o valor">

            <button onclick="psiParaBar()">PSI → Bar</button>
            <button onclick="barParaPsi()">Bar → PSI</button>

            <button onclick="psiParaKpa()">PSI → kPa</button>
            <button onclick="kpaParaPsi()">kPa → PSI</button>

            <button onclick="psiParaMpa()">PSI → MPa</button>
            <button onclick="mpaParaPsi()">MPa → PSI</button>

            <button onclick="psiParaKgf()">PSI → kgf/cm²</button>
            <button onclick="kgfParaPsi()">kgf/cm² → PSI</button>

            <button onclick="barParaKpa()">Bar → kPa</button>
            <button onclick="kpaParaBar()">kPa → Bar</button>

            <button onclick="barParaMpa()">Bar → MPa</button>
            <button onclick="mpaParaBar()">MPa → Bar</button>

            <button onclick="barParaKgf()">Bar → kgf/cm²</button>
            <button onclick="kgfParaBar()">kgf/cm² → Bar</button>
          </div>
        </div>

        <div class="blocoPressao blocoVacuo">
          <h3 class="tituloBlocoPressao vacuo">Vácuo</h3>

          <div class="resultado" id="resultadoVacuo">
            O resultado do vácuo aparecerá aqui
          </div>

          <div class="grupoInputs">
            <input id="valorVacuo" placeholder="Digite o valor de vácuo">

            <button onclick="inhgParaMmhg()">inHg → mmHg</button>
            <button onclick="mmhgParaInhg()">mmHg → inHg</button>

            <button onclick="inhgParaMicrons()">inHg → microns</button>
            <button onclick="micronsParaInhg()">microns → inHg</button>

            <button onclick="mmhgParaMicrons()">mmHg → microns</button>
            <button onclick="micronsParaMmhg()">microns → mmHg</button>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const inputPressao = document.getElementById("valorPressao");
      const inputVacuo = document.getElementById("valorVacuo");

      if (inputPressao) {
        inputPressao.focus();
        inputPressao.addEventListener("keypress", function(e) {
          if (e.key === "Enter") {
            psiParaBar();
          }
        });
      }

      if (inputVacuo) {
        inputVacuo.addEventListener("keypress", function(e) {
          if (e.key === "Enter") {
            inhgParaMmhg();
          }
        });
      }
    }, 0);
  }

  // ================= ELÉTRICA =================
  else if (modulo === "eletrica") {
    area.innerHTML = `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Elétrica</h2>

        <div class="blocoTecnico">
          <h3 class="tituloBlocoTecnico">Lei de Ohm</h3>
          <p class="textoApoioBloco">
            Preencha pelo menos dois campos para calcular os demais valores.
          </p>

          <div class="resultado" id="resultadoOhmWheel">
            O resultado aparecerá aqui
          </div>

          <div class="grupoInputs">
            <div class="gridInputs2">
              <input id="vOhm" placeholder="Tensão (V)">
              <input id="iOhm" placeholder="Corrente (A)">
              <input id="rOhm" placeholder="Resistência (Ω)">
              <input id="pOhm" placeholder="Potência (W)">
            </div>

            <button class="botaoDestaque" onclick="calcularOhmCompleto()">Calcular Lei de Ohm</button>
          </div>
        </div>

        <div class="blocoTecnicoVerde">
          <h3 class="tituloBlocoTecnicoVerde">Capacitância</h3>
          <p class="textoApoioBloco">
            Informe os dois capacitores e escolha série ou paralelo.
          </p>

          <div class="resultado" id="resultadoCapacitancia">
            O resultado da capacitância aparecerá aqui
          </div>

          <div class="grupoInputs">
            <div class="gridInputs2">
              <input id="cap1" placeholder="Capacitor 1 (µF)">
              <input id="cap2" placeholder="Capacitor 2 (µF)">

              <select id="tipoCapacitancia">
                <option value="serie">Série</option>
                <option value="paralelo">Paralelo</option>
              </select>
            </div>

            <button class="botaoDestaque" onclick="calcularCapacitancia()">Calcular Capacitância</button>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const v = document.getElementById("vOhm");
      const i = document.getElementById("iOhm");
      const r = document.getElementById("rOhm");
      const p = document.getElementById("pOhm");

      const c1 = document.getElementById("cap1");
      const c2 = document.getElementById("cap2");
      const tipo = document.getElementById("tipoCapacitancia");

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

      [c1, c2, tipo].forEach(input => {
        if (input) {
          input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
              calcularCapacitancia();
            }
          });
        }
      });
    }, 0);
  }

  // ================= DELTA T =================
    // ================= DELTA T =================
  else if (modulo === "deltaT") {
    area.innerHTML = `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Delta T</h2>

        <div class="blocoTecnicoLaranja">
          <h3 class="tituloBlocoTecnicoLaranja">Diferença de Temperatura</h3>
          <p class="textoApoioBloco">
            Informe a temperatura de entrada e a de saída para calcular o Delta T.
          </p>

          <div class="resultado" id="resultadoDeltaT">
            O resultado aparecerá aqui
          </div>

          <div class="grupoInputs">
            <input id="tempEntrada" placeholder="Temp entrada">
            <input id="tempSaida" placeholder="Temp saída">
            <button onclick="calcularDeltaT()">Calcular</button>
          </div>
        </div>
      </div>
    `;

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
    // ================= SUPERHEAT =================
  else if (modulo === "superheat") {
    area.innerHTML = `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Superheat</h2>

        <div class="blocoTecnicoLaranja">
          <h3 class="tituloBlocoTecnicoLaranja">Superaquecimento</h3>
          <p class="textoApoioBloco">
            Informe a temperatura de sucção e a temperatura de evaporação.
          </p>

          <div class="resultado" id="resultadoSuperheat">
            O resultado aparecerá aqui
          </div>

          <div class="grupoInputs">
            <input id="tempSuc" placeholder="Temp sucção">
            <input id="tempEvap" placeholder="Temp evaporação">
            <button onclick="calcularSuperheat()">Calcular</button>
          </div>
        </div>
      </div>
    `;

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
    // ================= SUBCOOL =================
  else if (modulo === "subcool") {
    area.innerHTML = `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Subcool</h2>

        <div class="blocoTecnicoLaranja">
          <h3 class="tituloBlocoTecnicoLaranja">Sub-resfriamento</h3>
          <p class="textoApoioBloco">
            Informe a temperatura de condensação e a da linha de líquido.
          </p>

          <div class="resultado" id="resultadoSubcool">
            O resultado aparecerá aqui
          </div>

          <div class="grupoInputs">
            <input id="tempCond" placeholder="Temp condensação">
            <input id="tempLinhaLiquido" placeholder="Temp linha líquido">
            <button onclick="calcularSubcool()">Calcular</button>
          </div>
        </div>
      </div>
    `;

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
    area.innerHTML = `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Tempo</h2>

        <div class="blocoTecnicoAzul">
          <h3 class="tituloBlocoTecnicoAzul">Conversão de Tempo</h3>
          <p class="textoApoioBloco">
            Digite um valor e escolha a conversão entre horas e minutos.
          </p>

          <div class="resultado" id="resultadoTempo">
            O resultado aparecerá aqui
          </div>

          <div class="grupoInputs">
            <input id="valorTempo" placeholder="Digite o valor">

            <div class="gridBotoes2">
              <button onclick="horasParaMin()">Horas → Min</button>
              <button onclick="minParaHoras()">Min → Horas</button>
            </div>
          </div>
        </div>
      </div>
    `;

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
  // ================= TABELA PT =================
  else if (modulo === "tabelaPT") {
    area.innerHTML = `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Tabela PT</h2>

        <div class="blocoTecnicoPT">
          <h3 class="tituloBlocoPT">Consulta Pressão x Temperatura</h3>
          <p class="textoApoioPT">
            Selecione o fluido, informe a pressão em bar e busque a temperatura correspondente.
          </p>

          <div id="resultadoPT">
            O resultado aparecerá aqui
          </div>

          <div class="grupoInputs">
            <label class="labelTecnica" for="fluidoPT">Selecione o fluido:</label>
            <select id="fluidoPT">
              <option value="">-- Escolha --</option>
              <option value="R22">R22</option>
              <option value="R134a">R134a</option>
              <option value="R404A">R404A</option>
              <option value="R410A">R410A</option>
              <option value="R32">R32</option>
              <option value="R407C">R407C</option>
              <option value="R507">R507</option>
              <option value="R290">R290</option>
              <option value="R600a">R600a</option>
              <option value="R438A">R438A</option>
              <option value="R448A">R448A</option>
              <option value="R449A">R449A</option>
              <option value="R717">R717</option>
              <option value="R141b">R141b</option>
              <option value="R1234yf">R1234yf</option>
              <option value="R1234ze">R1234ze</option>
              <option value="R744">R744</option>
              <option value="R11">R11</option>
              <option value="R12">R12</option>
              <option value="R13">R13</option>
              <option value="R14">R14</option>
              <option value="R401A">R401A</option>
              <option value="R402A">R402A</option>
              <option value="R402B">R402B</option>
              <option value="R408A">R408A</option>
              <option value="R407A">R407A</option>
              <option value="R407F">R407F</option>
              <option value="R422D">R422D</option>
              <option value="R427A">R427A</option>
              <option value="R421A">R421A</option>
              <option value="R421B">R421B</option>
              <option value="R422A">R422A</option>
              <option value="R422B">R422B</option>
              <option value="R424A">R424A</option>
              <option value="R434A">R434A</option>
              <option value="R437A">R437A</option>
              <option value="R452A">R452A</option>
              <option value="R452B">R452B</option>
              <option value="R454A">R454A</option>
              <option value="R454B">R454B</option>
              <option value="R454C">R454C</option>
            </select>

            <label class="labelTecnica" for="pressaoPT">Pressão (bar):</label>
            <input type="number" id="pressaoPT" placeholder="Ex: 8.5" step="0.1">

            <button onclick="buscarPT()">Buscar Temperatura</button>
          </div>
        </div>
      </div>
    `;

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
    // ================= DIAGNÓSTICO =================
  else if (modulo === "diagnostico") {
    area.innerHTML = `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Diagnóstico</h2>

        <div class="blocoTecnicoVermelho">
          <h3 class="tituloBlocoTecnicoVermelho">Análise Base</h3>
          <p class="textoApoioBloco">
            Informe superheat e subcool para gerar uma leitura técnica inicial.
          </p>

          <div class="resultado" id="resultadoDiagnostico">
            O resultado aparecerá aqui
          </div>

          <div class="grupoInputs">
            <input id="superheatDiag" placeholder="Superheat (°C)">
            <input id="subcoolDiag" placeholder="Subcool (°C)">
            <button onclick="gerarDiagnostico()">Analisar</button>
          </div>
        </div>
      </div>
    `;

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
    // ================= DIAGNÓSTICO AVANÇADO =================
  else if (modulo === "diagnosticoAvancado") {
    area.innerHTML = `
      <div class="moduloPadrao">
        <button onclick="abrirModulo('home')" class="btn-voltar">⬅</button>
        <h2 class="titulo-modulo">Diagnóstico Avançado</h2>

        <div class="blocoTecnicoRoxo">
          <h3 class="tituloBlocoTecnicoRoxo">Análise Expandida</h3>
          <p class="textoApoioBloco">
            Informe superheat, subcool, pressão de sucção e pressão de descarga.
          </p>

          <div class="resultado" id="resultadoAvancado">
            O resultado aparecerá aqui
          </div>

          <div class="grupoInputs">
            <input id="shA" placeholder="Superheat (°C)">
            <input id="scA" placeholder="Subcool (°C)">
            <input id="psA" placeholder="Pressão sucção (bar)">
            <input id="pdA" placeholder="Pressão descarga (bar)">
            <button onclick="diagnosticoAvancado()">Analisar</button>
          </div>
        </div>
      </div>
    `;

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