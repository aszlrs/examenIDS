//Se realiza una compresión simple de una cadena de texto haciendo un conteo de caracteres consecutivos
function compressText(text) {
    //declaramos variables
    let compressed = "";
    let count = 1;

    // recorremos el string
    for (let i=0; i<text.length; i++) {
        // evaluamos similitud con el siguiente
        if (text[i] === text[i+1]) {count++;}
        else {
            //añadimos caracter + numero de veces    
            compressed += text[i] + count;
            //cerramos conteo
            count = 1;
        }
    }
    return compressed;
}

// CÓDIGO DE PRUEBA
let textToCompress = "aabcccccaaa";
console.log(compressText(textToCompress));
