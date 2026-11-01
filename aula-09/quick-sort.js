function partition(array, inicio, fim) {
    const pivo = array[fim];

    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (array[j] <= pivo) {
            i++;

            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[fim]] = [array[fim], array[i + 1]];

    return i + 1;
}

function quickSort(array, inicio = 0, fim = array.length - 1) {
    if (inicio < fim) {
        const pivo = partition(array, inicio, fim);

        quickSort(array, inicio, pivo - 1);
        quickSort(array, pivo + 1, fim);
    }

    return array;
}

const numeros = [8, 3, 5, 4, 7, 6, 1, 2];

console.log(quickSort(numeros));