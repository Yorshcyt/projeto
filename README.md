# Instituto Esperança

Projeto acadêmico de um site para uma instituição social. O objetivo é apresentar a instituição, divulgar seus projetos e disponibilizar um formulário para pessoas interessadas em participar.

## Tecnologias utilizadas

- **HTML:** estrutura das páginas, formulário e templates.
- **CSS:** cores, tipografia, layout responsivo e estados visuais dos componentes.
- **JavaScript:** navegação entre conteúdos, criação dos cards, validação do formulário, máscaras de preenchimento, modal, toast e alternância de alto contraste.

## Organização dos arquivos

- `html/`: páginas de início, projetos e cadastro.
- `css/`: estilos do site.
- `js/`: scripts separados por função.
- `imagens/`: imagens utilizadas no projeto.

## Como executar localmente

1. No GitHub, selecione a branch `develop`, que recebeu as alterações desta etapa.
2. Clique em **Code → Download ZIP**.
3. Extraia o arquivo, mantendo a organização das pastas.
4. Abra `html/index.html` em um navegador atualizado.

O projeto não precisa de instalação de dependências ou comando de build. Também é possível abrir a pasta no Visual Studio Code e executar a página pela extensão Live Server.

## Funcionalidades

- Navegação entre início, projetos e cadastro.
- Cards de projetos montados com JavaScript.
- Validação dos campos do formulário.
- Formatação automática de CPF, telefone e CEP.
- Salvamento e recuperação do rascunho do formulário com localStorage.
- Modal e toast para comunicação com o usuário.
- Modo de alto contraste com preferência salva no navegador.

O cadastro é uma demonstração: os dados ficam no navegador e não são enviados para um servidor. A máscara do CPF organiza o preenchimento, mas não verifica os dígitos verificadores.

## Acessibilidade e alto contraste

O site utiliza tags semânticas, labels associados aos campos, mensagens de erro com atributos ARIA, foco visível e um link para pular ao conteúdo principal. O modal permite fechar com Esc e retornar ao botão que o abriu.

O botão **Alto contraste**, disponível no cabeçalho, ativa ou desativa a classe `alto-contraste` no body. O CSS aplica fundo preto, texto branco e títulos, links e botões amarelos. O script `js/contraste.js` atualiza `aria-pressed` e salva a preferência no localStorage.

As combinações de cores foram verificadas com um script de cálculo de contraste pela fórmula WCAG:

| Elemento no alto contraste | Cor do texto | Cor do fundo | Contraste |
|---|---|---|---|
| Texto e campos | `#ffffff` | `#000000` | 21:1 |
| Links e títulos | `#ffff00` | `#000000` | 19,56:1 |
| Botões | `#000000` | `#ffff00` | 19,56:1 |
| Mensagens de erro | `#ffb3b3` | `#000000` | 12,35:1 |
| Badge de sucesso | `#00ff00` | `#000000` | 15,30:1 |

Os valores correspondem às cores definidas no CSS e não representam uma auditoria completa de conformidade WCAG. Mais detalhes estão em `VERIFICACAO-CONTRASTE.md`.

## Versionamento

O projeto utiliza as branches `main`, `develop` e branches `feature/` para organizar as alterações. As funcionalidades são desenvolvidas nas branches de trabalho e integradas à `develop` por Pull Requests.

Os commits recebem mensagens que identificam a alteração, como:

- `feat:` para funcionalidades.
- `fix:` para correções.
- `style:` para ajustes de estilo.
- `docs:` para documentação.

As issues registram tarefas e problemas do projeto.

## Testes manuais

Para verificar o funcionamento:

1. Acesse as páginas pelo menu e abra os detalhes dos projetos.
2. Preencha o formulário com dados fictícios, conferindo máscaras e mensagens de erro.
3. Recarregue a página para verificar a recuperação do rascunho.
4. Use Tab e Shift+Tab para conferir a ordem de navegação e o foco visível.
5. Ative “Pular para o conteúdo” com Enter.
6. Abra o modal, confira a navegação interna e feche com Esc.
7. Mostre o toast e acesse seu botão de fechar pelo teclado.
8. Confira o layout em telas menores.
9. Ative e desative Alto contraste com o mouse e com Enter ou Espaço.
10. Confira os campos, mensagens de erro, modal e toast nos dois modos.
11. Recarregue a página para verificar se a preferência de contraste foi mantida.

Não há uma ferramenta de testes automatizados configurada. As verificações de interface são realizadas no navegador.
