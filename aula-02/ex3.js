// Use uma pilha para verificar se uma palavra é um palíndromo (ex: "arara", "radar", "ana").
const { Pilha } = require("./pilha")
const p = new Pilha()

let palavra = 'arara'

for (let letra of palavra) {
    p.push(letra)
}

let invertida = ""

while (!p.isEmpty()) {
    invertida += p.pop()
}

if (palavra === invertida) {
    console.log(`A palavra ${palavra} é um palíndromo.`)
} else {
    console.log(`A palavra ${palavra} NÃO é um palíndromo.`)
}