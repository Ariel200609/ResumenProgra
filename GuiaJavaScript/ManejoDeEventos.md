addEventListener: La forma estándar de suscribirse a un evento de un elemento es usando element.addEventListener(tipoEvento, funciónManejadora).

Por ejemplo:

const boton = document.querySelector('#miBoton');
boton.addEventListener('click', function(event) {
  console.log("Botón clickeado");
});

Aquí nos suscribimos al evento "click" del botón. Cuando el usuario haga clic, la función proporcionada se ejecutará. El objeto event (a veces llamado e) pasado como parámetro contiene información del evento, como event.target (el elemento concreto que disparó el evento) o event.preventDefault() para cancelar la acción por defecto (útil en eventos de formulario, donde por ejemplo evitamos que la página se recargue al enviar un <form>). También podemos usar funciones flecha (event) => { ... } en lugar de function.
