class No {
    constructor(v) {
        this.valor = v
        this.proximo = null
    }
}

class Fila {
    constructor() {
        this.primeiro = null
        this.ultimo = null
        this.tamanho = 0
    }

    estaVazio() {
        return this.tamanho === 0 //Já retorna if implícito
        /*
        if (this.tamanho === 0) return true
        return false
        */
    }

    quantidade() {
        return this.tamanho
    }

    enqueue(v) {
        const no = new No(v)

        if (this.estaVazio()) {
            this.primeiro = no
            this.ultimo = no
        } else {
            this.ultimo.proximo = no
            this.ultimo = no
        }
        this.tamanho++
    }

    peek() {
        if (this.estaVazio()) return null
        return this.primeiro.valor

        //Também da pra usar operador ternário:
        //return this.estaVazio() ? null : this.primeiro.valor
    }

    dequeue() {
        if (this.estaVazio()) return null

        const valorPrimeiro = this.primeiro.valor

        this.primeiro = this.primeiro.proximo
        this.tamanho--

        if (this.estaVazio()) {
            this.ultimo = null
        }
        
        return valorPrimeiro
    }

    buscar(v) {
        const no = fila.primeiro

        while(no !== null) {
            if (no.valor === v) return true
            no = no.proximo
        }
        return false
    }

}
/*
const fila = new Fila()

fila.enqueue(5)
fila.enqueue(6)
console.log(fila.quantidade())
console.log(fila.peek())
console.log(fila.dequeue())
console.log(fila.quantidade())
console.log(fila.dequeue())
console.log(fila.quantidade())
*/

const fila = new Fila()

const btnAdd = document.querySelector("#add")
const btnRemove = document.querySelector("#remove")
const ul = document.querySelector("#fila")
let n = 1
btnAdd.addEventListener('click', ()=>{
    fila.enqueue(n)
    const li = document.createElement('li')
    li.innerText = n++
    ul.appendChild(li)
})

btnRemove.addEventListener('click', ()=>{
    fila.dequeue()
    ul.removeChild(ul.firstChild)
})
