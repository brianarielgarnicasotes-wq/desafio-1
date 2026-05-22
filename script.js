function calcularEnfriamiento() {
    let T0 = parseFloat(document.getElementById("t0").value);
    let Ts = parseFloat(document.getElementById("ts").value);
    let k = parseFloat(document.getElementById("k").value);
    let t = parseFloat(document.getElementById("t").value);

    let T = Ts + (T0 - Ts) * Math.exp(-k * t);
    T = Math.round(T);

    document.getElementById("resultado1").textContent =
        "Temperatura final: " + T;
}
function factorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}
function combinacion(n, r) {
    if (r > n) return 0;
    return factorial(n) / (factorial(r) * factorial(n - r));
}
function calcularCombinaciones() {
    let n1 = parseInt(document.getElementById("n1").value);
    let r1 = parseInt(document.getElementById("r1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let r2 = parseInt(document.getElementById("r2").value);

    let c1 = combinacion(n1, r1);
    let c2 = combinacion(n2, r2);

    let total = c1 * c2;

    document.getElementById("resultado2").textContent =
        "Total combinaciones: " + total;
}
