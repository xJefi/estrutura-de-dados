// Crie um programa que verifique se as tags HTML estão corretamente abertas e fechadas. 
const { Pilha } = require("./pilha")

const p = new Pilha()

let html = "<div><p>Olá</p></div>"

const tags = html.match(/<\/?[a-zA-Z]+>/g)

for (let tag of tags) {

    // Tag de fechamento
    if (tag.startsWith("</")) {

        if (p.isEmpty()) {
            console.log("HTML incorreto!")
            return
        }

        let tagAbertura = p.pop()
        let tagFechamento = tag.slice(2, -1)

        if (tagAbertura !== tagFechamento) {
            console.log("HTML incorreto!")
            return
        }

    } else {

        // Tag de abertura
        let tagAbertura = tag.slice(1, -1)

        p.push(tagAbertura)
    }
}

if (p.isEmpty()) {
    console.log("HTML correto!")
} else {
    console.log("HTML incorreto!")
}