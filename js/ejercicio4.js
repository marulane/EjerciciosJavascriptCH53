let cadenaInicial = prompt(`Escriba un arreglo de números, separando los elementos por una coma ","`);
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

function randomize(arr){
    //Usando operador spread para hacer una copia del arreglo inicial
    //Usando método sort() para ordenar el arreglo
    //Usando método Math.random() para elegir un número del 0 al 1
    //Restando 0.5 al valor para decidir si el número se coloca al inicio o al final
    let mezclado = [...arrayResultante].sort(() => Math.random() - 0.5);
    return mezclado;
}


alert(`Arreglo original: ${arrayResultante}
Arreglo desordenado: ${randomize(arrayResultante)}`);