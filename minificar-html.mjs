import { readFile, writeFile } from 'node:fs/promises';
import { minify } from 'html-minifier-terser';

const paginas = ['index', 'projetos', 'cadastro'];

for (const pagina of paginas) {
    const caminho = `dist/html/${pagina}.html`;
    const original = await readFile(caminho, 'utf8');

    const resultado = await minify(original, {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true
    });

    await writeFile(caminho, resultado);
    console.log(`HTML minificado: ${caminho}`);
}