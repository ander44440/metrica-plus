function calcularOhmCompleto() {
    // Capturamos os valores e usamos !isNaN para verificar se foram preenchidos
    const vInput = document.getElementById("vOhm").value;
    const iInput = document.getElementById("iOhm").value;
    const rInput = document.getElementById("rOhm").value;
    const pInput = document.getElementById("pOhm").value;

    let V = vInput !== "" ? parseFloat(vInput) : null;
    let I = iInput !== "" ? parseFloat(iInput) : null;
    let R = rInput !== "" ? parseFloat(rInput) : null;
    let P = pInput !== "" ? parseFloat(pInput) : null;

    const res = document.getElementById("resultadoOhmWheel");

    // Lógica para cobrir as principais combinações da Lei de Ohm
    if (V !== null && I !== null) {
        R = V / I;
        P = V * I;
    } else if (V !== null && R !== null) {
        I = V / R;
        P = (V * V) / R;
    } else if (I !== null && R !== null) {
        V = I * R;
        P = (I * I) * R;
    } else if (P !== null && V !== null) {
        I = P / V;
        R = (V * V) / P;
    } else if (P !== null && I !== null) {
        V = P / I;
        R = P / (I * I);
    } else if (P !== null && R !== null) {
        V = Math.sqrt(P * R);
        I = Math.sqrt(P / R);
    } else {
        res.innerHTML = "Por favor, preencha pelo menos dois valores.";
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

function calcularConsumo() {
    const pot = parseFloat(document.getElementById("potencia").value);
    const hrs = parseFloat(document.getElementById("horas").value);
    const res = document.getElementById("resultadoConsumo");

    if (isNaN(pot) || isNaN(hrs)) {
        res.innerHTML = "Preencha os valores corretamente.";
        return;
    }

    const consumo = (pot * hrs) / 1000;
    res.innerHTML = `Consumo: <strong>${consumo.toFixed(2)} kWh</strong>`;
}