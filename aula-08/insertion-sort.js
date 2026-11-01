let array = [4, 2, 3, 1];

for (let i = 1; i < array.length; i++) {
    let valor = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > valor) {
        array[j + 1] = array[j];
        j--;
    }

    array[j + 1] = valor;
}

console.log(array);