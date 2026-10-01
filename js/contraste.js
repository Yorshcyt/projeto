const botaoContraste = document.getElementById('alternar-contraste');

function aplicarContraste(ativado) {
    document.body.classList.toggle('alto-contraste', ativado);
    botaoContraste.setAttribute('aria-pressed', String(ativado));
}

// Recupera a preferência salva neste navegador.
try {
    aplicarContraste(localStorage.getItem('instituto-alto-contraste') === 'true');
} catch (erro) {
    aplicarContraste(false);
}

botaoContraste.addEventListener('click', function () {
    const ativado = !document.body.classList.contains('alto-contraste');
    aplicarContraste(ativado);
    // O botão continua funcionando se o armazenamento estiver indisponível.
    try {
        localStorage.setItem('instituto-alto-contraste', String(ativado));
    } catch (erro) {
        console.warn('Não foi possível salvar a preferência de contraste.');
    }
});
