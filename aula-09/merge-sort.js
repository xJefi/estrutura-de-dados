function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const meio = Math.floor(array.length / 2);

    const esquerda = mergeSort(array.slice(0, meio));
    const direita = mergeSort(array.slice(meio));

    return merge(esquerda, direita);
}

function merge(esquerda, direita) {
    const resultado = [];

    while (esquerda.length && direita.length) {
        if (esquerda[0] <= direita[0]) {
            resultado.push(esquerda.shift());
        } else {
            resultado.push(direita.shift());
        }
    }

    return [...resultado, ...esquerda, ...direita];
}

const numeros = [8, 3, 5, 4, 7, 6, 1, 2];

console.log(mergeSort(numeros));