// Monte um programa simples que simula um menu de pilha no console. 
const { Pilha } = require("./pilha")
const prompt = require("prompt-sync")()

const p = new Pilha()
let opcao

do {
    console.log("1 - PUSH")
    console.log("2 - POP")
    console.log("3 - TOP")
    console.log("4 - SIZE")
    console.log("5 - CLEAR")
    console.log("0 - SAIR")

    opcao = +prompt("Escolha 1 opção: ")

    switch (opcao) {
        case 1: {
            const n = +prompt("Digite um número: ")
            p.push(n)
            break
        }
        case 2: {
            console.log("\nNúmero retirado da pilha:")
            console.log(p.pop());
            break
        }
        case 3: {
            console.log("\nNúmero no topo da pilha:")
            console.log(p.top());
            break
        }
        case 4: {
            console.log("\nNúmero de elementos na pilha:")
            console.log(p.size());
            break
        }
        case 5: {
            p.clear();
            console.log("\nA pilha foi limpa.")
            break
        }
        case 0:
            console.log("\nPrograma encerrado.")
            break

        default:
            console.log("\nOpção inválida!")
    }
} while (opcao !== 0)
