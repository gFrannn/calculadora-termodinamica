document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculator-form");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const Tm = parseFloat(document.getElementById("Tm").value);
        const As = parseFloat(document.getElementById("As").value);
        const z = parseFloat(document.getElementById("z").value);
        const t = parseFloat(document.getElementById("t").value);
        const to = parseFloat(document.getElementById("to").value);
        const alpha = parseFloat(document.getElementById("alpha").value);

        const termino1 = Tm;
        const termino2 =
            As *
            Math.exp(
                -z *
                Math.sqrt((Math.PI / 365) * alpha)
            ) *
            Math.cos(
                (2 * Math.PI / 365) *
                (t - to - (z / 2) * Math.sqrt((365 / Math.PI) * alpha))
            );
        const temperatura = termino1 - termino2;

        resultado.textContent = `La temperatura T (Profundidad: ${z}m, Día Nº: ${t}) es: ${temperatura.toFixed(2)}°C`;
    });
});
