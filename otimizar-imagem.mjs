import sharp from 'sharp';
import { stat } from 'node:fs/promises';

const original = 'imagens/logo.png';
const destino = 'imagens/logo.webp';

await sharp(original)
    .webp({ lossless: true })
    .toFile(destino);

const antes = (await stat(original)).size;
const depois = (await stat(destino)).size;
const reducao = ((antes - depois) / antes) * 100;

console.log(`PNG: ${antes} bytes`);
console.log(`WebP: ${depois} bytes`);
console.log(`Redução: ${reducao.toFixed(2)}%`);