import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
        rolldownOptions: {
            input: {
                inicio: fileURLToPath(new URL('./html/index.html', import.meta.url)),
                projetos: fileURLToPath(new URL('./html/projetos.html', import.meta.url)),
                cadastro: fileURLToPath(new URL('./html/cadastro.html', import.meta.url))
            }
        }
    }
});
