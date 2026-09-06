class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SimpleCircularList {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //Em uma lista circular não existe um fim estrutural, portanto recebe apenas um método:
    append(value) {
        const node = new Node(value)

        if (this.first === null) {
            this.first = node;
            this.last = node;

            // O último aponta para o primeiro
            node.next = this.first;
        } else {
            this.last.next = node;
            this.last = node;
            node.next = this.first;
        }

        this.size++;
    }

    removeFirst() {
        if (!this.first) return undefined;

        const n = this.first.value;
        this.size--

        if (this.size === 0) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            this.last.next = this.first;
        }

        return n;
    }
}
