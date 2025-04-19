let cadenaInicial = prompt(`Escribe el arreglo de números a evaluar separando los elementos por una coma ","`);
//Uso de expresión regular para eliminar los espacios dentro de la cadena 
// "/ /" indica el inicio de la regex,  
// "\s" es cualquier espacio vacío 
// "+" es uno o más de elemento anterior 
// "g" es global, osea todas las coincidencias de la cadena, no solo la primera
// "''" indica que se reemplaza por nada, o sea que se elimina
cadenaInicial= cadenaInicial.replace(/\s+/g, '');;
//console.log(cadenaInicial);

//Separamos la cadena tomando la coma como separador, y después usando map convertimos cada elemento del arreglo a Number
let arrayResultante = cadenaInicial.split(",").map(Number);
//console.log(arrayResultante);


function findDuplicates(arr){
    //Inicializando bandera en falso
    let isDuplicate = false;

    //Comparando el elemento contra todos los elementos del arreglo
    for(let j=0; j<arr.length; j++){
        //Se recorre todo el arreglo arr[i] en busca de una coincidencia con el elemento arr[j] del ciclo superior
        for(let i=0; i<arr.length; i++){
            //No podemos comparar dos elementos en la misma posición así que:
                if(i !== j && arr[j]===arr[i]){
                    isDuplicate= true;
                    let duplicatedElement= arr[i];
                    return duplicatedElement;
                    // //Si se encuentra un valor duplicado salimos del ciclo
                    // break;
                }
        }
        // //Si ya se encontró un duplicado se interrumpe la búsqueda para otro par
        // //De lo contrario se salta a la comparación del siguiente elemento del arreglo
        // if(isDuplicate){
        //     break;
        // }
    }

    return undefined;
}

let resultado = findDuplicates(arrayResultante);

if(resultado===undefined){
    alert(`No se encontraron valores repetidos`);
}else{
    alert(`El valor ${resultado} se encuentra más de una vez`);
}

