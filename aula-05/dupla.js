class DoubleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleList {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //Inserir no fim
    append(value) {
        const node = new DoubleNode(value)

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {

            this.last.next = node;
            node.prev = this.last;
            this.last = node;

        }

        this.size++;
    }

    //Inserir no início
    prepend(value) {
        const node = new DoubleNode(value)

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {

            node.next = this.first;
            this.first.prev = node;
            this.first = node;
        }

        this.size++;
    }

    //Remover no início
    removeFirst() {
        if (!this.first) return undefined;

        const removed = this.first.value;

        this.size--

        if (this.size === 0) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            this.first.prev = null;
        }

        return removed;
    }

    //Retornar o tamanho da Lista
    getSize() {
        return this.size;
    }
}
