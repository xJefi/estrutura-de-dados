/* Crie uma função que verifica se uma expressão matemática tem parênteses balanceados, como: 
●  (a + b) * (c - d) → ok 
●  (a + b * (c - d) → erro
*/
const { Pilha } = require("./pilha")
const p = new Pilha()

let expressao = '(a + b) * (c - d)'

for (let elemento of expressao) {
    if (elemento === "(") {
        p.push(elemento)
    }

    if (elemento === ")") {

        if (p.isEmpty()) {
            console.log("Erro: parêntese fechando sem abertura.")
            return
        }
        p.pop()
    }
}

if (p.isEmpty()) {
    console.log("Expressão correta!")
} else {
    console.log("Expressão incorreta!")
}