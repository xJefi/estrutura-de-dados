let array = [4, 9, 1, 5];

for (let i = 0; i < array.length; i++) {
    let menor = i

    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[menor]) {
            menor = j;
        }
    }
    if (menor !== i) {
        let valor = array[i];
        array[i] = array[menor];
        array[menor] = valor;
    }
}

console.log(array);