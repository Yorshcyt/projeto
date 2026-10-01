// Cria os cards a partir do modelo HTML e dos dados dos projetos.
function montarCards() {
    const lista = document.querySelector('#lista-projetos');
    const modelo = document.querySelector('#modelo-card');
    projetos.forEach(function (projeto) {
        const copia = modelo.content.cloneNode(true);
        copia.querySelector('section').id = projeto.id;
        copia.querySelector('.titulo-card').textContent = projeto.titulo;
        copia.querySelector('.subtitulo-card').textContent = projeto.subtitulo;
        copia.querySelector('.descricao-card').textContent = projeto.descricao;
        lista.appendChild(copia);
    });
}

