// O dialog nativo mantém o foco no modal e permite fechar com Escape.
let botaoModal;
let botaoToast;
document.addEventListener('click', function (evento) {
    const botao = evento.target.closest('[data-acao]');
    if (!botao) return;
    const modal = document.querySelector('#modal');
    const toast = document.querySelector('#toast');
    const acao = botao.dataset.acao;
    if (acao === 'abrir-modal') {
        botaoModal = botao;
        modal.showModal();
    }
    if (acao === 'fechar-modal') modal.close();
    if (acao === 'mostrar-toast') {
        botaoToast = botao;
        toast.classList.add('aberto');
        toast.querySelector('button').focus();
    }
    if (acao === 'fechar-toast') {
        toast.classList.remove('aberto');
        if (botaoToast && botaoToast.isConnected) botaoToast.focus();
    }
});

// close não propaga normalmente; a captura também funciona nos templates.
document.addEventListener('close', function (evento) {
    if (evento.target.id === 'modal' && botaoModal && botaoModal.isConnected) {
        botaoModal.focus();
    }
}, true);
