class Pilha {
  itens = [];
  tamanho = 0;

  push(elemento) {
    this.itens[this.tamanho++] = elemento;
  }

  pop() {
    return this.itens[--this.tamanho];
  }

  top() {
    return this.itens[this.tamanho - 1];
  }

  isEmpty() {
    return this.tamanho === 0;
  }

  size() {
    return this.tamanho;
  }

  clear() {
    this.itens = [];
    this.tamanho = 0;
  }

  search(elemento) {
    for (let n of this.itens) {
      if (n === elemento) return true;
    }
    return false;
  }
}

const pilha = new Pilha();

const inputSite = document.querySelector("#site");
const btnAdd = document.querySelector("#add");
const btnVoltar = document.querySelector("#voltar");
const ul = document.querySelector("#pilha");

btnAdd.addEventListener("click", () => {
  const site = inputSite.value.trim();

  if (site === "") {
    return;
  }

  pilha.push(site);

  const li = document.createElement("li");
  li.innerText = site;

  ul.appendChild(li);

  inputSite.value = "";
  inputSite.focus();
});

btnVoltar.addEventListener("click", () => {
  if (pilha.isEmpty()) {
    return;
  }

  pilha.pop();
  ul.removeChild(ul.lastChild);
});
