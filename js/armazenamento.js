// Guarda um único preenchimento do cadastro neste navegador.
const chaveCadastro = 'instituto-cadastro';

function salvarCadastro(formulario) {
    const dados = {};
    formulario.querySelectorAll('input').forEach(function (campo) {
        dados[campo.name] = campo.value;
    });
    try {
        localStorage.setItem(chaveCadastro, JSON.stringify(dados));
        return true;
    } catch (erro) {
        return false;
    }
}

function recuperarCadastro(formulario) {
    try {
        const texto = localStorage.getItem(chaveCadastro);
        if (!texto) return;
        const dados = JSON.parse(texto);
        if (!dados || typeof dados !== 'object' || Array.isArray(dados)) return;
        formulario.querySelectorAll('input').forEach(function (campo) {
            if (typeof dados[campo.name] === 'string') {
                campo.value = dados[campo.name];
                if (campo.id === 'cpf') campo.value = formatarCPF(campo.value);
                if (campo.id === 'telefone') campo.value = formatarTelefone(campo.value);
                if (campo.id === 'cep') campo.value = formatarCEP(campo.value);
            }
        });
    } catch (erro) {
        // Se o armazenamento falhar ou o JSON estiver incorreto, mantém os campos vazios.
    }
}
