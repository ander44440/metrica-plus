function calcularOhmCompleto() {
    const vInput = document.getElementById("vOhm").value;
    const iInput = document.getElementById("iOhm").value;
    const rInput = document.getElementById("rOhm").value;
    const pInput = document.getElementById("pOhm").value;

    let V = vInput !== "" ? parseFloat(vInput) : null;
    let I = iInput !== "" ? parseFloat(iInput) : null;
    let R = rInput !== "" ? parseFloat(rInput) : null;
    let P = pInput !== "" ? parseFloat(pInput) : null;

    const res = document.getElementById("resultadoOhmWheel");

    if (V !== null && I !== null) {
        if (I === 0) {
            res.innerHTML = "Valor inválido. Corrente não pode ser zero.";
            return;
        }
        R = V / I;
        P = V * I;

    } else if (V !== null && R !== null) {
        if (R === 0) {
            res.innerHTML = "Valor inválido. Resistência não pode ser zero.";
            return;
        }
        I = V / R;
        P = (V * V) / R;

    } else if (I !== null && R !== null) {
        V = I * R;
        P = (I * I) * R;

    } else if (P !== null && V !== null) {
        if (V === 0) {
            res.innerHTML = "Valor inválido. Tensão não pode ser zero.";
            return;
        }
        I = P / V;
        R = (V * V) / P;

    } else if (P !== null && I !== null) {
        if (I === 0) {
            res.innerHTML = "Valor inválido. Corrente não pode ser zero.";
            return;
        }
        V = P / I;
        R = P / (I * I);

    } else if (P !== null && R !== null) {
        if (P < 0 || R <= 0) {
            res.innerHTML = "Valor inválido. Verifique potência e resistência.";
            return;
        }
        V = Math.sqrt(P * R);
        I = Math.sqrt(P / R);

    } else {
        res.innerHTML = "Por favor, preencha pelo menos dois valores.";
        return;
    }

    if (
        V === null || I === null || R === null || P === null ||
        !isFinite(V) || !isFinite(I) || !isFinite(R) || !isFinite(P) ||
        isNaN(V) || isNaN(I) || isNaN(R) || isNaN(P)
    ) {
        res.innerHTML = "Valor inválido. Verifique os dados informados.";
        return;
    }

    res.innerHTML = `
        <strong>Resultados:</strong><br>
        Tensão: ${V.toFixed(2)} V<br>
        Corrente: ${I.toFixed(2)} A<br>
        Resistência: ${R.toFixed(2)} Ω<br>
        Potência: ${P.toFixed(2)} W
    `;
}
function calcularCapacitancia() {
    const c1Input = document.getElementById("cap1")?.value;
    const c2Input = document.getElementById("cap2")?.value;
    const tipo = document.getElementById("tipoCapacitancia")?.value;
    const res = document.getElementById("resultadoCapacitancia");

    if (!res) return;

    const C1 = c1Input !== "" && c1Input != null ? parseFloat(c1Input) : null;
    const C2 = c2Input !== "" && c2Input != null ? parseFloat(c2Input) : null;

    if (C1 === null || C2 === null || isNaN(C1) || isNaN(C2)) {
        res.innerHTML = "Por favor, informe os dois valores de capacitância.";
        return;
    }

    if (C1 <= 0 || C2 <= 0) {
        res.innerHTML = "Valor inválido. As capacitâncias devem ser maiores que zero.";
        return;
    }

    let resultado = null;
    let formula = "";

    if (tipo === "paralelo") {
        resultado = C1 + C2;
        formula = "Cp = C1 + C2";
    } else if (tipo === "serie") {
        resultado = (C1 * C2) / (C1 + C2);
        formula = "Cs = (C1 × C2) / (C1 + C2)";
    } else {
        res.innerHTML = "Selecione o tipo de associação: série ou paralelo.";
        return;
    }

    if (!isFinite(resultado) || isNaN(resultado)) {
        res.innerHTML = "Não foi possível calcular. Verifique os valores informados.";
        return;
    }

    res.innerHTML = `
        <strong>Resultado:</strong><br>
        Tipo: ${tipo === "serie" ? "Série" : "Paralelo"}<br>
        C1: ${C1.toFixed(2)} µF<br>
        C2: ${C2.toFixed(2)} µF<br>
        Fórmula: ${formula}<br>
        Capacitância equivalente: ${resultado.toFixed(2)} µF
    `;
}

function calcularConsumo() {
  const campoPotencia = document.getElementById("potenciaConsumo");
  const campoHoras = document.getElementById("horasConsumo");
  const campoDias = document.getElementById("diasConsumo");
  const campoTarifa = document.getElementById("tarifaConsumo");
  const res = document.getElementById("resultadoConsumo");

  if (!campoPotencia || !campoHoras || !campoDias || !campoTarifa || !res) {
    console.log("Erro: campos do módulo de consumo não encontrados.");
    return;
  }

  function normalizarNumero(valor) {
    return String(valor).trim().replace(/\s+/g, "").replace(",", ".");
  }

  const pStr = normalizarNumero(campoPotencia.value);
  const hStr = normalizarNumero(campoHoras.value);
  const dStr = normalizarNumero(campoDias.value);
  const tStr = normalizarNumero(campoTarifa.value);

  if (pStr === "" || hStr === "" || dStr === "" || tStr === "") {
    res.innerHTML = "Preencha todos os valores.";
    return;
  }

  const p = Number(pStr);
  const h = Number(hStr);
  const d = Number(dStr);
  const t = Number(tStr);

  if (Number.isNaN(p) || Number.isNaN(h) || Number.isNaN(d) || Number.isNaN(t)) {
    res.innerHTML = "Valor inválido.";
    return;
  }

  if (p <= 0 || h <= 0 || d <= 0 || t <= 0) {
    res.innerHTML = "Os valores devem ser maiores que zero.";
    return;
  }

  const consumo = (p * h * d) / 1000;
  const custo = consumo * t;

  if (!Number.isFinite(consumo) || !Number.isFinite(custo)) {
    res.innerHTML = "Não foi possível calcular. Verifique os dados informados.";
    return;
  }

  res.innerHTML = `
    <strong>Resultado:</strong><br>
    Potência: ${p.toFixed(2)} W<br>
    Uso diário: ${h.toFixed(2)} h<br>
    Dias no mês: ${d.toFixed(0)}<br>
    Tarifa: R$ ${t.toFixed(2)}/kWh<br>
    Consumo: <strong>${consumo.toFixed(2)} kWh/mês</strong><br>
    Custo: <strong>R$ ${custo.toFixed(2)}</strong>
  `;
}