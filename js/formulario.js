// Eventos delegados: funcionam mesmo após a SPA recriar o formulário.
function conferirCampo(campo) {
    const valido = campo.validity.valid;
    campo.classList.toggle('campo-invalido', !valido);
    campo.setAttribute('aria-invalid', String(!valido));
    return valido;
}

// Confere o campo conforme o usuário muda seu valor.
document.addEventListener('input', function (evento) {
    const campo = evento.target;
    if (!campo.matches('#cadastro input')) return;
    aplicarMascara(campo);
    conferirCampo(campo);
    salvarCadastro(campo.form);
    document.querySelector('#feedback-cadastro').hidden = true;
});

// Impede o envio normal para continuar dentro da SPA.
document.addEventListener('submit', function (evento) {
    const formulario = evento.target;
    if (formulario.id !== 'cadastro') return;
    evento.preventDefault();
    let primeiroErro = null;
    formulario.querySelectorAll('input').forEach(function (campo) {
        if (!conferirCampo(campo) && !primeiroErro) primeiroErro = campo;
    });

    const feedback = document.querySelector('#feedback-cadastro');
    feedback.hidden = false;
    if (primeiroErro) {
        feedback.className = 'alert alert-erro';
        feedback.textContent = 'Confira os campos destacados antes de enviar.';
        primeiroErro.focus();
    } else {
        const salvou = salvarCadastro(formulario);
        feedback.className = salvou ? 'alert alert-sucesso' : 'alert alert-erro';
        feedback.textContent = salvou
            ? 'Dados válidos e salvos neste navegador. Nenhum dado foi enviado a um servidor.'
            : 'Dados válidos, mas não foi possível salvar neste navegador.';
    }
});
