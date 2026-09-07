/* ===================================================================
   MIOLO — Um desafio científico por dia
   Versão: protótipo local jogável (abrir index.html diretamente)
   Sem servidor, sem dependências, sem internet obrigatória.
   =================================================================== */

'use strict';

/* -----------------------------------------------------------------
   MODO DE DESENVOLVIMENTO
   true  -> ativa o seletor ‹ › na tela inicial para testar qualquer
            desafio pelo número (fica separado da experiência normal).
   false -> experiência normal: um único desafio por dia.
----------------------------------------------------------------- */
var DEV_MODE = false;

/* -----------------------------------------------------------------
   DADOS DE FALLBACK
   Espelha data/frases.json. Garante funcionamento via file:// onde
   os navegadores bloqueiam fetch de arquivos locais.
----------------------------------------------------------------- */
var FRASES_FALLBACK = {
  "versao": 4,
  "idioma": "pt-BR",
  "frases": [
    {
      "id": 1,
      "phrase": "NADA NA VIDA DEVE SER TEMIDO SOMENTE COMPREENDIDO",
      "language": "pt-BR",
      "field": "Química",
      "subfield": "Radioatividade",
      "type": "citação",
      "scientist": "Marie Curie",
      "difficulty": 2,
      "explanation": "Frase célebre atribuída a Marie Curie, síntese de sua postura diante da ciência: compreender a natureza é a forma de superar o medo. Duas vezes Nobel (Física 1903, Química 1911), ela dedicou a vida ao estudo da radioatividade.",
      "source": {
        "title": "Pierre Curie: With Autobiographical Notes",
        "author": "Marie Curie",
        "year": "1923",
        "publisher": "The Macmillan Company",
        "doi": null,
        "url": null
      },
      "date": "2026-09-05",
      "board": [
        "ADVIDAD",
        "NAAEVES",
        "RESNDOO",
        "TEMIEMN",
        "CETNEED",
        "OMPRODI"
      ],
      "path": [
        [
          2,
          3
        ],
        [
          1,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          5
        ],
        [
          3,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ],
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          5,
          2
        ],
        [
          5,
          3
        ],
        [
          4,
          4
        ],
        [
          4,
          5
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          5,
          5
        ],
        [
          5,
          4
        ]
      ]
    },
    {
      "id": 2,
      "phrase": "PERSEVERANÇA E SOBRETUDO CONFIANÇA EM NÓS MESMOS",
      "language": "pt-BR",
      "field": "Química",
      "subfield": "Radioatividade",
      "type": "citação",
      "scientist": "Marie Curie",
      "difficulty": 2,
      "explanation": "Em seu livro autobiográfico sobre Pierre Curie, Marie Curie escreveu que a vida não é fácil para ninguém, mas que se deve ter perseverança e, acima de tudo, confiança em si mesmo — a receita de sua trajetória científica.",
      "source": {
        "title": "Pierre Curie: With Autobiographical Notes",
        "author": "Marie Curie",
        "year": "1923",
        "publisher": "The Macmillan Company",
        "doi": null,
        "url": null
      },
      "date": "2026-09-06",
      "board": [
        "SRERANÇ",
        "EVESEAO",
        "RBOPOCN",
        "ETUDIFE",
        "AÇNASMS",
        "EMNÓSOM"
      ],
      "path": [
        [
          2,
          3
        ],
        [
          1,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          5
        ],
        [
          3,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ],
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          5,
          2
        ],
        [
          5,
          3
        ],
        [
          4,
          4
        ],
        [
          4,
          5
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          5,
          5
        ],
        [
          5,
          4
        ]
      ]
    },
    {
      "id": 3,
      "phrase": "A IMAGINAÇÃO É MAIS IMPORTANTE QUE O CONHECIMENTO",
      "language": "pt-BR",
      "field": "Física",
      "subfield": "Pensamento Científico",
      "type": "citação",
      "scientist": "Albert Einstein",
      "difficulty": 2,
      "explanation": "Em entrevista de 1929, Einstein afirmou que a imaginação importa mais que o conhecimento: enquanto o conhecimento é limitado, a imaginação abraça o mundo inteiro e impulsiona hipóteses e descobertas.",
      "source": {
        "title": "What Life Means to Einstein (entrevista)",
        "author": "The Saturday Evening Post",
        "year": "1929",
        "publisher": "The Saturday Evening Post",
        "doi": null,
        "url": null
      },
      "date": "2026-09-07",
      "board": [
        "AMNAÇÃO",
        "GIIAMÉN",
        "ISIATAT",
        "MPORQEM",
        "COEUCIE",
        "ONHEOTN"
      ],
      "path": [
        [
          2,
          3
        ],
        [
          1,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          5
        ],
        [
          3,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ],
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          5,
          2
        ],
        [
          5,
          3
        ],
        [
          4,
          4
        ],
        [
          4,
          5
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          5,
          5
        ],
        [
          5,
          4
        ]
      ]
    },
    {
      "id": 4,
      "phrase": "O IMPORTANTE É NÃO PARAR DE QUESTIONAR",
      "language": "pt-BR",
      "field": "Física",
      "subfield": "Pensamento Científico",
      "type": "citação",
      "scientist": "Albert Einstein",
      "difficulty": 2,
      "explanation": "Einstein via a curiosidade como motor da ciência: a essência do fazer científico é continuar perguntando, nunca perder a vontade de investigar o desconhecido.",
      "source": {
        "title": "Ideas and Opinions",
        "author": "Albert Einstein",
        "year": "1954",
        "publisher": "Crown Publishers",
        "doi": null,
        "url": null
      },
      "date": "2026-09-08",
      "board": [
        "PMIANTEÉ",
        "ORTOOÃNT",
        "ARAPUESI",
        "RDEQRANO"
      ],
      "path": [
        [
          1,
          3
        ],
        [
          0,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          0,
          7
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          2,
          6
        ],
        [
          1,
          7
        ],
        [
          2,
          7
        ],
        [
          3,
          7
        ],
        [
          3,
          6
        ],
        [
          3,
          5
        ],
        [
          3,
          4
        ]
      ]
    },
    {
      "id": 5,
      "phrase": "DEUS NÃO JOGA DADOS COM O UNIVERSO",
      "language": "pt-BR",
      "field": "Física",
      "subfield": "Física Quântica",
      "type": "citação",
      "scientist": "Albert Einstein",
      "difficulty": 3,
      "explanation": "Em carta a Max Born (1926), Einstein resumiu sua objeção à aleatoriedade na mecânica quântica: para ele, o acaso não governa os fundamentos do universo.",
      "source": {
        "title": "The Born-Einstein Letters",
        "author": "Max Born (organizador)",
        "year": "1971",
        "publisher": "Walker and Company",
        "doi": null,
        "url": null
      },
      "date": "2026-09-09",
      "board": [
        "SUEJOGA",
        "NÃODADV",
        "CSODNIE",
        "OMOUOSR"
      ],
      "path": [
        [
          1,
          3
        ],
        [
          0,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          3,
          5
        ],
        [
          3,
          4
        ]
      ]
    },
    {
      "id": 6,
      "phrase": "SE ENXERGUEI MAIS LONGE FOI POR ESTAR SOBRE OS OMBROS DE GIGANTES",
      "language": "pt-BR",
      "field": "Física",
      "subfield": "Mecânica",
      "type": "citação",
      "scientist": "Isaac Newton",
      "difficulty": 3,
      "explanation": "Em carta a Robert Hooke (1675), Newton reconhece que suas descobertas dependem do trabalho de gerações anteriores: a ciência avança sobre os ombros de gigantes.",
      "source": {
        "title": "Carta a Robert Hooke",
        "author": "Isaac Newton",
        "year": "1675",
        "publisher": "The Royal Society",
        "doi": null,
        "url": null
      },
      "date": "2026-09-10",
      "board": [
        "XNEUEIMAI",
        "ERGENOLSR",
        "OFEGSSTAS",
        "IPORERBOG",
        "MOSOEEGIA",
        "BROSDSETN"
      ],
      "path": [
        [
          2,
          4
        ],
        [
          1,
          3
        ],
        [
          0,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          0,
          7
        ],
        [
          0,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          3,
          4
        ],
        [
          2,
          5
        ],
        [
          2,
          6
        ],
        [
          2,
          7
        ],
        [
          1,
          8
        ],
        [
          2,
          8
        ],
        [
          3,
          7
        ],
        [
          3,
          6
        ],
        [
          3,
          5
        ],
        [
          4,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ],
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          5,
          2
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          5
        ],
        [
          4,
          6
        ],
        [
          4,
          7
        ],
        [
          3,
          8
        ],
        [
          4,
          8
        ],
        [
          5,
          8
        ],
        [
          5,
          7
        ],
        [
          5,
          6
        ],
        [
          5,
          5
        ]
      ]
    },
    {
      "id": 7,
      "phrase": "O QUE NÃO CONSIGO CRIAR NÃO COMPREENDO",
      "language": "pt-BR",
      "field": "Física",
      "subfield": "Pensamento Científico",
      "type": "citação",
      "scientist": "Richard Feynman",
      "difficulty": 2,
      "explanation": "A frase estava no quadro-negro de Richard Feynman quando ele morreu (1988) e resume seu método: só considerava compreendido o que conseguisse reconstruir do zero.",
      "source": {
        "title": "Quadro-negro do Caltech (What I cannot create, I do not understand)",
        "author": "Richard P. Feynman",
        "year": "1988",
        "publisher": "California Institute of Technology",
        "doi": null,
        "url": null
      },
      "date": "2026-09-11",
      "board": [
        "EUQCONSI",
        "NÃOOCOGR",
        "RAIROMPE",
        "NÃOCODNE"
      ],
      "path": [
        [
          1,
          3
        ],
        [
          0,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          0,
          7
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          2,
          6
        ],
        [
          1,
          7
        ],
        [
          2,
          7
        ],
        [
          3,
          7
        ],
        [
          3,
          6
        ],
        [
          3,
          5
        ],
        [
          3,
          4
        ]
      ]
    },
    {
      "id": 8,
      "phrase": "TODA A CIÊNCIA É FÍSICA OU COLECIONAR SELOS",
      "language": "pt-BR",
      "field": "Física",
      "subfield": "Pensamento Científico",
      "type": "citação",
      "scientist": "Ernest Rutherford",
      "difficulty": 1,
      "explanation": "Frase atribuída a Rutherford, à frente do laboratório de Cambridge: um comentário irônico sobre áreas da ciência mais descritivas que explicativas — só a física entendia como 'ciência de verdade'.",
      "source": {
        "title": "Rutherford: Recollections of the Cambridge Days",
        "author": "Mark Oliphant",
        "year": "1972",
        "publisher": "Elsevier",
        "doi": null,
        "url": null
      },
      "date": "2026-09-12",
      "board": [
        "DAACIÊ",
        "ÉOICNO",
        "FATCAU",
        "ÍSIOCS",
        "CELARE",
        "IONSOL"
      ],
      "path": [
        [
          2,
          2
        ],
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          1
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          2,
          3
        ],
        [
          2,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          4
        ],
        [
          3,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ],
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          5,
          2
        ],
        [
          4,
          3
        ],
        [
          4,
          4
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ]
      ]
    },
    {
      "id": 9,
      "phrase": "NÃO TEMOS DINHEIRO ENTÃO TEMOS QUE PENSAR",
      "language": "pt-BR",
      "field": "Física",
      "subfield": "Física Atômica",
      "type": "citação",
      "scientist": "Ernest Rutherford",
      "difficulty": 2,
      "explanation": "Rutherford, que desvendou o núcleo atômico, costumava lembrar que a falta de recursos forçava o pensamento criativo: a escassez, não o luxo, cultivava a inteligência de seu laboratório.",
      "source": {
        "title": "Rutherford and the Nature of the Atom",
        "author": "E. N. da C. Andrade",
        "year": "1964",
        "publisher": "Doubleday",
        "doi": null,
        "url": null
      },
      "date": "2026-09-13",
      "board": [
        "TOOSDIN",
        "EMÃIEHM",
        "EORNTEO",
        "NTÃOPSQ",
        "RASNEEU"
      ],
      "path": [
        [
          2,
          3
        ],
        [
          1,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          5
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          4,
          5
        ],
        [
          3,
          4
        ],
        [
          4,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ]
      ]
    },
    {
      "id": 10,
      "phrase": "O OPOSTO DE UMA VERDADE PROFUNDA PODE SER OUTRA VERDADE PROFUNDA",
      "language": "pt-BR",
      "field": "Física",
      "subfield": "Física Quântica",
      "type": "citação",
      "scientist": "Niels Bohr",
      "difficulty": 4,
      "explanation": "Bohr, um dos criadores da física quântica, ensinava que verdades científicas profundas não se opõem a falsidades, mas a outras verdades profundas — uma defesa da complementaridade e da tolerância ao paradoxo.",
      "source": {
        "title": "Niels Bohr: A Centenary Volume",
        "author": "A. P. French e P. J. Kennedy (organizadores)",
        "year": "1985",
        "publisher": "Harvard University Press",
        "doi": null,
        "url": null
      },
      "date": "2026-09-14",
      "board": [
        "SOPEUMAVE",
        "TODODADRE",
        "ORPEOPODS",
        "FUNDAOREO",
        "VARTUEPRF",
        "ERDADADNU"
      ],
      "path": [
        [
          2,
          4
        ],
        [
          1,
          3
        ],
        [
          0,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          0,
          7
        ],
        [
          0,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          3,
          4
        ],
        [
          2,
          5
        ],
        [
          2,
          6
        ],
        [
          2,
          7
        ],
        [
          1,
          8
        ],
        [
          2,
          8
        ],
        [
          3,
          7
        ],
        [
          3,
          6
        ],
        [
          3,
          5
        ],
        [
          4,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ],
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          5,
          2
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          5
        ],
        [
          4,
          6
        ],
        [
          4,
          7
        ],
        [
          3,
          8
        ],
        [
          4,
          8
        ],
        [
          5,
          8
        ],
        [
          5,
          7
        ],
        [
          5,
          6
        ],
        [
          5,
          5
        ]
      ]
    },
    {
      "id": 11,
      "phrase": "A MATÉRIA NÃO SE CRIA NEM SE PERDE",
      "language": "pt-BR",
      "field": "Química",
      "subfield": "Estequiometria",
      "type": "citação",
      "scientist": "Antoine Lavoisier",
      "difficulty": 1,
      "explanation": "A frase sintetiza a lei da conservação da massa, enunciada por Lavoisier no século XVIII: nas transformações químicas, a matéria não é criada nem destruída, apenas se reorganiza.",
      "source": {
        "title": "Traité Élémentaire de Chimie",
        "author": "Antoine Lavoisier",
        "year": "1789",
        "publisher": "Chez Cuchet, Paris",
        "doi": null,
        "url": null
      },
      "date": "2026-09-15",
      "board": [
        "ÉTAMÃOSEC",
        "RIANAMERI",
        "EDREPESNA"
      ],
      "path": [
        [
          1,
          4
        ],
        [
          0,
          3
        ],
        [
          0,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          0,
          7
        ],
        [
          0,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          8
        ],
        [
          2,
          8
        ],
        [
          2,
          7
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          2,
          6
        ],
        [
          2,
          5
        ],
        [
          2,
          4
        ],
        [
          2,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ]
      ]
    },
    {
      "id": 12,
      "phrase": "AS ESPÉCIES NÃO SÃO IMUTÁVEIS",
      "language": "pt-BR",
      "field": "Biologia",
      "subfield": "Evolução",
      "type": "citação",
      "scientist": "Charles Darwin",
      "difficulty": 1,
      "explanation": "Em 'A Origem das Espécies' (1859), Darwin afirma que as espécies mudam ao longo do tempo — não são formas fixas e imutáveis. Essa ideia é o fundamento da teoria da evolução por seleção natural.",
      "source": {
        "title": "On the Origin of Species",
        "author": "Charles Darwin",
        "year": "1859",
        "publisher": "John Murray",
        "doi": null,
        "url": null
      },
      "date": "2026-09-16",
      "board": [
        "ESPÉC",
        "NSEII",
        "ÃSAOM",
        "OSÃUT",
        "SIEVÁ"
      ],
      "path": [
        [
          2,
          2
        ],
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          1
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          2,
          3
        ],
        [
          1,
          4
        ],
        [
          2,
          4
        ],
        [
          3,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ]
      ]
    },
    {
      "id": 13,
      "phrase": "NOS CAMPOS DA OBSERVAÇÃO O ACASO FAVORECE A MENTE PREPARADA",
      "language": "pt-BR",
      "field": "Biologia",
      "subfield": "Microbiologia",
      "type": "citação",
      "scientist": "Louis Pasteur",
      "difficulty": 3,
      "explanation": "Em discurso em Lille (1854), Pasteur ensinou que, nos campos da observação, o acaso ajuda apenas quem se preparou — a mente treinada percebe o que a casualidade oferece.",
      "source": {
        "title": "Discurso na Universidade de Lille",
        "author": "Louis Pasteur",
        "year": "1854",
        "publisher": "Lille, França",
        "doi": null,
        "url": null
      },
      "date": "2026-09-17",
      "board": [
        "ACSSDAOBSE",
        "MPOOÃÇAVRC",
        "CAOONVOREE",
        "ASOFAEETAM",
        "ADARAPRPNE"
      ],
      "path": [
        [
          2,
          4
        ],
        [
          1,
          3
        ],
        [
          0,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          0,
          7
        ],
        [
          0,
          8
        ],
        [
          0,
          9
        ],
        [
          1,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          3,
          4
        ],
        [
          2,
          5
        ],
        [
          2,
          6
        ],
        [
          2,
          7
        ],
        [
          2,
          8
        ],
        [
          1,
          9
        ],
        [
          2,
          9
        ],
        [
          3,
          8
        ],
        [
          3,
          9
        ],
        [
          4,
          9
        ],
        [
          4,
          8
        ],
        [
          3,
          7
        ],
        [
          3,
          6
        ],
        [
          4,
          7
        ],
        [
          4,
          6
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          4,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ]
      ]
    },
    {
      "id": 14,
      "phrase": "A CIÊNCIA NÃO TEM PÁTRIA",
      "language": "pt-BR",
      "field": "Biologia",
      "subfield": "Pensamento Científico",
      "type": "citação",
      "scientist": "Louis Pasteur",
      "difficulty": 1,
      "explanation": "Frase atribuída a Pasteur: a ciência é patrimônio da humanidade e não conhece fronteiras nacionais — o conhecimento construído por um país beneficia o mundo inteiro.",
      "source": {
        "title": "Œuvres de Pasteur (reunião de discursos)",
        "author": "Louis Pasteur",
        "year": "1922",
        "publisher": "Masson et Cie",
        "doi": null,
        "url": null
      },
      "date": "2026-09-18",
      "board": [
        "ICCIA",
        "ÊNANÃ",
        "METOI",
        "PÁTRA"
      ],
      "path": [
        [
          1,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          2,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ]
      ]
    },
    {
      "id": 15,
      "phrase": "CIÊNCIA E VIDA NÃO PODEM NEM DEVEM SER SEPARADAS",
      "language": "pt-BR",
      "field": "Biologia",
      "subfield": "Biologia Molecular",
      "type": "citação",
      "scientist": "Rosalind Franklin",
      "difficulty": 2,
      "explanation": "Em sua correspondência, Rosalind Franklin — cujas imagens de difração de raios X revelaram a dupla hélice do DNA — defendia que a ciência está integrada à vida cotidiana, não separada dela.",
      "source": {
        "title": "Correspondência de Rosalind Franklin (1940)",
        "author": "Rosalind Franklin",
        "year": "1940",
        "publisher": "Arquivos pessoais (King's College London)",
        "doi": null,
        "url": null
      },
      "date": "2026-09-19",
      "board": [
        "NÊAEVIDA",
        "CIIPOÃNE",
        "EDOCDEVM",
        "MNEMPESE",
        "SADARASR"
      ],
      "path": [
        [
          2,
          3
        ],
        [
          1,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          0,
          7
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          2,
          6
        ],
        [
          1,
          7
        ],
        [
          2,
          7
        ],
        [
          3,
          6
        ],
        [
          3,
          7
        ],
        [
          4,
          7
        ],
        [
          4,
          6
        ],
        [
          3,
          5
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ],
        [
          4,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ]
      ]
    },
    {
      "id": 16,
      "phrase": "O TODO É MAIOR QUE A SOMA DAS PARTES",
      "language": "pt-BR",
      "field": "Biologia",
      "subfield": "Filosofia da Biologia",
      "type": "citação",
      "scientist": "Aristóteles",
      "difficulty": 1,
      "explanation": "Na 'Metafísica', Aristóteles formula o princípio de que o conjunto possui propriedades que as partes isoladas não apresentam — ideia que antecipa o pensamento sistêmico em biologia e nas demais ciências.",
      "source": {
        "title": "Metafísica (Livro VII-VIII)",
        "author": "Aristóteles",
        "year": "c. 350 a.C.",
        "publisher": "Trad. br. Editora Loyola",
        "doi": null,
        "url": null
      },
      "date": "2026-09-20",
      "board": [
        "DOTAIOR",
        "OÉMOUQA",
        "OSAESPR",
        "MADASET"
      ],
      "path": [
        [
          1,
          3
        ],
        [
          0,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          3,
          5
        ],
        [
          3,
          4
        ]
      ]
    },
    {
      "id": 17,
      "phrase": "A MATEMÁTICA É A RAINHA DAS CIÊNCIAS",
      "language": "pt-BR",
      "field": "Matemática",
      "subfield": "Divulgação",
      "type": "citação",
      "scientist": "Carl Friedrich Gauss",
      "difficulty": 1,
      "explanation": "Frase célebre atribuída a Gauss, registrada por seus biógrafos: a matemática como fundamento e linguagem das demais ciências — 'a rainha' que reina sobre o saber científico.",
      "source": {
        "title": "Gauss zum Gedächtniss",
        "author": "Wolfgang Sartorius von Waltershausen",
        "year": "1856",
        "publisher": "Leipzig",
        "doi": null,
        "url": null
      },
      "date": "2026-09-21",
      "board": [
        "ATEMÁT",
        "AMACID",
        "RÉAHAA",
        "AINNSC",
        "SAICÊI"
      ],
      "path": [
        [
          2,
          2
        ],
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          1
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          2,
          3
        ],
        [
          2,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          4
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          4,
          4
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ]
      ]
    },
    {
      "id": 18,
      "phrase": "TEMOS QUE SABER E VAMOS SABER",
      "language": "pt-BR",
      "field": "Matemática",
      "subfield": "Fundamentos da Matemática",
      "type": "citação",
      "scientist": "David Hilbert",
      "difficulty": 2,
      "explanation": "Em discurso radiofônico em Königsberg (1930), Hilbert encerrou sua defesa da matemática com este lema — 'temos que saber; vamos saber!' — mais tarde gravado em seu túmulo.",
      "source": {
        "title": "Discurso sobre os fundamentos da matemática",
        "author": "David Hilbert",
        "year": "1930",
        "publisher": "Königsberg, Alemanha",
        "doi": null,
        "url": null
      },
      "date": "2026-09-22",
      "board": [
        "MEQUES",
        "OSTBAS",
        "EREOSA",
        "VAMREB"
      ],
      "path": [
        [
          1,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          2,
          3
        ],
        [
          2,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          3,
          4
        ],
        [
          3,
          3
        ]
      ]
    },
    {
      "id": 19,
      "phrase": "NÃO HÁ CAMINHO REAL PARA A GEOMETRIA",
      "language": "pt-BR",
      "field": "Matemática",
      "subfield": "Geometria",
      "type": "citação",
      "scientist": "Euclides",
      "difficulty": 1,
      "explanation": "Transmitida pelo filósofo Proclo: teria sido a resposta de Euclides ao rei Ptolomeu, que pedia um caminho mais fácil nos Elementos — não existe atalho real para a geometria, há que estudar.",
      "source": {
        "title": "Proclus: A Commentary on the First Book of Euclid's Elements",
        "author": "Proclo de Lícia",
        "year": "1970 (trad.)",
        "publisher": "Princeton University Press",
        "doi": null,
        "url": null
      },
      "date": "2026-09-23",
      "board": [
        "OHÁCAM",
        "RÃHNIA",
        "EONARA",
        "ALPEGE",
        "AIRTMO"
      ],
      "path": [
        [
          2,
          2
        ],
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          1
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          2,
          3
        ],
        [
          2,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          4
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          4,
          4
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ]
      ]
    },
    {
      "id": 20,
      "phrase": "PENSO LOGO EXISTO",
      "language": "pt-BR",
      "field": "Matemática",
      "subfield": "Filosofia da Matemática",
      "type": "citação",
      "scientist": "René Descartes",
      "difficulty": 1,
      "explanation": "O cogito cartesiano, apresentado no 'Discurso do Método' (1637), funda o conhecimento moderno a partir da dúvida radical: a única certeza primeira é a do próprio pensamento. Descartes foi matemático e filósofo.",
      "source": {
        "title": "Discours de la méthode",
        "author": "René Descartes",
        "year": "1637",
        "publisher": "Leiden, Holanda",
        "doi": null,
        "url": null
      },
      "date": "2026-09-24",
      "board": [
        "NELOG",
        "SOPOE",
        "OTSIX"
      ],
      "path": [
        [
          1,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          2,
          4
        ],
        [
          2,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ]
      ]
    },
    {
      "id": 21,
      "phrase": "NA MATEMÁTICA VOCÊ NÃO ENTENDE AS COISAS APENAS SE ACOSTUMA",
      "language": "pt-BR",
      "field": "Matemática",
      "subfield": "Fundamentos da Matemática",
      "type": "citação",
      "scientist": "John von Neumann",
      "difficulty": 3,
      "explanation": "Frase atribuída a von Neumann, um dos pais da computação moderna: na matemática, entender não vem de intuição imediata, mas de convivência e familiaridade com as ideias.",
      "source": {
        "title": "The Man from the Future: The Visionary Life of John von Neumann",
        "author": "Ananyo Bhattacharya",
        "year": "2021",
        "publisher": "W. W. Norton",
        "doi": null,
        "url": null
      },
      "date": "2026-09-25",
      "board": [
        "TAMTICAVOC",
        "EMÁAEOÃNÊS",
        "NETNNOISAA",
        "DEASCCSSPE",
        "AMUTSOAEAN"
      ],
      "path": [
        [
          2,
          4
        ],
        [
          1,
          3
        ],
        [
          0,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          0,
          7
        ],
        [
          0,
          8
        ],
        [
          0,
          9
        ],
        [
          1,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          3,
          4
        ],
        [
          2,
          5
        ],
        [
          2,
          6
        ],
        [
          2,
          7
        ],
        [
          2,
          8
        ],
        [
          1,
          9
        ],
        [
          2,
          9
        ],
        [
          3,
          8
        ],
        [
          3,
          9
        ],
        [
          4,
          9
        ],
        [
          4,
          8
        ],
        [
          3,
          7
        ],
        [
          3,
          6
        ],
        [
          4,
          7
        ],
        [
          4,
          6
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          4,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ]
      ]
    },
    {
      "id": 22,
      "phrase": "SOMOS FEITOS DE MATÉRIA DE ESTRELAS",
      "language": "pt-BR",
      "field": "Astronomia",
      "subfield": "Divulgação",
      "type": "citação",
      "scientist": "Carl Sagan",
      "difficulty": 1,
      "explanation": "Em 'Cosmos' (1980), Sagan lembra que o carbono, o cálcio e o ferro de nosso corpo foram forjados no interior de estrelas: somos, literalmente, matéria estelar — a forma do cosmos conhecer a si mesmo.",
      "source": {
        "title": "Cosmos",
        "author": "Carl Sagan",
        "year": "1980",
        "publisher": "Random House",
        "doi": null,
        "url": null
      },
      "date": "2026-09-26",
      "board": [
        "MOSFEI",
        "EOSOTA",
        "MDSRID",
        "ATÉREE",
        "SALETS"
      ],
      "path": [
        [
          2,
          2
        ],
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          1
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          2,
          3
        ],
        [
          2,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          4
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          4,
          4
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ]
      ]
    },
    {
      "id": 23,
      "phrase": "O UNIVERSO FOI ESCRITO EM CARACTERES MATEMÁTICOS",
      "language": "pt-BR",
      "field": "Astronomia",
      "subfield": "Pensamento Científico",
      "type": "citação",
      "scientist": "Galileu Galilei",
      "difficulty": 3,
      "explanation": "Em 'O Ensaiador' (Il Saggiatore, 1623), Galileu afirma que o grande livro do universo está escrito em linguagem matemática — princípio que funda a física moderna e o método científico.",
      "source": {
        "title": "Il Saggiatore (O Ensaiador)",
        "author": "Galileo Galilei",
        "year": "1623",
        "publisher": "Accademia dei Lincei",
        "doi": null,
        "url": null
      },
      "date": "2026-09-27",
      "board": [
        "INRSOFO",
        "VEUSEIR",
        "IRCOCAA",
        "TOEMTCT",
        "SEREMÁI",
        "MATESOC"
      ],
      "path": [
        [
          2,
          3
        ],
        [
          1,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          5
        ],
        [
          3,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ],
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          5,
          2
        ],
        [
          5,
          3
        ],
        [
          4,
          4
        ],
        [
          4,
          5
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          5,
          5
        ],
        [
          5,
          4
        ]
      ]
    },
    {
      "id": 24,
      "phrase": "AS MÁQUINAS ME SURPREENDEM COM GRANDE FREQUÊNCIA",
      "language": "pt-BR",
      "field": "Computação",
      "subfield": "Inteligência Artificial",
      "type": "citação",
      "scientist": "Alan Turing",
      "difficulty": 2,
      "explanation": "Em palestra de 1951, Alan Turing — criador do teste que leva seu nome — admitiu, com humildade, que as máquinas o surpreendiam com frequência, abrindo caminho para a inteligência artificial.",
      "source": {
        "title": "Can Digital Computers Think? (palestra na BBC)",
        "author": "Alan M. Turing",
        "year": "1951",
        "publisher": "BBC Radio",
        "doi": null,
        "url": null
      },
      "date": "2026-09-28",
      "board": [
        "ÁMINASM",
        "QUSUSEC",
        "RPRAEMO",
        "EENDGMÊ",
        "DNARQUN",
        "EFREAIC"
      ],
      "path": [
        [
          2,
          3
        ],
        [
          1,
          2
        ],
        [
          0,
          1
        ],
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          2,
          2
        ],
        [
          2,
          1
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          5
        ],
        [
          3,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          4,
          1
        ],
        [
          4,
          0
        ],
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          5,
          2
        ],
        [
          5,
          3
        ],
        [
          4,
          4
        ],
        [
          4,
          5
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          5,
          5
        ],
        [
          5,
          4
        ]
      ]
    }
  ]
};

/* -----------------------------------------------------------------
   NÚCLEO TESTÁVEL (sem DOM)
   Pode ser carregado no Node:  const Core = require('./game.js');
----------------------------------------------------------------- */
var AREAS_EMOJI = {
  Química: '⚗️',
  Física: '⚡',
  Biologia: '🧬',
  'Matemática': '📐',
  Astronomia: '🌌',
  'Ciências da Terra': '🌎',
  Computação: '💻',
  Estatística: '📊',
  'Ciência dos Materiais': '🏗️'
};

/* Data-base do calendário diário do MIOLO (primeiro desafio disponível). */
var DATA_BASE_MIOLO = '2026-09-05';

var Core = (function () {
  /* Remove tudo que não for letra ou número, mantém acentos e maiúsculas. */
  function normalizar(frase) {
    return String(frase || '')
      .toUpperCase()
      .replace(/[^\p{L}\p{N}]/gu, '');
  }

  function formatarISO(d) {
    return String(d.getFullYear()).padStart(4, '0') + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  /* Data local de hoje em YYYY-MM-DD (nunca UTC, para não trocar de dia antes da meia-noite). */
  function hojeISO() {
    var a = new Date();
    return formatarISO(new Date(a.getFullYear(), a.getMonth(), a.getDate()));
  }

  /* Soma (ou subtrai) dias a uma data YYYY-MM-DD usando calendário local. */
  function somarDias(iso, delta) {
    if (!iso) return null;
    var p = iso.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + delta);
    return formatarISO(d);
  }

  /* Diferença em dias inteiros entre duas datas YYYY-MM-DD (b - a). */
  function diasEntre(a, b) {
    if (!a || !b) return null;
    var pa = a.split('-'), pb = b.split('-');
    var da = new Date(+pa[0], +pa[1] - 1, +pa[2]).getTime();
    var db = new Date(+pb[0], +pb[1] - 1, +pb[2]).getTime();
    return Math.round((db - da) / 86400000);
  }

  /* Número sequencial (#001, #002, ...) de um desafio pela sua data. */
  function numeroDoDesafio(iso) {
    if (!iso) return null;
    return diasEntre(DATA_BASE_MIOLO, iso) + 1;
  }

  /* Retorna a frase cuja data coincide com a data informada (ou null). */
  function desafioParaData(iso, frases) {
    if (!iso || !frases) return null;
    for (var i = 0; i < frases.length; i++) {
      if (frases[i].date === iso) return frases[i];
    }
    return null;
  }

  /* Grosso modo: duas posições (linha,coluna) são vizinhas nas 8 direções. */
  function saoVizinhas(aL, aC, bL, bC) {
    var dL = Math.abs(aL - bL);
    var dC = Math.abs(aC - bC);
    return dL <= 1 && dC <= 1 && (dL + dC > 0);
  }

  /* Converte índice linear -> [linha, coluna] */
  function linhaColuna(idx, cols) {
    return [Math.floor(idx / cols), idx % cols];
  }

  /* Converte as células escolhidas (índices) nas letras da frase. */
  function letrasDaTrilha(ids, board) {
    var cols = board[0].length;
    var out = '';
    for (var i = 0; i < ids.length; i++) {
      var linCol = linhaColuna(ids[i], cols);
      out += board[linCol[0]][linCol[1]];
    }
    return out;
  }

  /* A sequência formada confere com a frase-alvo? */
  function verificarTentativa(tentativa, frase) {
    return normalizar(tentativa) === normalizar(frase);
  }

  /* Valida um tabuleiro manual: caminho contínuo, sem repetição,
     com exatamente as letras da frase na ordem certa. */
  function validarTabuleiro(board, path, frase) {
    var alvo = normalizar(frase);
    if (!board || !path || !board.length) return { ok: false, motivo: 'inexistente' };
    var linhas = board.length;
    var cols = board[0].length;
    if (path.length !== alvo.length) {
      return { ok: false, motivo: 'tamanho:path=' + path.length + ' alvo=' + alvo.length };
    }
    var usadas = {};
    for (var i = 0; i < path.length; i++) {
      var r = path[i][0];
      var c = path[i][1];
      if (r < 0 || c < 0 || r >= linhas || c >= cols) {
        return { ok: false, motivo: 'fora:(' + r + ',' + c + ')' };
      }
      var key = r * cols + c;
      if (usadas[key]) return { ok: false, motivo: 'repetida:(' + r + ',' + c + ')' };
      usadas[key] = true;
      if (board[r][c] !== alvo[i]) {
        return { ok: false, motivo: 'letra:(' + r + ',' + c + ')=' + board[r][c] + ' esperado=' + alvo[i] };
      }
      if (i > 0) {
        var pr = path[i - 1][0];
        var pc = path[i - 1][1];
        if (!saoVizinhas(pr, pc, r, c)) {
          return { ok: false, motivo: 'disjunta:(' + pr + ',' + pc + ')->(' + r + ',' + c + ')' };
        }
      }
    }
    return { ok: true, alvo: alvo };
  }

  /* Fatora o tamanho da frase num tabuleiro retangular quase quadrado. */
  function fatorGrid(L) {
    if (L < 1) return { linhas: 1, cols: 1 };
    var melhor = null;
    var melhorDif = Infinity;
    /* percorre as colunas mantendo linhas <= colunas (retrato ou paisagem leve) */
    for (var c = 1; c <= L; c++) {
      if (L % c !== 0) continue;
      var r = L / c;
      if (r > c) continue;
      var dif = Math.abs(r - c);
      if (dif < melhorDif) {
        melhorDif = dif;
        melhor = { linhas: r, cols: c };
      }
    }
    return melhor || { linhas: 1, cols: L };
  }

  /* Vizinhos nas 8 direções, ordem fixa para manter o resultado determinístico. */
  var DIRS = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  /* Busca um caminho hamiltoniano (8 vizinhanças) que visita todas as células,
     começando no centro do tabuleiro. */
  function acharCaminho(linhas, cols, sr, sc) {
    var n = linhas * cols;
    var visitado = new Array(n).fill(false);
    var caminho = [];
    function id(r, c) { return r * cols + c; }
    function dfs(r, c) {
      visitado[id(r, c)] = true;
      caminho.push([r, c]);
      if (caminho.length === n) return true;
      for (var i = 0; i < DIRS.length; i++) {
        var nr = r + DIRS[i][0];
        var nc = c + DIRS[i][1];
        if (nr < 0 || nc < 0 || nr >= linhas || nc >= cols) continue;
        if (visitado[id(nr, nc)]) continue;
        if (dfs(nr, nc)) return true;
      }
      caminho.pop();
      visitado[id(r, c)] = false;
      return false;
    }
    dfs(sr, sc);
    return caminho;
  }

  /* Gera um tabuleiro (lista de linhas) e um caminho (coordenadas) para a frase,
     usando todas as células e começando no centro. */
  function gerarTabuleiro(frase) {
    var alvo = normalizar(frase);
    var L = alvo.length;
    var dim = fatorGrid(L);
    var linhas = dim.linhas;
    var cols = dim.cols;
    var sr = Math.floor((linhas - 1) / 2);
    var sc = Math.floor((cols - 1) / 2);
    var caminho = acharCaminho(linhas, cols, sr, sc);
    /* monta a grade de letras (estrita — cada letra é um caractere) */
    var grid = alvo.split('');
    var ordem = {};
    for (var i = 0; i < caminho.length; i++) {
      ordem[caminho[i][0] * cols + caminho[i][1]] = grid[i];
    }
    var board = [];
    for (var r = 0; r < linhas; r++) {
      var linha = '';
      for (var c = 0; c < cols; c++) {
        linha += ordem[r * cols + c] !== undefined ? ordem[r * cols + c] : '·';
      }
      board.push(linha);
    }
    return { board: board, path: caminho };
  }

  /* Garante que a frase tenha tabuleiro e caminho válidos (gera se faltarem). */
  function completarFrase(frase) {
    if (!frase || !frase.phrase) return frase;
    if (!frase.board || !frase.path || !frase.board.length) {
      var gerado = gerarTabuleiro(frase.phrase);
      frase.board = gerado.board;
      frase.path = gerado.path;
    }
    return frase;
  }

  return {
    normalizar: normalizar,
    saoVizinhas: saoVizinhas,
    linhaColuna: linhaColuna,
    letrasDaTrilha: letrasDaTrilha,
    verificarTentativa: verificarTentativa,
    validarTabuleiro: validarTabuleiro,
    fatorGrid: fatorGrid,
    gerarTabuleiro: gerarTabuleiro,
    completarFrase: completarFrase,
    hojeISO: hojeISO,
    somarDias: somarDias,
    diasEntre: diasEntre,
    numeroDoDesafio: numeroDoDesafio,
    desafioParaData: desafioParaData,
    DATA_BASE: DATA_BASE_MIOLO
  };
})();

/* Exporta o núcleo para testes no Node. */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Core: Core, FRASES_FALLBACK: FRASES_FALLBACK, AREAS_EMOJI: AREAS_EMOJI };
}

/* -----------------------------------------------------------------
   APLICATIVO (DOM) — só roda no navegador
----------------------------------------------------------------- */
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  (function () {
    var K = Core;
    var LSCore = {
      chaves: {
        biblioteca: 'miolo_biblioteca',
        melhores: 'miolo_melhores',
        dica: 'miolo_usou_dica',
        tentativas: 'miolo_tentativas',
        sequencia: 'miolo_sequencia'
      },

      /* Plano B: se o localStorage estiver bloqueado (ex.: file:// restrito,
         aba anônima, etc.), guarda em memória para a sessão ainda funcionar. */
      memoria: {},

      _testado: false,
      _disponivel: null,

      armazenamentoDisponivel: function () {
        if (this._testado) return this._disponivel;
        this._testado = true;
        try {
          var probe = 'miolo_probe';
          window.localStorage.setItem(probe, '1');
          var ok = window.localStorage.getItem(probe) === '1';
          window.localStorage.removeItem(probe);
          this._disponivel = ok;
        } catch (e) {
          this._disponivel = false;
        }
        return this._disponivel;
      },

      ler: function (chave, padrao) {
        if (!this.armazenamentoDisponivel()) {
          return chave in this.memoria ? this.memoria[chave] : padrao;
        }
        try {
          var bruto = window.localStorage.getItem(chave);
          return bruto ? JSON.parse(bruto) : padrao;
        } catch (e) {
          return padrao;
        }
      },

      gravar: function (chave, valor) {
        if (!this.armazenamentoDisponivel()) {
          this.memoria[chave] = valor;
          return;
        }
        try {
          window.localStorage.setItem(chave, JSON.stringify(valor));
        } catch (e) {
          /* gravação falhou (ex.: cota cheia) — passa a usar memória para
             manter a sessão coerente em vez de perder silenciosamente. */
          this._disponivel = false;
          this.memoria[chave] = valor;
        }
      },

      biblioteca: function () {
        return this.ler(this.chaves.biblioteca, []);
      },
      salvarBiblioteca: function (lista) {
        this.gravar(this.chaves.biblioteca, lista);
      },

      melhores: function () {
        return this.ler(this.chaves.melhores, {});
      },
      salvarMelhores: function (mapa) {
        this.gravar(this.chaves.melhores, mapa);
      },

      dicas: function () {
        return this.ler(this.chaves.dica, {});
      },
      salvarDicas: function (mapa) {
        this.gravar(this.chaves.dica, mapa);
      },

      tentativas: function () {
        return this.ler(this.chaves.tentativas, {});
      },
      salvarTentativas: function (mapa) {
        this.gravar(this.chaves.tentativas, mapa);
      },
      contarTentativa: function (fraseId) {
        var mapa = this.tentativas();
        var k = String(fraseId);
        mapa[k] = (mapa[k] || 0) + 1;
        this.salvarTentativas(mapa);
        return mapa[k];
      },
      tentativaDe: function (fraseId) {
        var mapa = this.tentativas();
        return mapa[String(fraseId)] || 0;
      },

      sequencia: function () {
        return this.ler(this.chaves.sequencia, { sequencia: 0, ultimo: null });
      },
      salvarSequencia: function (st) {
        this.gravar(this.chaves.sequencia, st);
      }
    };

    var App = {
      frases: [],
      frase: null,
      cols: 0,
      linhas: 0,
      alvo: null,
      trilha: [],          /* índices das células selecionadas, em ordem */
      arrastando: false,
      venceu: false,
      cronometro: null,
      segundos: 0,
      nivelDica: 0,
      indice: 0,           /* desafio selecionado no cartão de início */
      dadoGlobal: null,    /* dados carregados (fetch ou fallback) */
      refs: null,
      promessaCarregar: null
    };

    function $(id) { return document.getElementById(id); }

    function buscarRefs() {
      return {
        tabInicio: $('tab-inicio'),
        tabBiblioteca: $('tab-biblioteca'),
        viewInicio: $('view-inicio'),
        viewJogo: $('view-jogo'),
        viewBiblioteca: $('view-biblioteca'),
        txtTituloCartao: $('txt-titulo-cartao'),
        txtData: $('txt-data'),
        txtArea: $('txt-area'),
        txtDificuldade: $('txt-dificuldade'),
        txtNumero: $('txt-numero'),
        txtPesquisador: $('txt-pesquisador'),
        txtSequencia: $('txt-sequencia'),
        txtNumeroJogo: $('txt-numero-jogo'),
        txtAreaJogo: $('txt-area-jogo'),
        txtDificuldadeJogo: $('txt-dificuldade-jogo'),
        btnAnterior: $('btn-anterior'),
        btnProximo: $('btn-proximo'),
        txtContador: $('txt-contador'),
        cronometro: $('cronometro'),
        grade: $('grade'),
        grille: $('grille'),
        caminhoSvg: $('caminho-svg'),
        trilha: $('trilha'),
        feedback: $('feedback'),
        btnIniciar: $('btn-iniciar'),
        btnDesfazer: $('btn-desfazer'),
        btnDica: $('btn-dica'),
        caixaDica: $('caixa-dica'),
        textoDica: $('texto-dica'),
        btnVoltarInicio: $('btn-voltar-inicio'),
        btnAjuda: $('btn-ajuda'),
        modalAjuda: $('modal-ajuda'),
        btnFecharAjuda: $('btn-fechar-ajuda'),
        btnOkAjuda: $('btn-ok-ajuda'),
        overlayVitoria: $('overlay-vitoria'),
        modalResultado: $('modal-resultado'),
        btnFecharResultado: $('btn-fechar-resultado'),
        btnVerBiblioteca: $('btn-ver-biblioteca'),
        resFrase: $('res-frase'),
        resArea: $('res-area'),
        resTipo: $('res-tipo'),
        resCientistaWrap: $('res-cientista-wrap'),
        resCientista: $('res-cientista'),
        resTempo: $('res-tempo'),
        resExplicacao: $('res-explicacao'),
        resFonte: $('res-fonte'),
        libContadorHome: $('lib-contador-home'),
        libVaziaHome: $('lib-vazia-home'),
        libListaHome: $('lib-lista-home'),
        avisoArmazenamento: $('aviso-armazenamento'),
        libTotal: $('lib-total'),
        libOpcoes: $('lib-opcoes'),
        btnVoltarArquivo: $('btn-voltar-arquivo'),
        toast: $('toast')
      };
    }

    /* ---------------- Carregamento dos dados ---------------- */

    function carregarFrases() {
      if (App.promessaCarregar) return App.promessaCarregar;
      App.promessaCarregar = new Promise(function (resolve) {
        function preparar(dados) {
          App.dadoGlobal = dados;
          App.frases = dados.frases;
          /* frases novas sem tabuleiro/caminho recebem um gerado no carregamento */
          App.frases.forEach(K.completarFrase);
        }
        fetch('data/frases.json')
          .then(function (res) {
            if (!res.ok) throw new Error('http ' + res.status);
            return res.json();
          })
          .then(function (dados) {
            if (!dados || !dados.frases || !dados.frases.length) throw new Error('dados vazios');
            preparar(dados);
          })
          .catch(function () {
            preparar(FRASES_FALLBACK);
          })
          .then(function () { resolve(); });
      });
      return App.promessaCarregar;
    }

    /* ---------------- Formatação / utilidades ---------------- */

    function formatarSegundos(s) {
      var m = Math.floor(s / 60);
      var seg = s % 60;
      return (m < 10 ? '0' + m : m) + ':' + (seg < 10 ? '0' + seg : seg);
    }

    var DIAS_SEMANA = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    var MESES = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    /* "Sábado, 5 de setembro" a partir de uma data YYYY-MM-DD (calendário local). */
    function formatarDataExtenso(iso) {
      if (!iso) return '—';
      var p = iso.split('-');
      var d = new Date(+p[0], +p[1] - 1, +p[2]);
      return DIAS_SEMANA[d.getDay()] + ', ' + (+p[2]) + ' de ' + MESES[+p[1] - 1];
    }

    function formatarDataAtual() {
      return formatarDataExtenso(K.hojeISO());
    }

    function formatarDataRegistro(epochMs) {
      var d = new Date(epochMs);
      var dd = String(d.getDate()).padStart(2, '0');
      var mm = String(d.getMonth() + 1).padStart(2, '0');
      var hh = String(d.getHours()).padStart(2, '0');
      var mi = String(d.getMinutes()).padStart(2, '0');
      return dd + '/' + mm + '/' + d.getFullYear() + ' · ' + hh + ':' + mi;
    }

    function emojiDaArea(campo) {
      return AREAS_EMOJI[campo] || '🔬';
    }

    function nomeDificuldade(d) {
      if (d >= 4) return 'Muito difícil';
      if (d === 3) return 'Difícil';
      if (d === 2) return 'Média';
      return 'Fácil';
    }

    function mostrarToast(mensagem) {
      var refs = App.refs;
      if (!refs) return;
      refs.toast.textContent = mensagem;
      refs.toast.classList.add('is-visible');
      clearTimeout(App._toastTimer);
      App._toastTimer = setTimeout(function () {
        refs.toast.classList.remove('is-visible');
      }, 2400);
    }

    /* ---------------- Navegação entre telas ---------------- */

    function irPara(nome) {
      var refs = App.refs;
      var mapa = {
        inicio: refs.viewInicio,
        jogo: refs.viewJogo,
        biblioteca: refs.viewBiblioteca
      };
      Object.keys(mapa).forEach(function (k) { mapa[k].hidden = k !== nome; });
      refs.tabInicio.classList.toggle('is-active', nome === 'inicio');
      refs.tabBiblioteca.classList.toggle('is-active', nome === 'biblioteca');
      if (nome === 'inicio') {
        renderSequencia();
        atualizarCartaoInicio();
      }
      window.scrollTo(0, 0);
    }

    /* ---------------- Timer ---------------- */

    function iniciarCronometro() {
      pararCronometro();
      App.segundos = 0;
      App.refs.cronometro.textContent = '00:00';
      App.cronometro = setInterval(function () {
        App.segundos++;
        App.refs.cronometro.textContent = formatarSegundos(App.segundos);
      }, 1000);
    }

    function pararCronometro() {
      if (App.cronometro) {
        clearInterval(App.cronometro);
        App.cronometro = null;
      }
    }

    /* ---------------- Construção da grade ---------------- */

    function montarGrade() {
      var refs = App.refs;
      var f = App.frase;
      App.linhas = f.board.length;
      App.cols = f.board[0].length;
      App.alvo = K.normalizar(f.phrase);
      App.trilha = [];
      App.venceu = false;
      App.nivelDica = 0;
      refs.grade.innerHTML = '';

      var estilo = '';
      for (var c = 0; c < App.cols; c++) estilo += ' 1fr';
      refs.grade.style.gridTemplateColumns = estilo.trim();

      for (var r = 0; r < App.linhas; r++) {
        for (var c = 0; c < App.cols; c++) {
          var letra = f.board[r][c];
          var celula = document.createElement('button');
          celula.type = 'button';
          celula.dataset.id = String(r * App.cols + c);
          celula.dataset.row = String(r);
          celula.dataset.col = String(c);
          if (letra === '.') {
            celula.className = 'cell is-vazio';
            celula.dataset.vazio = '1';
            celula.setAttribute('aria-hidden', 'true');
            celula.tabIndex = -1;
          } else {
            celula.className = 'cell';
            celula.textContent = letra;
            if (f.path[0][0] === r && f.path[0][1] === c) celula.classList.add('is-inicio');
          }
          refs.grade.appendChild(celula);
        }
      }

      limparCaminhoSvg();
      atualizarTrilha();
      feedbackOcultar();
      refs.caixaDica.hidden = true;
      refs.textoDica.textContent = '';
    }

    function limparCaminhoSvg() {
      var svg = App.refs.caminhoSvg;
      while (svg.firstChild) svg.removeChild(svg.firstChild);
    }

    function desenharCaminho() {
      var refs = App.refs;
      limparCaminhoSvg();
      if (App.trilha.length < 2) return;
      var svg = refs.caminhoSvg;
      var rectG = refs.grille.getBoundingClientRect();
      var pontos = App.trilha.map(function (idx) {
        var cel = refs.grade.children[idx];
        var r = cel.getBoundingClientRect();
        return [r.left - rectG.left + r.width / 2, r.top - rectG.top + r.height / 2];
      });
      for (var i = 0; i < pontos.length - 1; i++) {
        var linha = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        linha.setAttribute('x1', pontos[i][0]);
        linha.setAttribute('y1', pontos[i][1]);
        linha.setAttribute('x2', pontos[i + 1][0]);
        linha.setAttribute('y2', pontos[i + 1][1]);
        linha.setAttribute('class', 'caminho-aresta');
        svg.appendChild(linha);
      }
      var bola = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      bola.setAttribute('cx', pontos[pontos.length - 1][0]);
      bola.setAttribute('cy', pontos[pontos.length - 1][1]);
      bola.setAttribute('r', '7');
      bola.setAttribute('class', 'caminho-ponta');
      svg.appendChild(bola);
    }

    function atualizarTrilha() {
      var refs = App.refs;
      if (!refs || !App.frase) return;
      refs.trilha.innerHTML = '';
      var frase = App.frase.phrase.toUpperCase();
      var k = 0;
      for (var i = 0; i < frase.length; i++) {
        var ch = frase[i];
        if (ch === ' ') continue; /* esconde os espaços — nem vira "jogo da forca" */
        var slot = document.createElement('span');
        slot.className = 'trilha-slot';
        if (k < App.trilha.length) {
          slot.classList.add('preenchido');
          var letra = App.frase.board[Math.floor(App.trilha[k] / App.cols)][App.trilha[k] % App.cols];
          slot.textContent = letra;
          if (letra === App.alvo[k]) slot.classList.add('ok');
          else slot.classList.add('erro');
        }
        refs.trilha.appendChild(slot);
        k++;
      }
      refs.grade.querySelectorAll('.cell').forEach(function (cel, idx) {
        var posicao = App.trilha.indexOf(idx);
        if (posicao !== -1) cel.classList.add('is-selected');
        else cel.classList.remove('is-selected');
        if (posicao !== -1 && App.frase.board[Math.floor(idx / App.cols)][idx % App.cols] !== App.alvo[posicao]) {
          cel.classList.add('is-erro');
        } else {
          cel.classList.remove('is-erro');
        }
      });
    }

    /* ---------------- Feedback ---------------- */

    function feedbackDizer(mensagem, tipo) {
      var refs = App.refs;
      refs.feedback.textContent = mensagem;
      refs.feedback.classList.remove('is-erro', 'is-ok');
      if (tipo) refs.feedback.classList.add('is-' + tipo);
      refs.feedback.hidden = false;
      clearTimeout(App._fbTimer);
      App._fbTimer = setTimeout(feedbackOcultar, 2000);
    }

    function feedbackOcultar() {
      var refs = App.refs;
      if (!refs) return;
      refs.feedback.hidden = true;
      refs.feedback.classList.remove('is-erro', 'is-ok');
    }

    /* ---------------- Interação de arraste ---------------- */

    function celulaNoPonto(clienteX, clienteY) {
      var refs = App.refs;
      var alvo = document.elementFromPoint(clienteX, clienteY);
      if (!alvo || !refs.grade.contains(alvo)) return null;
      var cel = alvo.closest ? alvo.closest('.cell') : null;
      return cel && refs.grade.contains(cel) ? cel : null;
    }

    function pontoDentroDaGrade(x, y) {
      var r = App.refs.grille.getBoundingClientRect();
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
    }

    function podeAdicionar(cel) {
      if (!cel || cel.dataset && cel.dataset.vazio === '1') return false;
      var ehId = parseInt(cel.dataset.id, 10);
      if (!App.trilha.length) {
        return ehId === App.frase.path[0][0] * App.cols + App.frase.path[0][1];
      }
      if (App.trilha.indexOf(ehId) !== -1) return false;
      var ultimo = App.trilha[App.trilha.length - 1];
      var a = K.linhaColuna(ultimo, App.cols);
      var b = K.linhaColuna(ehId, App.cols);
      return K.saoVizinhas(a[0], a[1], b[0], b[1]);
    }

    function adicionarCelula(cel) {
      var ehId = parseInt(cel.dataset.id, 10);
      App.trilha.push(ehId);
      atualizarTrilha();
      desenharCaminho();
      feedbackOcultar();
    }

    function aoPointerDown(ev) {
      if (App.venceu || !App.frase) return;
      if (ev.target && ev.target.closest && !ev.target.closest('.cell')) return;
      var cel = ev.target.closest('.cell');
      if (!cel) return;
      var ehId = parseInt(cel.dataset.id, 10);
      if (App.trilha.length > 0 && ehId === App.frase.path[0][0] * App.cols + App.frase.path[0][1]) {
        limparSelecao();
      }
      if (!podeAdicionar(cel)) {
        var ehInicio = App.frase.path[0][0] * App.cols + App.frase.path[0][1];
        if (App.trilha.length === 0 && parseInt(cel.dataset.id, 10) !== ehInicio) {
          feedbackDizer('Comece pela célula em âmbar.', 'erro');
        } else if (App.trilha.length > 0) {
          var idUltimo = App.trilha[App.trilha.length - 1];
          var a = K.linhaColuna(idUltimo, App.cols);
          var b = K.linhaColuna(parseInt(cel.dataset.id, 10), App.cols);
          if (!K.saoVizinhas(a[0], a[1], b[0], b[1])) {
            feedbackDizer('Conecte apenas letras vizinhas.', 'erro');
          }
        }
        return;
      }
      App.arrastando = true;
      App._lastPoint = { x: ev.clientX, y: ev.clientY };
      adicionarCelula(cel);
      ev.preventDefault();
      try { App.refs.grade.setPointerCapture(ev.pointerId); } catch (e) { /* sem suporte: segue assim */ }
      estadoArrasto(true);
    }

    function aoPointerMove(ev) {
      if (!App.arrastando || !App.frase) return;
      var x = ev.clientX;
      var y = ev.clientY;
      if (!pontoDentroDaGrade(x, y)) return;

      var cel = celulaNoPonto(x, y);
      if (!cel) return;

      /* Amostra o segmento entre o último ponto e o cursor e conecta,
         em ordem, todas as células vizinhas válidas que encontrar. */
      var hops = Math.max(1, Math.round(Math.hypot(x - App._lastPoint.x, y - App._lastPoint.y) / 10) + 1);
      for (var i = 1; i <= hops; i++) {
        var fracao = i / hops;
        var px = App._lastPoint.x + (x - App._lastPoint.x) * fracao;
        var py = App._lastPoint.y + (y - App._lastPoint.y) * fracao;
        var c2 = celulaNoPonto(px, py);
        if (c2 && podeAdicionar(c2)) adicionarCelula(c2);
      }
      App._lastPoint = { x: x, y: y };
      ev.preventDefault();
    }

    function aoPointerUp() {
      if (!App.arrastando) return;
      App.arrastando = false;
      estadoArrasto(false);
      verificar();
    }

    function aoPointerCancel() {
      App.arrastando = false;
      estadoArrasto(false);
      limparSelecao();
    }

    function estadoArrasto(ativa) {
      if (ativa) {
        document.body.classList.add('is-dragging');
        document.body.style.userSelect = 'none';
      } else {
        document.body.classList.remove('is-dragging');
        document.body.style.userSelect = '';
      }
    }

    /* ---------------- Verificação ---------------- */

    function verificar() {
      if (App.venceu || !App.frase) return;
      LSCore.contarTentativa(App.frase.id);
      var refs = App.refs;
      if (App.trilha.length < 2) {
        feedbackDizer('Continue arrastando pelas letras vizinhas.', 'erro');
        return;
      }
      var tentativa = K.letrasDaTrilha(App.trilha, App.frase.board);
      if (tentativa === App.alvo) {
        vencer();
      } else {
        refs.grade.classList.remove('shake');
        void refs.grade.offsetWidth; /* reinicia a animação */
        refs.grade.classList.add('shake');
        feedbackDizer('Quase! Deixe em verde as letras certas — corrija com DESFAZER ou toque na célula âmbar para recomeçar.', 'erro');
      }
    }

    /* ---------------- Vitória ---------------- */

    function vencer() {
      App.venceu = true;
      pararCronometro();

      registrarMelhorTempo();
      registrarDescoberta();
      registrarSequencia();
      renderSequencia();

      var refs = App.refs;
      refs.grade.classList.add('is-vencida');
      refs.overlayVitoria.hidden = false;
      setTimeout(function () {
        refs.overlayVitoria.hidden = true;
        abrirResultado();
      }, 1800);
    }

    function registrarMelhorTempo() {
      var mapa = LSCore.melhores();
      var id = String(App.frase.id);
      if (!(id in mapa) || App.segundos < mapa[id]) mapa[id] = App.segundos;
      LSCore.salvarMelhores(mapa);
    }

    function registrarDescoberta() {
      var lista = LSCore.biblioteca();
      var jaExiste = lista.some(function (e) { return e.phraseId === App.frase.id; });
      if (!jaExiste) {
        lista.unshift({
          phraseId: App.frase.id,
          numero: numeroDoDesafioExibido(App.frase),
          data: App.frase.date || null,
          phrase: App.frase.phrase,
          campo: App.frase.field,
          subcampo: App.frase.subfield,
          tipo: App.frase.type,
          cientista: App.frase.scientist,
          explicacao: App.frase.explanation,
          fonte: App.frase.source ? App.frase.source.title : null,
          autor: App.frase.source ? App.frase.source.author : null,
          ano: App.frase.source ? App.frase.source.year : null,
          editora: App.frase.source ? App.frase.source.publisher : null,
          tempo: App.segundos,
          tentativas: LSCore.tentativaDe(App.frase.id),
          usouDica: App.nivelDica > 0,
          descobertoEm: Date.now()
        });
        LSCore.salvarBiblioteca(lista);
      }
      renderBibliotecaHome();
    }

    /* Sequência de dias seguidos resolvidos (estilo “🔥 sequência”). */
    function registrarSequencia() {
      var hoje = K.hojeISO();
      var st = LSCore.sequencia();
      var ontem = K.somarDias(hoje, -1);
      if (st.ultimo === hoje) {
        /* já contado hoje (rejogo do mesmo dia) — mantém */
      } else if (st.ultimo === ontem) {
        st.sequencia = (st.sequencia || 0) + 1;
      } else {
        st.sequencia = 1;
      }
      st.ultimo = hoje;
      LSCore.salvarSequencia(st);
    }

    function renderSequencia() {
      var refs = App.refs;
      if (!refs || !refs.txtSequencia) return;
      var st = LSCore.sequencia();
      var n = st.sequencia || 0;
      refs.txtSequencia.textContent = n > 0 ? n + (n === 1 ? ' dia' : ' dias') : '—';
    }

    function abrirResultado() {
      var refs = App.refs;
      var f = App.frase;
      var fonte = [];
      if (f.source) {
        if (f.source.title) fonte.push(f.source.title);
        if (f.source.author) fonte.push(f.source.author);
        if (f.source.year) fonte.push(f.source.year);
        if (f.source.publisher) fonte.push(f.source.publisher);
      }
      refs.resFrase.textContent = f.phrase;
      refs.resArea.textContent = emojiDaArea(f.field) + ' ' + f.field + (f.subfield ? ' — ' + f.subfield : '');
      refs.resTipo.textContent = (f.type || '').charAt(0).toUpperCase() + (f.type || '').slice(1);
      refs.resCientista.textContent = f.scientist || '—';
      refs.resCientistaWrap.hidden = !f.scientist;
      refs.resTempo.textContent = formatarSegundos(App.segundos);
      if (App.nivelDica > 0) {
        refs.resTempo.textContent += ' · com ' + App.nivelDica + (App.nivelDica === 1 ? ' dica' : ' dicas');
      }
      refs.resExplicacao.textContent = f.explanation || 'Sem explicação registrada.';
      refs.resFonte.textContent = fonte.length ? fonte.join(' · ') : 'Fonte não informada para esta frase.';
      refs.modalResultado.hidden = false;
    }

    function fecharResultado() {
      App.refs.modalResultado.hidden = true;
      irPara('inicio');
    }

    /* ---------------- DESFAZER ---------------- */

    /* Remove somente a última letra traçada, preservando as anteriores. */
    function desfazerUltimo() {
      if (!App.frase || App.venceu) return;
      if (!App.trilha.length) {
        feedbackDizer('Nada para desfazer.', 'erro');
        return;
      }
      App.trilha.pop();
      desenharCaminho();
      atualizarTrilha();
      feedbackOcultar();
    }

    function limparSelecao() {
      App.trilha = [];
      limparCaminhoSvg();
      atualizarTrilha();
    }

    /* ---------------- DICA ---------------- */

    function aplicarDica() {
      var refs = App.refs;
      var f = App.frase;
      var niveis = [
        'Área: ' + f.field + (f.subfield ? ' · ' + f.subfield : ''),
        'Tipo: ' + f.type + (f.scientist ? ' · Cientista: ' + f.scientist : ''),
        'Contexto: ' + breveContexto(f),
        'Primeira palavra: "' + primeiraPalavra(f.phrase) + '". A frase tem ' + App.alvo.length + ' letras.'
      ];
      var dica = niveis[App.nivelDica];
      App.nivelDica++;
      refs.textoDica.textContent = dica;
      refs.caixaDica.hidden = false;
      var mapa = LSCore.dicas();
      mapa[String(f.id)] = App.nivelDica;
      LSCore.salvarDicas(mapa);
      if (App.nivelDica >= niveis.length) {
        refs.btnDica.title = 'Você já usou todas as dicas.';
        refs.btnDica.classList.add('esgotado');
      }
    }

    function primeiraPalavra(frase) {
      var palavras = frase.split(/\s+/).filter(Boolean);
      return palavras.length ? palavras[0] : frase;
    }

    function breveContexto(f) {
      if (!f.explanation) return 'Sem contexto adicional.';
      var idx = f.explanation.indexOf('. ');
      return idx === -1 ? f.explanation : f.explanation.slice(0, idx + 1);
    }

    /* ---------------- Biblioteca (render) ---------------- */

    function renderBibliotecaHome() {
      var refs = App.refs;
      var lista = LSCore.biblioteca();
      refs.libContadorHome.textContent = String(lista.length);
      if (!lista.length) {
        refs.libVaziaHome.hidden = false;
        refs.libListaHome.hidden = true;
        refs.libListaHome.innerHTML = '';
        return;
      }
      refs.libVaziaHome.hidden = true;
      refs.libListaHome.hidden = false;
      refs.libListaHome.innerHTML = '';
      lista.slice(0, 3).forEach(function (item) {
        var li = document.createElement('li');
        li.className = 'lib-item lib-item-clicavel';
        li.appendChild(itemHtml(item));
        li.addEventListener('click', function () {
          bibliotecaDetalhe(item.phraseId);
        });
        refs.libListaHome.appendChild(li);
      });
    }

    function renderBibliotecaPagina() {
      var refs = App.refs;
      var lista = LSCore.biblioteca();
      refs.libTotal.textContent = String(lista.length);
      refs.libOpcoes.innerHTML = '';
      if (!lista.length) {
        var vazio = document.createElement('div');
        vazio.className = 'lib-vazia';
        vazio.innerHTML = '<p>Nenhuma descoberta ainda. 🧪</p><p class="lib-vazia-sub">Resolva o desafio do dia — ele fica guardado aqui para sempre.</p>';
        refs.libOpcoes.appendChild(vazio);
        return;
      }
      var listaEl = document.createElement('ul');
      listaEl.className = 'lib-lista lib-lista-grande';
      lista.forEach(function (item) {
        var li = document.createElement('li');
        li.className = 'lib-item lib-item-clicavel';
        li.appendChild(itemHtml(item));
        li.addEventListener('click', function () {
          bibliotecaDetalhe(item.phraseId);
        });
        listaEl.appendChild(li);
      });
      refs.libOpcoes.appendChild(listaEl);
    }

    function itemHtml(item) {
      var div = document.createElement('div');
      var linha = document.createElement('div');
      linha.className = 'lib-linha-topo';
      var topo = [
        item.numero ? '<span class="pill pill-numero">#' + String(item.numero).padStart(3, '0') + '</span>' : '',
        '<span class="pill pill-miolo">' + emojiDaArea(item.campo) + ' ' + (item.campo || '—') + '</span>',
        item.usouDica ? '<span class="pill pill-dica">com dica</span>' : ''
      ].join('');
      linha.innerHTML = topo;
      var frase = document.createElement('p');
      frase.className = 'lib-frase';
      frase.textContent = item.phrase;
      var meta = document.createElement('p');
      meta.className = 'lib-meta';
      meta.textContent = formatarTempoTexto(item.tempo) + (item.data ? ' · ' + formatarDataExtenso(item.data) : '') + ' · ' + formatarDataRegistro(item.descobertoEm);
      div.appendChild(linha);
      div.appendChild(frase);
      div.appendChild(meta);
      return div;
    }

    function formatarTempoTexto(s) {
      return formatarSegundos(s);
    }

    function bibliotecaDetalhe(phraseId) {
      var refs = App.refs;
      var lista = LSCore.biblioteca();
      var item = lista.filter(function (e) { return e.phraseId === phraseId; })[0];
      if (!item) return;

      refs.libOpcoes.innerHTML = '';
      var volver = document.createElement('button');
      volver.type = 'button';
      volver.className = 'btn btn-secondary btn-pequeno';
      volver.textContent = '← Voltar à lista';
      volver.addEventListener('click', renderBibliotecaPagina);

      var card = document.createElement('div');
      card.className = 'card arquivo-detalhe';

      var frase = document.createElement('p');
      frase.className = 'quotation';
      frase.textContent = item.phrase;

      var meta = document.createElement('div');
      meta.className = 'res-meta';
      var linhas = [
        ['Desafio', item.numero ? '#' + String(item.numero).padStart(3, '0') : '—'],
        ['Data', item.data ? formatarDataExtenso(item.data) : '—'],
        ['Área', item.campo + (item.subcampo ? ' — ' + item.subcampo : '')],
        ['Tipo', item.tipo || '—'],
        ['Cientista', item.cientista || '—'],
        ['Tempo', formatarTempoTexto(item.tempo) + (item.usouDica ? ' (com dica)' : '')],
        ['Tentativas', item.tentativas != null ? String(item.tentativas) : '—'],
        ['Descoberto em', formatarDataRegistro(item.descobertoEm)]
      ];
      linhas.forEach(function (par) {
        var row = document.createElement('div');
        row.className = 'meta-row';
        var sp = document.createElement('span');
        sp.textContent = par[0];
        var st = document.createElement('strong');
        st.textContent = par[1];
        row.appendChild(sp);
        row.appendChild(st);
        meta.appendChild(row);
      });

      var bloco = document.createElement('div');
      bloco.className = 'res-bloco';
      var h3 = document.createElement('h3');
      h3.textContent = 'Explicação';
      var p = document.createElement('p');
      p.textContent = item.explicacao || 'Sem explicação registrada.';
      bloco.appendChild(h3);
      bloco.appendChild(p);

      card.appendChild(frase);
      card.appendChild(meta);
      card.appendChild(bloco);
      refs.libOpcoes.appendChild(volver);
      refs.libOpcoes.appendChild(card);
      window.scrollTo(0, 0);
    }

    /* ---------------- Início do desafio ---------------- */

    /* Desafio correspondente à data local de hoje (função do jogo diário).
       Mesma data -> mesmo desafio, independentemente de sessão/anotações. */
    function getDailyChallenge() {
      return K.desafioParaData(K.hojeISO(), App.frases);
    }

    /* Índice (em App.frases) da frase correspondente à data local de hoje. */
    function indiceDoDesafioDeHoje() {
      if (!App.frases.length) return -1;
      var f = getDailyChallenge();
      return f ? App.frases.indexOf(f) : -1;
    }

    /* Número exibido (#001, #002, ...) para uma frase — derivado da data. */
    function numeroDoDesafioExibido(f) {
      var n = K.numeroDoDesafio(f.date);
      return n != null ? n : f.id;
    }

    /* Atualiza o cartão do desafio da tela inicial. Na experiência normal,
       mostra sempre o desafio do dia; no modo dev, o desafio selecionado. */
    function atualizarCartaoInicio() {
      var refs = App.refs;
      if (!refs) return;
      renderSequencia();
      if (!App.frases.length) return;

      var f = null;
      if (DEV_MODE) {
        f = App.frases[App.indice % App.frases.length];
      } else {
        f = getDailyChallenge();
        App.indice = f ? App.frases.indexOf(f) : -1;
      }

      if (!f) {
        refs.txtTituloCartao.textContent = 'SEM DESAFIO PARA HOJE';
        refs.txtData.textContent = formatarDataExtenso(K.hojeISO());
        refs.txtNumero.textContent = '—';
        refs.txtArea.textContent = '';
        refs.txtDificuldade.textContent = '—';
        refs.txtPesquisador.textContent = 'O próximo desafio já está sendo preparado.';
        refs.btnIniciar.disabled = true;
        refs.btnIniciar.textContent = 'INDISPONÍVEL';
        return;
      }

      refs.btnIniciar.disabled = false;
      refs.btnIniciar.textContent = 'COMEÇAR DESAFIO';
      refs.txtTituloCartao.textContent = DEV_MODE ? 'MODO TESTE (DEV)' : 'DESAFIO DE HOJE';
      refs.txtData.textContent = formatarDataExtenso(DEV_MODE ? f.date : K.hojeISO());
      refs.txtNumero.textContent = String(numeroDoDesafioExibido(f)).padStart(3, '0');
      refs.txtArea.textContent = emojiDaArea(f.field) + ' ' + f.field;
      refs.txtDificuldade.textContent = nomeDificuldade(f.difficulty);
      refs.txtPesquisador.textContent = f.scientist || '—';
      refs.txtContador.textContent = ((App.indice % App.frases.length) + 1) + ' / ' + App.frases.length;
    }

    /* Só navega no modo de desenvolvimento (fora dele não há seletor). */
    function navegarDesafio(delta) {
      if (!DEV_MODE || !App.frases.length) return;
      App.indice = (App.indice + delta + App.frases.length) % App.frases.length;
      atualizarCartaoInicio();
    }

    function iniciarDesafio() {
      if (!App.frases.length) return;
      if (App.indice < 0 || App.indice >= App.frases.length) {
        mostrarToast('Ainda não existe desafio para hoje.');
        return;
      }
      App.frase = App.frases[App.indice];
      var refs = App.refs;
      var numero = String(numeroDoDesafioExibido(App.frase)).padStart(3, '0');
      refs.txtNumeroJogo.textContent = '#' + numero;
      refs.txtAreaJogo.textContent = emojiDaArea(App.frase.field) + ' ' + App.frase.field;
      refs.txtDificuldadeJogo.textContent = nomeDificuldade(App.frase.difficulty);
      montarGrade();
      irPara('jogo');
      iniciarCronometro();
    }

    function cancelarSePreciso() {
      if (App.frase && !App.venceu) {
        pararCronometro();
        App.frase = null;
        App.trilha = [];
        App.venceu = false;
        mostrarToast('Desafio cancelado.');
      }
    }

    /* ---------------- Eventos globais ---------------- */

    function ligar(refs) {
      refs.btnIniciar.addEventListener('click', iniciarDesafio);

      refs.btnAnterior.addEventListener('click', function () { navegarDesafio(-1); });
      refs.btnProximo.addEventListener('click', function () { navegarDesafio(1); });

      refs.grade.addEventListener('pointerdown', aoPointerDown);
      refs.grade.addEventListener('pointermove', aoPointerMove);
      refs.grade.addEventListener('pointerup', aoPointerUp);
      refs.grade.addEventListener('pointercancel', aoPointerCancel);
      refs.grade.addEventListener('contextmenu', function (ev) { ev.preventDefault(); });

      refs.btnDesfazer.addEventListener('click', function () {
        if (App.frase && !App.venceu) {
          desfazerUltimo();
        }
      });

      refs.btnDica.addEventListener('click', function () {
        if (!App.frase || App.venceu) return;
        var niveis = 4;
        if (App.nivelDica >= niveis) {
          mostrarToast('Você já usou todas as dicas deste desafio.');
          return;
        }
        aplicarDica();
      });

      refs.btnVoltarInicio.addEventListener('click', function () {
        cancelarSePreciso();
        irPara('inicio');
      });

      refs.tabInicio.addEventListener('click', function () {
        cancelarSePreciso();
        irPara('inicio');
      });
      refs.tabBiblioteca.addEventListener('click', function () {
        cancelarSePreciso();
        renderBibliotecaPagina();
        irPara('biblioteca');
      });

      refs.btnVoltarArquivo.addEventListener('click', function () { irPara('inicio'); });

      refs.btnVerBiblioteca.addEventListener('click', function () {
        refs.modalResultado.hidden = true;
        renderBibliotecaPagina();
        irPara('biblioteca');
      });
      refs.btnFecharResultado.addEventListener('click', fecharResultado);

      refs.btnAjuda.addEventListener('click', function () { refs.modalAjuda.hidden = false; });
      refs.btnAjuda.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); refs.modalAjuda.hidden = false; }
      });
      [refs.btnFecharAjuda, refs.btnOkAjuda].forEach(function (b) {
        b.addEventListener('click', function () { refs.modalAjuda.hidden = true; });
      });

      [refs.modalResultado, refs.modalAjuda].forEach(function (modal) {
        modal.addEventListener('click', function (ev) {
          if (ev.target === modal) {
            if (modal === refs.modalResultado) fecharResultado();
            else modal.hidden = true;
          }
        });
      });
      document.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape') {
          if (!refs.modalResultado.hidden) fecharResultado();
          if (!refs.modalAjuda.hidden) refs.modalAjuda.hidden = true;
        }
      });
    }

    /* ---------------- Inicialização ---------------- */

    function iniciar() {
      App.refs = buscarRefs();
      ligar(App.refs);
      if (DEV_MODE) document.body.classList.add('is-dev');
      avisarStorageIndisponivel();
      App.refs.txtData.textContent = formatarDataAtual();
      /* pré-enche o cartão com o desafio da data local */
      carregarFrases().then(function () {
        if (App.frases.length) {
          App.indice = indiceDoDesafioDeHoje();
          if (DEV_MODE && App.indice < 0) App.indice = 0;
          atualizarCartaoInicio();
        } else {
          renderSequencia();
        }
        renderBibliotecaHome();
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', iniciar);
    } else {
      iniciar();
    }

    function avisarStorageIndisponivel() {
      if (LSCore.armazenamentoDisponivel()) return;
      var refs = App.refs;
      if (refs.avisoArmazenamento) refs.avisoArmazenamento.hidden = false;
      mostrarToast('Armazenamento bloqueado pelo navegador: suas descobertas não serão salvas ao fechar a janela. Use um servidor local (ex.: python -m http.server).');
    }
  })();
}