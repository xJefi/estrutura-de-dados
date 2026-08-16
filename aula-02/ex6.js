//Verifique se uma expressão contém parênteses, colchetes e chaves corretamente balanceados.

const { Pilha } = require("./pilha")

const p = new Pilha()

let expressao = "{ [ (a + b) * (c - d) ] }"

for (let elemento of expressao) {

    // Se for abertura, coloca na pilha
    if (elemento === "(" || elemento === "[" || elemento === "{") {
        p.push(elemento)
    }

    // Se for fechamento, verifica o correspondente
    if (elemento === ")" || elemento === "]" || elemento === "}") {

        if (p.isEmpty()) {
            console.log("Expressão incorreta!")
            return
        }

        let abertura = p.pop()

        if (
            (elemento === ")" && abertura !== "(") ||
            (elemento === "]" && abertura !== "[") ||
            (elemento === "}" && abertura !== "{")
        ) {
            console.log("Expressão incorreta!")
            return
        }
    }
}

if (p.isEmpty()) {
    console.log("Expressão correta!")
} else {
    console.log("Expressão incorreta!")
}