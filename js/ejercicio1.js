function numMayor(){
    let longitudArray = Number(prompt(`Escribe el número de elementos a guardar.`));
    let array = [];

    //Ciclo para guardar valores en array
    for(let i=0; i<longitudArray; i++){
        let Numingresado = Number(prompt(`Ingresa el valor ${i+1}:`));
        array[i]=Numingresado;
    }

    // Inicializamos numMax con el primer valor del array
    let numMax = array[0];

    //Ciclo para elegir el número mayor del arreglo
    //{2, 3, 4}
    for(let j=0; j<array.length; j++){
        if(array[j] > numMax){
            numMax = array[j];
        }
    }
    //Devolviendo el valor mayor
    return numMax;
}

let resultado = numMayor();
alert(`El elemento mayor es: ${resultado}`);