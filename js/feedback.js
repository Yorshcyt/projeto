// Controla a exibição dos exemplos de modal e toast.
document.addEventListener('click', function (evento) {
    const botao = evento.target.closest('[data-acao]');
    if (!botao) return;
    const modal = document.querySelector('#modal');
    const toast = document.querySelector('#toast');
    const acao = botao.dataset.acao;
    if (acao === 'abrir-modal') modal.classList.add('aberto');
    if (acao === 'mostrar-toast') toast.classList.add('aberto');
    if (acao === 'fechar-feedback') {
        modal.classList.remove('aberto');
        toast.classList.remove('aberto');
    }
});
