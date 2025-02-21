//Metodo "reduce" version propia
Array.prototype.myOwnReduce = function(callback) {
    // declaramos variables 
    // tomando el primer valor del array
    let acumulator = this[0];
    //el primer valor se usa como acumulador
    let startIndex =  1;

    //recorremos el arreglo
    for (let i=startIndex; i<this.length; i++) {
      //se ejecuta callback en cada iteración
      acumulator = callback(acumulator, this[i]);
    }
  
    //devolvemos valor acumulado
    return acumulator;
  };


  
  // CÓDIGO DE PRUEBA

  //arreglo a trabajar
  const myArray = [1,2,3,4,5];
  const callback = (current, acumulator) => {
    //los valores se acumularán sumando
    acumulator += current; return acumulator;
  };
  
  //devuelve 15
  console.log(myArray.myOwnReduce(callback)); 
  