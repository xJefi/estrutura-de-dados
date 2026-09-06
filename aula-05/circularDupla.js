class DoubleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleCircularList {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    append(value) {
        const node = new DoubleNode(value)

        if (!this.first) {
            this.first = node;
            this.last = node;
            node.next = node;
            node.prev = node
        } else {
            this.last.next = node;
            this.first.prev = node;
            node.next = this.first;
            node.prev = this.last;

            this.last = node;
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
            this.first.prev = this.last;
            this.last.next = this.first;
        }

        return n;
    }
}
