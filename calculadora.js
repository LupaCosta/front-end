soma.addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;

    alert("O resultado da soma é: " + resultado);
});

subtracao.addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 - num2;

    alert("O resultado da subtração é: " + resultado);
});

multiplicacao.addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2;

    alert("O resultado da multiplicação é: " + resultado);
});

divisao.addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 / num2;

    alert("O resultado da divisão é: " + resultado);
});
