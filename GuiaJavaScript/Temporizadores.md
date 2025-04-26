Temporizadores y retardos (setTimeout, setInterval, requestAnimationFrame)
JavaScript en el navegador es single-threaded, pero ofrece APIs para programar acciones diferidas en el tiempo. Estas no bloquean la ejecución principal, sino que usan el loop de eventos para ejecutarse cuando corresponde.

setTimeout(función, ms)
Ejecuta la función (o código) especificada una única vez después de transcurridos ms milisegundos.


setTimeout(() => {
  console.log("Hola luego de 2 segundos");
}, 2000);
Este código mostrará el mensaje después de aproximadamente 2 segundos.
Devuelve un ID, que podemos usar con clearTimeout(id) para cancelar la ejecución si fuera necesario.

setInterval(función, ms)
Ejecuta la función repetidamente cada ms milisegundos, hasta que se detenga con clearInterval(id).

Ejemplo:


let contador = 0;
const id = setInterval(() => {
  contador++;
  console.log("Contador: " + contador);
  
  if (contador === 5) {
    clearInterval(id);
    console.log("Intervalo detenido");
  }
}, 1000);
Este código imprime "Contador: 1", "Contador: 2", etc., cada segundo, y se detiene automáticamente al llegar a 5.

Importante:
Los temporizadores son útiles para refrescar datos periódicamente, crear carousels, etc.
Recordá limpiar los intervalos con clearInterval para evitar ejecuciones innecesarias.

requestAnimationFrame(callback)
Esta API es especial para animaciones.
En lugar de usar un intervalo fijo, le indica al navegador que ejecute la función justo antes del próximo repintado de la pantalla.

Ocurre normalmente a 60 FPS (60 veces por segundo).

Da como resultado animaciones más suaves y eficientes.

Si la pestaña no está visible, el navegador pausa la animación para ahorrar recursos (algo que no ocurre con setInterval).

Ejemplo básico:

<div id="cuadro" style="width:50px; height:50px; background:red; position:relative;"></div>

<script>
  let posX = 0;
  
  function mover() {
    posX += 2;
    document.getElementById('cuadro').style.left = posX + "px";
    
    if (posX < 200) {
      requestAnimationFrame(mover); // solicitar el siguiente frame
    }
  }
  
  requestAnimationFrame(mover); // iniciar la animación
</script>
En este ejemplo:

El <div id="cuadro"> se mueve de izquierda a derecha.

Incrementa su posición en 2px en cada cuadro (frame) hasta alcanzar 200px.

Si quisieras cancelar una animación, podés usar cancelAnimationFrame(id).

En resumen:

API	Uso principal
setTimeout	Ejecutar algo una vez luego de un retardo.
setInterval	Ejecutar algo periódicamente.
requestAnimationFrame	Animaciones suaves y eficientes ligadas al repintado de pantalla.
