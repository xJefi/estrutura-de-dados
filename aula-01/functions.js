//FILTER - definir quais elementos interessam / sempre retorna um vetor, mesmo vazio
// Função definida precisa retornar um valor true | false
const v = [3, 5, 2, 4, 8]

/*
const pares = v.filter((v, i, c) => {  // v-valor, i-index, c-cópia
    if (v % 2 === 0) {
        return true
    } else {
        return false
    }
})
*/
/* De forma mais resumida: */
const pares = v.filter(v => v % 2 === 0)
console.log(v, pares)


//FIND - Caso específico do filter. Detalhar e mostrar a informação de um elemento em específico / se não retornar nenhum elemento vai retornar undefined / retorna um elemento, NÃO um vetor
//Só retorna a primeira vez que encontrar (primeira ocorrência), todos os demais não vai retornar
const produtos = [
    { id: 1, nome: 'Produto 1', preco: 3.99 },
    { id: 2, nome: 'Produto 2', preco: 5.99 },
    { id: 3, nome: 'Produto 3', preco: 6.99 }
]
const produto = produtos.find(p => p.id === 3)
console.log(produto)

/* Também tem find last*/


//FIND INDEX - retorna a posição
const indice = produtos.findIndex(p => p.id === 2)
console.log(indice)
/* Também tem find last index - faz a mesma coisa, porém pelo caminho contrário, procura do final para o início*/


//MAP
const formatado = produtos.map(p => {
    const f = { ...p } //desestroturando objeto
    f.titulo = `${p.nome} - ${p.preco}`
    return f
})
console.log(produtos, formatado)


//SOME - OU Lógico (||)
//Só retorna falso se todos os elementos retornam falso, se um retorna true ele já para de testar e retorna true.
const abaixo3Reais = produtos.some(p => p.preco < 3)
console.log(abaixo3Reais)
//Essa função é interessante para verificar se existem mensagens não lidas por exemplo.


//EVERY - E Lógico (&&)
//Na primeira ocorrência false já retorna como false
const todosAcima5 = produtos.every(p => p.preco > 5)
console.log(todosAcima5)


//FOREACH - For no próprio vetor
produtos.forEach(p => console.log(p.nome))


//REDUCE - Função coringa, da pra fazer todas as funções com ela
//Soma de todos os produtos:
const total = produtos.reduce((acumulado, p) => acumulado + p.preco, 0)
console.log(total)