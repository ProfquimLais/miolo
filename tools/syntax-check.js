const fs = require("fs");
const path = require("path");
const js = fs.readFileSync(path.join(__dirname, "..", "game.js"), "utf8");
const abre = (js.match(/\{/g) || []).length, fecha = (js.match(/\}/g) || []).length;
const pa = (js.match(/\(/g) || []).length, pf = (js.match(/\)/g) || []).length;
console.log("chaves: " + abre + "/" + fecha + " | parens: " + pa + "/" + pf);
new Function(js); console.log("game.js compila (sintaxe OK)");
