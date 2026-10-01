// Mantém apenas números e acrescenta a pontuação aos poucos.
function formatarCPF(valor) {
    return valor.replace(/\D/g, '').slice(0, 11)
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3}\.\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3}\.\d{3}\.\d{3})(\d)/, '$1-$2');
}

// Formato de celular já usado no formulário: DDD e nove dígitos.
function formatarTelefone(valor) {
    const numeros = valor.replace(/\D/g, '').slice(0, 11);
    if (!numeros) return '';
    if (numeros.length <= 2) return '(' + numeros;
    return '(' + numeros.slice(0, 2) + ') ' + numeros.slice(2)
        .replace(/^(\d{5})(\d)/, '$1-$2');
}

function formatarCEP(valor) {
    return valor.replace(/\D/g, '').slice(0, 8)
        .replace(/^(\d{5})(\d)/, '$1-$2');
}

function aplicarMascara(campo) {
    if (campo.id !== 'cpf' && campo.id !== 'telefone' && campo.id !== 'cep') return;
    // Conta os números antes do cursor para permitir editar no meio do campo.
    const cursor = campo.selectionStart;
    const numerosAntes = campo.value.slice(0, cursor).replace(/\D/g, '').length;
    if (campo.id === 'cpf') {
        campo.value = formatarCPF(campo.value);
    } else if (campo.id === 'telefone') {
        campo.value = formatarTelefone(campo.value);
    } else {
        campo.value = formatarCEP(campo.value);
    }
    let posicao = 0;
    let contagem = 0;
    while (posicao < campo.value.length && contagem < numerosAntes) {
        if (/\d/.test(campo.value[posicao])) contagem++;
        posicao++;
    }
    campo.setSelectionRange(posicao, posicao);
}
