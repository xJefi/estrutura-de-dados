class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SimpleList {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //Inserir no fim
    append(value) {
        const node = new Node(value)

        if (this.first === null) {
            this.first = node;
            this.last = node;
        } else {
            // O último nó aponta para o novo nó
            this.last.next = node;
            this.last = node;
        }

        this.size++;
    }

    //Inserir no início
    prepend(value) {
        const node = new Node(value)

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            // O novo nó aponta para o primeiro atual
            node.next = this.first;
            this.first = node;
        }

        this.size++;
    }

    //Remover no início
    removeFirst() {
        if (!this.first) return undefined;

        const removed = this.first.value;

        this.first = this.first.next;
        this.size--

        if (this.size === 0) {
            this.last = null;
        }

        return removed;
    }

    //Retornar o tamanho da Lista
    getSize() {
        return this.size;
    }
}

const list = new SimpleList();

list.append(10);
list.append(20);
list.append(30);

console.log(list.getSize()); // 3

list.prepend(5);

console.log(list.getSize()); // 4

console.log(list.removeFirst()); // 5
console.log(list.removeFirst()); // 10

console.log(list.getSize()); // 2