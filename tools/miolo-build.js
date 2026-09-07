'use strict';

/* ===================================================================
   MIOLO — build do banco de desafios
   Lê a fonte (miolo-bank-src.json), gera/valida tabuleiros via Core,
   escreve data/frases.json e sincroniza FRASES_FALLBACK no game.js.
   Uso: node miolo-build.js <caminho-da-fonte> <dir-do-projeto>
=================================================================== */

const fs = require('fs');
const path = require('path');

const srcPath = process.argv[2];
const projDir = process.argv[3];
if (!srcPath || !projDir) {
  console.error('Uso: node miolo-build.js <fonte.json> <dir-do-projeto>');
  process.exit(1);
}

const { Core } = require(path.join(projDir, 'game.js'));

function lerJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

const fonte = lerJSON(srcPath);
const frases = fonte.frases;

/* 1) Garante tabuleiro/caminho e valida cada frase */
let falhas = 0;
for (let i = 0; i < frases.length; i++) {
  const f = frases[i];
  Core.completarFrase(f);
  const v = Core.validarTabuleiro(f.board, f.path, f.phrase);
  if (!v.ok) {
    falhas++;
    console.error(`[FALHA] #${f.id} "${f.phrase}" :: ${v.motivo}`);
  }
}

/* 2) Checagens de integridade do banco */
const ids = new Set();
const normais = new Set();
const AREAS_ESPERADAS = ['Química', 'Física', 'Biologia', 'Matemática', 'Astronomia', 'Ciências da Terra', 'Ciência dos Materiais', 'Computação'];
const contagemArea = Object.create(null);

function erro(msg) {
  falhas++;
  console.error('[FALHA] ' + msg);
}

frases.forEach((f) => {
  if (!f.id) erro(`frase sem id: "${f.phrase}"`);
  else if (ids.has(f.id)) erro(`id duplicado: ${f.id}`);
  else ids.add(f.id);

  if (!f.phrase || !String(f.phrase).trim()) erro('frase vazia');
  if (f.language !== 'pt-BR') erro(`#${f.id}: language != pt-BR`);
  if (!f.field || !AREAS_ESPERADAS.includes(f.field)) erro(`#${f.id}: field inválido "${f.field}"`);
  if (!f.subfield) erro(`#${f.id}: sem subfield`);
  if (!f.type) erro(`#${f.id}: sem type`);
  if (!Number.isInteger(f.difficulty) || f.difficulty < 1 || f.difficulty > 4) erro(`#${f.id}: difficulty inválida "${f.difficulty}"`);
  if (!f.explanation || !String(f.explanation).trim()) erro(`#${f.id}: sem explicação`);
  if (!f.date || !/^\d{4}-\d{2}-\d{2}$/.test(f.date)) erro(`#${f.id}: date inválida "${f.date}" (esperado YYYY-MM-DD)`);
  const s = f.source || {};
  if (!s.title || !s.author || !s.year || !s.publisher) erro(`#${f.id}: source incompleta`);

  const n = Core.normalizar(f.phrase);
  if (normais.has(n)) erro(`frase duplicada (normalizada): "${f.phrase}"`);
  normais.add(n);

  contagemArea[f.field] = (contagemArea[f.field] || 0) + 1;
});

/* 2b) Datas: únicas, a partir da base e consecutivas */
const BASE_DATAS = '2026-09-05';
const datas = frases.map((f) => f.date).sort();
for (let i = 1; i < datas.length; i++) {
  if (datas[i] === datas[i - 1]) erro('date duplicada: ' + datas[i]);
}
if (datas.length) {
  if (datas[0] !== BASE_DATAS) erro(`primeira date deve ser ${BASE_DATAS} (base do banco diário)`);
  for (let i = 1; i < datas.length; i++) {
    if (Core.diasEntre && Core.diasEntre(datas[i - 1], datas[i]) !== 1) {
      erro('datas não consecutivas: ' + datas[i - 1] + ' -> ' + datas[i]);
    }
  }
  const ordemInvalida = frases.some((f, i) => f.date !== datas[i]);
  if (ordemInvalida) erro('a ordem das frases no arquivo deve seguir a ordem das datas');
}

/* 3) Escreve data/frases.json */
const saida = { versao: fonte.versao || 2, idioma: fonte.idioma || 'pt-BR', frases };
const jsonTexto = JSON.stringify(saida, null, 2) + '\n';
fs.writeFileSync(path.join(projDir, 'data', 'frases.json'), jsonTexto, 'utf8');
console.log('data/frases.json escrito (' + frases.length + ' frases).');

/* 4) Sincroniza FRASES_FALLBACK no game.js */
const gameJs = path.join(projDir, 'game.js');
let codigo = fs.readFileSync(gameJs, 'utf8');
const inicio = codigo.indexOf('var FRASES_FALLBACK = {');
const fim = codigo.indexOf('\n};', inicio);
if (inicio === -1 || fim === -1) {
  console.error('[FALHA] marcador de FRASES_FALLBACK não encontrado no game.js');
  process.exit(1);
}
const bloco = 'var FRASES_FALLBACK = ' + jsonTexto.trim() + ';';
codigo = codigo.slice(0, inicio) + bloco + codigo.slice(fim + 3);
fs.writeFileSync(gameJs, codigo, 'utf8');
console.log('FRASES_FALLBACK sincronizado no game.js.');

/* 5) Relatório */
console.log('---');
console.log('Total de desafios: ' + frases.length);
console.log('Por área: ' + Object.keys(contagemArea).map((a) => a + '=' + contagemArea[a]).join(', '));
const porDif = Object.create(null);
frases.forEach((f) => { porDif[f.difficulty] = (porDif[f.difficulty] || 0) + 1; });
console.log('Por dificuldade (1-4): ' + Object.keys(porDif).sort().map((d) => d + '=' + porDif[d]).join(', '));
console.log(falhas === 0 ? 'INTEGRIDADE: OK' : 'INTEGRIDADE: ' + falhas + ' falha(s)');
process.exit(falhas === 0 ? 0 : 1);