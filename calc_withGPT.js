function calcular() {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const operacao = document.getElementById("operacao").value;

    let resultado;

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, preencha os dois valores.");
        return;
    }

    switch (operacao) {
        case "soma":
            resultado = valor1 + valor2;
            break;
        case "subtracao":
            resultado = valor1 - valor2;
            break;
        case "multiplicacao":
            resultado = valor1 * valor2;
            break;
        case "divisao":
            if (valor2 === 0) {
                alert("Não é possível dividir por zero.");
                return;
            }
            resultado = valor1 / valor2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    alert("O resultado é: " + resultado);
}
