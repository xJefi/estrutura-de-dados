let array = [4, 2, 1, 5];

    for (let i = 0; i < array.length; i++) {
        //let realizouTrocas = false;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let valor = array[j];
                array[j] = array[j + 1];
                array[j + 1] = valor;
            }
        }
    }

console.log(array);