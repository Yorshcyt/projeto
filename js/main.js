import { mostrarPagina } from './navegacao.js';
import './formulario.js';
import './feedback.js';
import './contraste.js';

// A abertura inicial mantém o foco na ordem natural da página.
window.addEventListener('hashchange', function () { mostrarPagina(); });
mostrarPagina(false);
