class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insere um novo nó no final da lista
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Imprime os elementos no formato "1 -> 2 -> 3 -> null"
  print() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join(" -> ") + " -> null");
  }

  // TODO: Implementar o método abaixo
  removeDuplicates() {
    let current = this.head;

    while (current !== null) {
      let previous = current;
      let runner = current.next;

      while (runner !== null) {
        if (runner.value === current.value) {
          previous.next = runner.next;
        } else {
          previous = runner;
        }

        runner = runner.next;
      }

      current = current.next;
    }
  }
}

const lista = new LinkedList();

lista.append(10);
lista.append(20);
lista.append(30);
lista.append(20);
lista.append(40);
lista.append(10);
lista.append(30);

console.log('Lista original:');
lista.print();

lista.removeDuplicates();

console.log('Lista sem duplicados:');
lista.print();