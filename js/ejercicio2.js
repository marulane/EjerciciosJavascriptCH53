let arregloDado = [-1, 3, -4, 2, -6];

function findMin(arr){
    let numMin = arr[0];
    //console.log(arr.length);
    for(let i=0; i<arr.length; i++){
        console.log(`Comparando ${arr[i]} con ${numMin}`);
        if(numMin>arr[i]){
            numMin= arr[i];
        }
    }
    return numMin;
}

let resultado= findMin(arregloDado);
alert(`El número menor x del arreglo [${arregloDado}]
                    es: ${resultado}`);