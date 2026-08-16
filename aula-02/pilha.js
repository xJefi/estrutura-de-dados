class Pilha {
    itens = []
    tamanho = 0

    push(elemento) {
        this.itens[this.tamanho++] = elemento
    }

    pop() {
        return this.itens[--this.tamanho]
    }

    top() {
        return this.itens[this.tamanho - 1]
    }

    isEmpty() {
        /*
        if (this.itens.length === 0) {
            console.log("A pilha está vazia.")
            return true
        }
        console.log("A pilha não está vazia.")
        return false
        */

        return this.tamanho === 0
    }

    size() {
        return this.tamanho
    }

    clear() {
        this.itens = []
        this.tamanho = 0
    }

    search(elemento) {
        for (let n of this.itens){
            if (n === elemento) return true
        }
        return false

        /*
        for(let i = this.itens.length - 1; i < this.itens.length; i--) {
            if (elemento === this.itens[i]) {
                console.log (`O elemento é ${elemento}, na pilha foi encontrado ${this.itens[i]}.`)
                return true
            }
        }
            */
    }
}

/*
const p = new Pilha()

p.push(3)
p.push(2)
p.push(1)
p.pop()
console.log(`Primeiro elemento da pilha: ${p.top()}.`)
p.isEmpty()
console.log(`Tamanho da pilha: ${p.size()}.`)
//p.clear()
console.log(p)
p.search(2)
*/

module.exports = { Pilha }