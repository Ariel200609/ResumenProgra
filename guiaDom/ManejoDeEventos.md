5. Manejo de eventos
El DOM no solo te permite manipular la estructura de tu página, sino también asociar eventos a los elementos para interactividad.

5.1 Eventos comunes
click: clic del usuario en un elemento.
submit: envío de un formulario.
mouseover: ratón sobre un elemento.
keydown: pulsación de una tecla.
load: cuando la página o un recurso específico ha cargado.
5.2 Asignar eventos con addEventListener()
La forma moderna y recomendada de registrar eventos es usando addEventListener():

<button id="miBoton">Haz clic</button>
    <script>
    const boton = document.getElementById("miBoton");
    boton.addEventListener("click", function() {
        alert("¡Botón clicado!");
    });
    </script>
    
También puedes usar funciones flecha:

boton.addEventListener("click", () => {
    alert("¡Botón clicado con función flecha!");
    });
    
Nota: Evita usar atributos HTML como onclick, onsubmit, etc., porque separa menos la lógica de la presentación. addEventListener() es más flexible y limpio.
-------------------------------------------------------------------------------------------------
