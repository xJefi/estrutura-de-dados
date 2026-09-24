const jogadores = ["Ana", "Bruno", "Carla", "Diego"];

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
    this.direction = true;
    this.actual = null;
  }

  append(value) {
    const n = new DoubleNode(value);

    if (!this.first) {
      this.first = n;
      this.last = n;
      n.next = n;
      n.prev = n;

      this.actual = n;
    } else {
      this.last.next = n;
      this.first.prev = n;
      n.next = this.first;
      n.prev = this.last;
      this.last = n;
    }

    this.size++;
  }

  //Função pra direção (boolean)
  changeDirection() {
    this.direction = !this.direction;
  }

  //Função para ir para o próximo jogador
  nextPlayer() {
    this.actual = this.direction ? this.actual.next : this.actual.prev;
  }
}

const list = new DoubleCircularList();

const nextButton = document.querySelector("#nextButton");
const invertButton = document.querySelector("#invertButton");

const jogadoresTela = document.querySelector("#jogadores");

const jogadorAtualTela = document.querySelector("#jogadorAtual");
const sentidoJogoTela = document.querySelector("#sentidoJogo");

function mostrarJogadores() {
  jogadoresTela.innerHTML = "";

  if (!list.first) return;

  let atual = list.first;

  for (let i = 0; i < list.size; i++) {
    const jogador = document.createElement("p");

    jogador.textContent = atual.value;
    jogador.classList.add("jogador");

    // Destaca o jogador atual
    if (atual === list.actual) {
      jogador.classList.add("atual");
    }

    jogadoresTela.appendChild(jogador);

    atual = atual.next;
  }
}

function atualizarInformacoes() {
  if (list.actual) {
    jogadorAtualTela.textContent = `Jogador atual: ${list.actual.value}`;
  } else {
    jogadorAtualTela.textContent = "Jogador atual: nenhum";
  }

  sentidoJogoTela.textContent = list.direction
    ? "Sentido: Horário"
    : "Sentido: Anti-horário";
}

jogadores.forEach((jogador) => {
  list.append(jogador);
});

mostrarJogadores();
atualizarInformacoes();

nextButton.addEventListener("click", () => {
  list.nextPlayer();
  mostrarJogadores();
  atualizarInformacoes();
});

invertButton.addEventListener("click", () => {
  list.changeDirection();

  mostrarJogadores();
  atualizarInformacoes();
});
