function heapify(array, tamanho, raiz) {
    let maior = raiz;

    const esquerda = 2 * raiz + 1;
    const direita = 2 * raiz + 2;

    if (esquerda < tamanho && array[esquerda] > array[maior]) {
        maior = esquerda;
    }

    if (direita < tamanho && array[direita] > array[maior]) {
        maior = direita;
    }

    if (maior !== raiz) {
        [array[raiz], array[maior]] = [array[maior], array[raiz]];

        heapify(array, tamanho, maior);
    }
}

function heapSort(array) {
    const tamanho = array.length;

    for (let i = Math.floor(tamanho / 2) - 1; i >= 0; i--) {
        heapify(array, tamanho, i);
    }

    for (let i = tamanho - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];

        heapify(array, i, 0);
    }

    return array;
}

const numeros = [4, 10, 3, 5, 1];

console.log(heapSort(numeros));