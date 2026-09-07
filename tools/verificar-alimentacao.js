'use strict';
const fs = require('fs');
const path = require('path');

const PROJ = path.join(__dirname, '..');
const dados = JSON.parse(fs.readFileSync(path.join(PROJ, 'data', 'frases.json'), 'utf8'));
const frases = dados.frases;

function hojeLocal() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function diasEntre(a, b) {
  const [ay, am, ad] = a.split('-').map(Number);
  const [by, bm, bd] = b.split('-').map(Number);
  const A = Date.UTC(ay, am - 1, ad);
  const B = Date.UTC(by, bm - 1, bd);
  return Math.round((B - A) / 86400000);
}

const datas = frases.map(f => f.date).sort();
const primeira = datas[0];
const ultima = datas[datas.length - 1];
const hoje = hojeLocal();
const faltando = diasEntre(hoje, ultima);

console.log('Hoje: ' + hoje + ' | primeira: ' + primeira + ' | última: ' + ultima + ' | dias restantes: ' + faltando);

const precisa = faltando <= 7;
if (process.env.GITHUB_OUTPUT) {
  const linhas = [
    'precisa=' + (precisa ? 'sim' : 'nao'),
    'faltando_dias=' + faltando,
    'ultima_data=' + ultima
  ].join('\n') + '\n';
  fs.appendFileSync(process.env.GITHUB_OUTPUT, linhas);
}

if (precisa) console.log('ATENÇÃO: faltam poucos dias de banco — alimente via tools/miolo-bank-src.json e rode o build.');