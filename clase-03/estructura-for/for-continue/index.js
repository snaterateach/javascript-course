//= Ejemplo Continue
/**
    - Pedir al usuario un número entre 0 y 5.
    - Si el número es igual a 3 mostrar un mensaje que diga: "Usted Ganó".
    - En caso contrario pedir el siguiente número
 */


    // Entrada
    let numero;

    // Lógica
    for (let l = 0; l < 5; l++) {
      numero = +(prompt('Numero en tre 0 y 5'));
      if(numero === 3){
         alert("Usted Ganó");
         continue;
      }
    }

    // Salida
