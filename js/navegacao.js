import { montarCards } from './templates.js';
import { recuperarCadastro } from './armazenamento.js';
// Navegação por hash: troca o conteúdo sem recarregar o documento.
const conteudo = document.querySelector('#conteudo');
const titulos = {
    inicio: 'Instituto Esperança',
    projetos: 'Projetos e iniciativas',
    cadastro: 'Cadastro de voluntário'
};

export function mostrarPagina(moverFoco = true) {
    let paginaInicial = 'inicio';
    if (location.pathname.endsWith('/projetos.html')) paginaInicial = 'projetos';
    if (location.pathname.endsWith('/cadastro.html')) paginaInicial = 'cadastro';
    const partes = location.hash.slice(1).split('/');
    let pagina = partes[0] || paginaInicial;
    if (!titulos[pagina]) pagina = 'inicio';

    const template = document.querySelector('#pagina-' + pagina);
    conteudo.replaceChildren(template.content.cloneNode(true));
    if (pagina === 'projetos') montarCards();
    if (pagina === 'cadastro') {
        const formulario = document.querySelector('#cadastro');
        formulario.noValidate = true;
        recuperarCadastro(formulario);
    }
    document.querySelector('.flex-header h1').textContent = titulos[pagina];
    document.title = titulos[pagina] + ' - Instituto Esperança';
    document.querySelector('#menu-toggle').checked = false;

    document.querySelectorAll('.flex-menu a').forEach(function (link) {
        link.removeAttribute('aria-current');
        if (link.getAttribute('href') === '#' + pagina) {
            link.setAttribute('aria-current', 'page');
        }
    });
    // Foco e rolagem acompanham a nova seção.
    const secao = partes[1] ? document.getElementById(partes[1]) : null;
    const destino = secao && conteudo.contains(secao) ? secao : conteudo;
    destino.setAttribute('tabindex', '-1');
    if (moverFoco) {
        destino.focus({ preventScroll: true });
        destino.scrollIntoView();
    }
}

// Um único evento continua funcionando após trocar os templates.
document.addEventListener('click', function (evento) {
    const atalho = evento.target.closest('.pular-conteudo');
    if (atalho) {
        evento.preventDefault();
        conteudo.focus();
        conteudo.scrollIntoView();
        return;
    }
    const link = evento.target.closest('.flex-menu a');
    if (link && !evento.ctrlKey && !evento.metaKey && !evento.shiftKey && !evento.altKey) {
        evento.preventDefault();
        const rota = link.getAttribute('href');
        if (location.hash === rota) mostrarPagina();
        else location.hash = rota;
    }


});


