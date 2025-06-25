btn_enviar.addEventListener('click', function(event) {

    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    if (idade >= 18) {
        alert(`Olá ${nome}, você é maior de idade, sua idade é ${idade} anos!`);
    } else {
        alert(`Olá ${nome}, você é menor de idade, sua idade é ${idade} anos!`);
    }

});

