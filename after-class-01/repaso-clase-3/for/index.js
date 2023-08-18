

/**
 * Estructura - Ciclos
 
 *  for

     for(desde;condicion;actualizacion){
	    instrucción
    }

 *  while
    
    while (condicion) {
        instrucción
    }

 *  do .. while

    do {
        instrucción
    } while (condicion);

 */

/* 
    EJERCICIO - 1 - Análisis
    ==========================

    Tomando en cuenta el ciclo FOR, hacer uso del DO - WHILE para que
    el resultado sea el mismo.

*/   
  /*  for(let i=0;i<=4;i++){
	    console.log("El número es: " + i + "<br>");
    }

    let i=0;
    do {
        console.log("El número es: " + i + "<br>");
        i++ 
    } while (i<=4);

    */













/* 
    EJERCICIO - 2 - El Cajero - Parte I
    ======================
    Supongamos vamos a un cajero automático a depositar o retirar dinero de 
    nuestra cuenta. Inicialmente nuestra cuenta está en cero.
   - EL cajero nos solicita el nro de transacciones que vamos a realizar. 
   - Por cada una de las transacciones nos preguntará si vamos a Abonar o Retirar
     dinero de nuestra cuenta.
   - Para cualquiera de las opciones anteriores el cajero nos preguntará por el 
     monto a Abonar o Retirar.
   - Considere que si Abonamos a la cuenta estamos sumando dinero y si Retiramos
     estamos restando dinero.
 */

    // Entrada
    /*let nroDeTransacciones = +(prompt("¿Nro de transacciones: ?"));
    let plataEnBanco = 0;
    let tipoDetransaccion; // Abonar o Retirar
    let monto;

   // logica
   // Validar que al retirar plataEnBanco no quede en negativo
   // Validar que al retirar plataEnBanco no esté en cero.
   // Tranformar el if en un switch

   for (let index = 0; index < nroDeTransacciones; index++) {
        tipoDetransaccion = prompt("Abono o Retiro: ");
        monto = +(prompt("Monto: "));

        if(tipoDetransaccion === "Abono"){
            plataEnBanco = plataEnBanco + monto;
        }

        if(tipoDetransaccion === "Retiro"){
            plataEnBanco = plataEnBanco - monto;
        }
   }

   // Salida
   console.log("Tu saldo final es de: "+ plataEnBanco);
   */























/* 
    EJERCICIO - 3 - El Cajero - Parte II
    ====================================
     Tomando en cuenta el ejemplo del cajero automático.
     Verificar que la transacción insertada por el usuario sea válida.
     En caso de que no sea válida mostrar un mensaje y salir del ciclo
*/

    // Entrada
    let nroDeTransacciones = +(prompt("¿Nro de transacciones: ?"));
    let plataEnBanco = 0;
    let tipoDetransaccion; // Abonar o Retirar
    let monto;

   // logica    
   for (let index = 0; index < nroDeTransacciones; index++) {
        tipoDetransaccion = prompt("Abono o Retiro: ");
        if(tipoDetransaccion !== "Abono" && tipoDetransaccion!=="Retiro"){
            console.log("Transaccion no es valida");
            break;
        }
        monto = +(prompt("Monto: "));

        if(tipoDetransaccion === "Abono"){
            plataEnBanco = plataEnBanco + monto;
        }

        if(tipoDetransaccion === "Retiro"){
            plataEnBanco = plataEnBanco - monto;
        }
   }

   // Salida
   console.log("Tu saldo final es de: "+ plataEnBanco);




