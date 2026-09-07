# MIOLO — o desafio científico do dia

Jogo de caça-palavras estilo **um desafio por dia**: o tabuleiro embaralha as letras de uma frase científica real e você arrasta para reconstruí-la antes do cronômetro zerar. Sem escolha de desafio: **o jogo decide pela data de hoje**.

> "NADA NA VIDA DEVE SER TEMIDO, SOMENTE COMPREENDIDO" — Marie Curie (#001)

## Como jogar

Abra `index.html` em um navegador. Para melhor experiência (e para o salvamento funcionar):

```sh
python -m http.server
# depois abra http://localhost:8000
```

- Haverá **um desafio por dia** (base: `2026-09-05`).
- Arraste pela **célula âmbar** (primeira letra) conectando letras vizinhas, inclusive diagonais.
- **DESFAZER** remove a última letra; tocar na célula âmbar reinicia a trilha.
- **DICA** revela pistas progressivas (área, cientista, contexto, primeira palavra).
- Acertou? A frase entra na **Minha Biblioteca**, junto com seu tempo e tentativas.
- O **cronômetro**, a **sequência de dias** e as **melhores marcas** ficam salvos no navegador.

Modo desenvolvedor: `DEV_MODE = true` no topo de `game.js` revela o seletor ‹ › para testar qualquer desafio.

## Estrutura

```
index.html            interface (cartão diário, grade, biblioteca, modais)
game.js               lógica do jogo (Core + App) e FRASES_FALLBACK
style.css             identidade visual
data/frases.json      banco do dia (48 frases, versão 5)
tools/                alimentação e validação do banco
.github/workflows/    vigilância diária da alimentação (alimentar.yml)
```

## Como alimentar o jogo

O banco é **uma frase por dia**, com datas **únicas e consecutivas** começando na base `2026-09-05`. Hoje o acervo vai até `2026-10-22` (#048). Depois disso, o jogo exibe "SEM DESAFIO PARA HOJE" até você adicionar frases novas.

Um fluxo de trabalho diário no GitHub (`.github/workflows/alimentar.yml`) roda `tools/verificar-alimentacao.js`: quando faltarem **≤ 7 dias** para o fim do banco, ele abre uma issue te avisando para alimentar.

### Passo a passo (não precisa mexer em `game.js`)

1. **Edite `tools/miolo-bank-src.json`**: acrescente frases no final, seguindo a ordem das datas (a próxima data = último dia + 1; id = último id + 1).
2. **Rode o build** (regenera `data/frases.json` e sincroniza o `FRASES_FALLBACK` do `game.js`):
   ```sh
   node tools/miolo-build.js tools/miolo-bank-src.json .
   ```
3. **Valide** os testes e as checagens:
   ```sh
   node tools/miolo-test.js
   node tools/syntax-check.js
   node tools/miolo-ids.js
   ```
4. Commit e push — o jogo já tem o novo desafio no dia agendado.

### Regras do banco (validadas pelo build)

- **`date`**: `YYYY-MM-DD`, única, consecutiva, a partir de `2026-09-05`. As frases devem estar **em ordem de data**.
- **Conteúdo real**: citações/reias autorais devem ter `scientist` e `source` verificáveis; frases que são ideias devem ser marcadas como `type: ideia/contribuição`, nunca como citação.
- **Comprimento composto**: frases de tamanho formável em grade retangular (composto) para o tabuleiro encaixar.
- Campos obrigatórios: `id`, `phrase`, `language: pt-BR`, `field`, `subfield`, `type`, `difficulty` (1–4), `explanation`, `source {title, author, year, publisher}`, `date`.

O tabuleiro e o caminho da frase são **gerados automaticamente** no carregamento (Core, em `game.js`) — você nunca precisa desenhar grade à mão.

## Banco atual (48 frases)

| Área | Frases |
|---|---|
| Física | 18 |
| Biologia | 8 |
| Matemática | 8 |
| Química | 5 |
| Astronomia | 5 |
| Computação | 4 |