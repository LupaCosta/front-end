document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita o envio real do formulário

        const login = document.getElementById("login").value.trim();
        const senha = document.getElementById("senha").value.trim();

        // Validação simples
        if (login === "" || senha === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Exemplo de login e senha corretos
        const loginCorreto = "luis.14costa@gmail.com";
        const senhaCorreta = "1234";

        if (login === loginCorreto && senha === senhaCorreta) {
            alert("Login bem-sucedido!");
            window.location.href = "flamengo.html"; // Redireciona para a página do dashboard
            // Aqui você pode redirecionar: window.location.href = "dashboard.html";
        } else {
            alert("Login ou senha incorretos. Tente novamente.");
        }
    });
});
