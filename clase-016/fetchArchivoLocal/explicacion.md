

# Cómo Cargar y Mostrar Productos desde un Archivo JSON

Este proyecto demuestra cómo cargar datos de un archivo JSON y mostrarlos en una página web utilizando JavaScript. El proceso implica cargar datos desde un archivo JSON, crear tarjetas de producto para cada elemento en el archivo y mostrar estas tarjetas en la página web.

## Función `cargarProductos`

La función principal de este proyecto es `cargarProductos`. A continuación, se describe en detalle cómo funciona esta función:

1. **Asincronía**: La función `cargarProductos` es asincrónica (async) porque realiza tareas que requieren tiempo, como cargar datos de un archivo JSON y esperar 3 segundos para simular la carga de datos.

2. **Mensaje de Carga**: Comienza seleccionando un elemento HTML con el id "product-container". Esto será donde se mostrarán los productos. Luego, cambia el contenido de este contenedor a "Loading...", lo que indica a los usuarios que los datos se están cargando.

3. **Espera de 3 Segundos**: Utiliza `await new Promise((resolve) => setTimeout(resolve, 3000));` para esperar 3 segundos. Durante este tiempo, muestra el mensaje "Loading..." en la página.

4. **Obtener Datos JSON**: Después, utiliza `fetch` para obtener datos de un archivo JSON (en este caso, "data.json"). Debes reemplazar esta URL con la ruta correcta de tu archivo JSON. Verifica si la respuesta de la solicitud fue exitosa (`response.ok`). Si no lo fue, lanza un error.

5. **Parseo JSON**: Luego, convierte la respuesta en un objeto JavaScript utilizando `response.json()`. Estos datos son ahora un array de productos.

6. **Limpiar Contenedor**: Limpia el contenido actual del contenedor de productos para eliminar el mensaje "Loading...".

7. **Generar Tarjetas de Producto**: Itera a través de los productos y, para cada producto, utiliza la función `generarTarjetaProducto` para generar una tarjeta HTML. Cada tarjeta se agrega como un nuevo elemento al contenedor de productos.

## Función `generarTarjetaProducto`

La función `generarTarjetaProducto` toma un objeto de producto como argumento y utiliza una plantilla literal (template literal) para crear una tarjeta de producto. La plantilla literal se llena con la información del producto (nombre, imagen y precio) y se devuelve como una cadena de texto.

## Evento de Carga de la Ventana

Se agrega un evento de carga (`load`) al objeto `window`. Esto significa que la función `cargarProductos` se ejecutará cuando la página web se cargue completamente.

---

Este proyecto proporciona una base sólida para cargar y mostrar datos desde archivos JSON en una página web. Puedes personalizarlo para cargar tus propios datos y adaptar el diseño de las tarjetas de productos según tus necesidades.

¡Diviértete experimentando y desarrollando tus proyectos!









Por supuesto, aquí tienes un archivo README que explica las palabras clave `async`, `await` y `try...catch` en JavaScript relacionadas con la asincronía:

---

# Asincronía en JavaScript: `async`, `await` y `try...catch`

JavaScript es un lenguaje de programación basado en eventos y asincrónico, lo que significa que puede manejar múltiples tareas simultáneamente sin bloquear el flujo principal del programa. Para trabajar con operaciones asincrónicas de manera más efectiva, se introdujeron las palabras clave `async`, `await`, y `try...catch`. Estas palabras clave son fundamentales para escribir código asincrónico legible y mantenible.

## `async` y `await`

### `async`

La palabra clave `async` se utiliza para declarar una función asincrónica. Cuando una función está precedida por `async`, se convierte en una función asincrónica. Esto permite que la función retorne una promesa.

```javascript
async function miFuncionAsincronica() {
  // Código asincrónico aquí
}
```

### `await`

La palabra clave `await` se utiliza dentro de una función asincrónica (`async`) para esperar a que una promesa se resuelva antes de continuar con la ejecución del código. Normalmente, se usa con funciones que devuelven promesas, como `fetch`, `axios`, o `setTimeout`.

```javascript
async function ejemplo() {
  const resultado = await funcionQueDevuelvePromesa();
  // El código siguiente se ejecutará solo cuando la promesa se resuelva
}
```

El uso de `await` hace que el flujo de ejecución espere de manera síncrona hasta que la promesa se resuelva o se rechace. Esto simplifica el manejo de operaciones asincrónicas, haciéndolas parecer síncronas.

## `try...catch`

La estructura `try...catch` se utiliza para manejar errores en JavaScript de manera controlada. Permite atrapar excepciones (errores) que pueden ocurrir durante la ejecución de un bloque de código y manejarlos sin que el programa se detenga.

```javascript
try {
  // Bloque de código donde pueden ocurrir errores
} catch (error) {
  // Manejo del error
}
```

### Ejemplo de `try...catch` con `async` y `await`

Cuando trabajas con funciones asincrónicas que utilizan `await`, es recomendable usar `try...catch` para manejar posibles errores de manera eficiente. Por ejemplo, al cargar datos de una API:

```javascript
async function cargarDatos() {
  try {
    const respuesta = await fetch("https://api-ejemplo.com/datos");
    if (!respuesta.ok) {
      throw new Error("No se pudo obtener la información");
    }
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
```

En este ejemplo, cualquier error que ocurra durante la solicitud de la API o el análisis de la respuesta será capturado por el `catch`. Esto evita que el programa se detenga y proporciona un manejo controlado de errores.

---

Estas palabras clave son esenciales para trabajar con código asincrónico en JavaScript. Ayudan a mantener el código más legible y facilitan el manejo de errores en situaciones asincrónicas.