// Utilize a pilha para inverter uma palavra digitada pelo usuário, sem usar .reverse(). 
const { Pilha } = require("./pilha")
const prompt = require("prompt-sync")()

const p = new Pilha()

let palavra = prompt("Digite uma palavra: ")

for (let letra of palavra) {
    p.push(letra)
}

let invertida = ""

while (!p.isEmpty()) {
    invertida += p.pop()
}

console.log("Palavra invertida:", invertida)