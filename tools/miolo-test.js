'use strict';

const path = require('path');
const PROJ = path.resolve(__dirname, '..');

const mod = require(path.join(PROJ, 'game.js'));
const Core = mod.Core;
const Fallback = mod.FRASES_FALLBACK;

let passou = 0, falhou = 0;

function t(nome, cond, extra) {
  if (cond) {
    passou++;
    console.log('  OK   ' + nome);
  } else {
    falhou++;
    console.log('  FALHOU ' + nome + (extra ? '  -> ' + extra : ''));
  }
}

console.log('== normalizar ==');
t('remove espaco', Core.normalizar('a materia é formada por átomos') === 'AMATERIAÉFORMADAPORÁTOMOS');
t('remove espaco c/ acento', Core.normalizar('A MATÉRIA É FORMADA POR ÁTOMOS') === 'AMATÉRIAÉFORMADAPORÁTOMOS');
t('preserva acentos', Core.normalizar('Â à Á é Ê') === 'ÂÀÁÉÊ');
t('remove pontuacao', Core.normalizar('Olá, mundo! (ciência?)') === 'OLÁMUNDOCIÊNCIA');
t('mantem Ç', Core.normalizar('AÇÃO') === 'AÇÃO');
t('mantem Õ', Core.normalizar('SÃO') === 'SÃO');
t('mantem Ã', Core.normalizar('ÃTOMOS') === 'ÃTOMOS');
t('mantem Í', Core.normalizar('ÍNDICE') === 'ÍNDICE');
t('mantem Ó', Core.normalizar('SÓDIO') === 'SÓDIO');
t('mantem Ú', Core.normalizar('NÚCLEO') === 'NÚCLEO');
t('mantem Ê', Core.normalizar('TÊM') === 'TÊM');
t('mantem Ô', Core.normalizar('IÔNICOS') === 'IÔNICOS');
t('mantem minúsculas p/ maiúsculas', Core.normalizar('matéria') === 'MATÉRIA');

console.log('== saoVizinhas (8 direções) ==');
t('mesma celula', !Core.saoVizinhas(2, 2, 2, 2));
t('cima', Core.saoVizinhas(2, 2, 1, 2));
t('baixo', Core.saoVizinhas(2, 2, 3, 2));
t('esquerda', Core.saoVizinhas(2, 2, 2, 1));
t('direita', Core.saoVizinhas(2, 2, 2, 3));
t('diagonal', Core.saoVizinhas(2, 2, 1, 1));
t('lacuna 2 casas', !Core.saoVizinhas(2, 2, 4, 2));
t('lacuna diagonal grande', !Core.saoVizinhas(2, 2, 0, 0));

console.log('== linhaColuna ==');
t('idx linhas', Core.linhaColuna(0, 6).join(',') === '0,0');
t('idx col 5', Core.linhaColuna(5, 6).join(',') === '0,5');
t('idx linha 1', Core.linhaColuna(6, 6).join(',') === '1,0');

console.log('== verificarTentativa ==');
t('acerto sem espacos', Core.verificarTentativa('AMATÉRIAÉFORMADAPORÁTOMOS', 'A MATÉRIA É FORMADA POR ÁTOMOS'));
t('acerto com espacos', Core.verificarTentativa('A MATÉRIA É FORMADA POR ÁTOMOS', 'A MATÉRIA É FORMADA POR ÁTOMOS'));
t('erro diferente', !Core.verificarTentativa('ATOMOS', 'A MATÉRIA É FORMADA POR ÁTOMOS'));

console.log('== banco: data/frases.json ==');
const dados = require(path.join(PROJ, 'data', 'frases.json'));
const frases = dados.frases;
t('json bate com a fonte (tools/miolo-bank-src.json)', require(path.join(PROJ, 'tools', 'miolo-bank-src.json')).frases.length === frases.length);
t('banco alimentado (>= 30 frases para > 1 mês)', frases.length >= 30);

const ids = new Set();
const normChave = new Set();
const AREAS = ['Química', 'Física', 'Biologia', 'Matemática', 'Astronomia', 'Ciências da Terra', 'Ciência dos Materiais', 'Computação'];
let camposOk = true, fonteOk = true, dificuldadeOk = true, areaOk = true, unicidadeOk = true;
let scientistOk = true, tipoOk = true, datasOk = true;
let boards = 0, boardsFalharam = 0, vazias = 0, cobreTV = 0;

frases.forEach(function (f) {
  if (ids.has(f.id)) unicidadeOk = false;
  ids.add(f.id);
  const n = Core.normalizar(f.phrase);
  if (normChave.has(n)) { unicidadeOk = false; console.log('    duplicada: ' + f.phrase); }
  normChave.add(n);
  if (!(f.id && f.phrase && f.language === 'pt-BR' && f.field && f.subfield && f.type && f.explanation && f.source)) camposOk = false;
  if (!(f.scientist && String(f.scientist).trim())) scientistOk = false;
  if (['citação', 'ideia'].indexOf(f.type) === -1) tipoOk = false;
  if (!f.date || !/^\d{4}-\d{2}-\d{2}$/.test(f.date)) { datasOk = false; console.log('    date inválida #' + f.id + ': ' + f.date); }
  const s = f.source || {};
  if (!(s.title && s.author && s.year && s.publisher)) fonteOk = false;
  if (!Number.isInteger(f.difficulty) || f.difficulty < 1 || f.difficulty > 4) dificuldadeOk = false;
  if (!AREAS.includes(f.field)) areaOk = false;
  const v = Core.validarTabuleiro(f.board, f.path, f.phrase);
  boards += v.ok ? 1 : 0;
  if (!v.ok) { boardsFalharam++; console.log('    board inválido #' + f.id + ': ' + v.motivo); }
  if (f.board.some(l => l.indexOf('.') !== -1)) vazias++;
  const alvo = Core.normalizar(f.phrase);
  if (Core.letrasDaTrilha(f.path.map(p => p[0] * f.board[0].length + p[1]), f.board) === alvo) cobreTV++;
});
t('ids únicos', ids.size === frases.length);
t('sem frases duplicadas (normalizadas)', unicidadeOk);
t('campos obrigatórios em todas', camposOk);
t('scientist presente em todas', scientistOk);
t('tipo é citação ou ideia em todas', tipoOk);
t('source completa em todas', fonteOk);
t('difficulty em 1..4 em todas', dificuldadeOk);
t('area dentro das 8 ciências', areaOk);
t('todos os tabuleiros válidos (' + boards + '/' + frases.length + ')', boards === frases.length, boardsFalharam + ' falharam');
t('nenhuma célula vazia', vazias === 0);
t('trilha completa == alvo em todas', cobreTV === frases.length);
t('todas as frases com acento normalizam mantendo o acento', frases.filter(f => /[ÁÀÃÂÉÊÍÓÔÕÚÇ]/.test(f.phrase)).every(f => /[ÁÀÃÂÉÊÍÓÔÕÚÇ]/.test(Core.normalizar(f.phrase))));
t('todas as frases têm date YYYY-MM-DD', datasOk);

console.log('== banco: calendário diário ==');
const datas = frases.map(f => f.date);
t('datas únicas', new Set(datas).size === datas.length);
t('começa em 2026-09-05', datas[0] === '2026-09-05');
t('datas consecutivas (2 em diante)', datas.slice(1).every((d, i) => Core.diasEntre(datas[i], d) === 1));
t('ids seguem a ordem das datas', frases.every(f => f.id >= 1 && f.id <= frases.length) && frases.every((f, i) => i + 1 === f.id && f.date === datas[i]));
t('primeiros 7 dias: #001..#007', [1, 2, 3, 4, 5, 6, 7].every(i => Core.desafioParaData(datas[i - 1], frases).id === i));
t('desafioParaData 2026-09-05 -> #001', Core.desafioParaData('2026-09-05', frases) && Core.desafioParaData('2026-09-05', frases).id === 1);
t('desafioParaData 2026-09-11 -> #007', Core.desafioParaData('2026-09-11', frases) && Core.desafioParaData('2026-09-11', frases).id === 7);
t('desafioParaData sem data cadastrada -> null', Core.desafioParaData('2030-01-01', frases) === null);
t('numeroDoDesafio 2026-09-05 = 1', Core.numeroDoDesafio('2026-09-05') === 1);
t('numeroDoDesafio 2026-09-11 = 7', Core.numeroDoDesafio('2026-09-11') === 7);
t('somarDias -1 atravessa mês (2026-09-05 -> 2026-09-04)', Core.somarDias('2026-09-05', -1) === '2026-09-04');
t('somarDias +1 (2026-09-05 -> 2026-09-06)', Core.somarDias('2026-09-05', 1) === '2026-09-06');
t('somarDias vira o mês (2026-09-30 -> 2026-10-01)', Core.somarDias('2026-09-30', 1) === '2026-10-01');
t('hojeISO retorna YYYY-MM-DD', /^\d{4}-\d{2}-\d{2}$/.test(Core.hojeISO()));
t('DATA_BASE exportado', Core.DATA_BASE === '2026-09-05');

console.log('== distribuição ==');
const conta = Object.create(null);
frases.forEach(f => { conta[f.field] = (conta[f.field] || 0) + 1; });
const areasComFrases = Object.keys(conta).length;
t('pelo menos 4 áreas com frases', areasComFrases >= 4, 'áreas: ' + areasComFrases);
t('distribuição soma o total de frases', Object.values(conta).reduce((a, b) => a + b, 0) === frases.length);
t('Física segue sendo a maior área', (conta['Física'] || 0) >= (conta['Química'] || 0) + (conta['Biologia'] || 0));
t('Ciências da Terra: 0 (decisão consciente)', !conta['Ciências da Terra']);
t('Ciência dos Materiais: 0 (decisão consciente)', !conta['Ciência dos Materiais']);

console.log('== fallback embutido ==');
t('fallback com o mesmo número de frases', Fallback.frases.length === frases.length);
t('fallback idêntico ao json', JSON.stringify(Fallback.frases) === JSON.stringify(frases));
t('citações têm scientist no fallback', Fallback.frases.every(f => f.scientist && String(f.scientist).trim()));
t('id 1 é a citação de Marie Curie', frases[0].id === 1 && frases[0].scientist === 'Marie Curie');
const v1 = Core.validarTabuleiro(frases[0].board, frases[0].path, frases[0].phrase);
t('tabuleiro do id 1 válido', v1.ok, v1.motivo);
t('id 1 começa no centro', (function () {
  const g = frases[0].board;
  const R = g.length, C = g[0].length;
  return frases[0].path[0][0] === Math.floor((R - 1) / 2) && frases[0].path[0][1] === Math.floor((C - 1) / 2);
})());

console.log('== gerador (Core.gerarTabuleiro) ==');
const alvos = frases.map(f => f.phrase);
let det = true, coberturaOk = true;
const geometrias = new Set();
alvos.forEach((a, i) => {
  const g1 = Core.gerarTabuleiro(a);
  const g2 = Core.gerarTabuleiro(a);
  if (JSON.stringify(g1) !== JSON.stringify(g2)) det = false;
  const v = Core.validarTabuleiro(g1.board, g1.path, a);
  if (!v.ok) coberturaOk = false;
  if (g1.board.some(l => l.indexOf('.') !== -1)) coberturaOk = false;
  const total = g1.board.join('').length;
  if (total !== Core.normalizar(a).length) coberturaOk = false;
  geometrias.add(g1.board.length + 'x' + g1.board[0].length);
});
t('gerador determinístico (mesma frase, mesmo tabuleiro)', det);
t('gerador cobre todas as células e letras', coberturaOk);
t('gerador começa no centro', alvos.every((a) => {
  const g = Core.gerarTabuleiro(a);
  const R = g.board.length, C = g.board[0].length;
  return g.path[0][0] === Math.floor((R - 1) / 2) && g.path[0][1] === Math.floor((C - 1) / 2);
}));
t('cardinais 24/25/28/30/32/35/36 geram boards válidos',
  ['O TITÂNIO É LEVE E RESISTENTE', 'A MATÉRIA É FORMADA POR ÁTOMOS', 'A GRAVIDADE ATRAI TODOS OS CORPOS', 'A MASSA MEDE A QUANTIDADE DE MATÉRIA', 'A ENERGIA SE CONSERVA EM TODO PROCESSO', 'NÚMEROS PRIMOS TÊM APENAS DOIS DIVISORES', 'POLÍMEROS SÃO CADEIAS LONGAS DE MONÔMEROS'].every(a => Core.validarTabuleiro(Core.gerarTabuleiro(a).board, Core.gerarTabuleiro(a).path, a).ok));

console.log('== completarFrase ==');
t('preenche frase sem board/path', (function () {
  const obj = { phrase: 'A LUA É O SATÉLITE NATURAL DA TERRA' };
  Core.completarFrase(obj);
  const v = Core.validarTabuleiro(obj.board, obj.path, obj.phrase);
  return v.ok && Array.isArray(obj.path);
})());
t('preserva board/path existentes', (function () {
  const obj = { phrase: 'X', board: ['X'], path: [[0, 0]] };
  Core.completarFrase(obj);
  return obj.board[0] === 'X' && JSON.stringify(obj.path) === '[[0,0]]';
})());

console.log('');
console.log('RESULTADO: ' + passou + ' ok, ' + falhou + ' falhou');
if (falhou) process.exit(1);