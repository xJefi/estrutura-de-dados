# Exercício:

## Desenvolver uma página web utilizando HTML, CSS e JavaScript para simular um jogo de turnos entre jogadores. A ordem dos jogadores deverá ser controlada por uma lista circular encadeada.

### Você deverá desenvolver uma aplicação que simule um jogo entre quatro jogadores. Os jogadores já estarão disponíveis em um vetor no código JavaScript:

### const jogadores = ["Ana", "Bruno", "Carla", "Diego"];

### A partir desse vetor, você deverá criar uma lista circular encadeada, na qual cada nó representa um jogador e possui uma referência para o próximo nó.

### A aplicação deverá apresentar os jogadores na tela e permitir que o usuário controle a passagem dos turnos por meio de botões.

## Implemente, em JavaScript:

###     Uma estrutura de nó para representar cada jogador.

###     Uma lista circular encadeada.

###     A inserção dos jogadores do vetor na lista.

###     A ligação entre os nós, de modo que o último jogador aponte novamente para o primeiro.

### Não é necessário criar uma tela de cadastro ou permitir a inclusão de novos jogadores.

## A aplicação deverá possuir um botão "Próximo jogador". Ao clicar nesse botão:

###     A vez deverá passar para o próximo jogador da lista.

###     Quando o último jogador for alcançado, a vez deverá retornar ao primeiro.

###     O jogador ativo deverá ser destacado visualmente.

###     O nome do jogador ativo deverá ser apresentado na tela.

## A aplicação deverá possuir um botão "Inverter sentido". Ao clicar nesse botão:

###     O sentido do jogo deverá ser alterado.

###     O jogador ativo deverá permanecer o mesmo.

###     O próximo jogador deverá ser escolhido conforme o novo sentido.

###     A interface deverá indicar se o jogo está no sentido horário ou anti-horário.

### Para simplificar a atividade, a lista poderá possuir referências para o próximo e para o jogador anterior, permitindo a navegação nos dois sentidos.

## Utilize HTML e CSS para criar uma interface simples contendo:

###     Os quatro jogadores representados visualmente em círculo.

###     Um destaque para o jogador ativo, utilizando uma cor diferente.

###     Um botão para avançar o turno.

###     Um botão para inverter o sentido.

###     A indicação do jogador atual e do sentido do jogo.

## Requisitos:

###     Os jogadores devem ser controlados pela lista circular encadeada.

###     Não é permitido utilizar apenas os índices do vetor para controlar os turnos.

###     O vetor inicial deve ser utilizado somente para criar a lista.

###     A cada mudança de turno, a interface deverá ser atualizada.

###     O jogo deverá funcionar continuamente, mesmo após vários avanços ou inversões de sentido.
