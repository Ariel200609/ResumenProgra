Navegación y selección avanzada en el DOM
En esta sección profundizamos en cómo navegar por el árbol DOM una vez seleccionados elementos, así como en el uso de selectores más complejos para encontrarlos directamente.

Selectores avanzados con querySelector / querySelectorAll
Ya mencionamos que estos métodos aceptan cualquier selector válido de CSS3. Por ejemplo, podemos seleccionar elementos anidados o con atributos específicos:

document.querySelectorAll('div.contenedor ul.lista > li.item'):
Selecciona todos los <li class="item"> que son hijos directos de un <ul class="lista"> dentro de un <div class="contenedor">.

document.querySelectorAll('input[type="checkbox"]:checked'):
Selecciona todos los checkboxes marcados en la página.

document.querySelector('#menu li:nth-child(3)'):
Selecciona el tercer <li> dentro del elemento con id="menu".

La capacidad de usar selectores CSS significa que evitamos, en muchos casos, tener que obtener un padre y luego filtrarlo manualmente; podemos dirigirnos directamente al elemento deseado en una sola llamada.

Recordatorio:

querySelector retorna solo el primer elemento que coincide.

querySelectorAll retorna todos los elementos que coinciden (podemos iterar la NodeList usando .forEach, ya que en navegadores modernos NodeList implementa iterable).

Ejemplo de traversal: Dado el siguiente HTML:

<ul id="menu">
  <li>Inicio</li>
  <li class="activo">Productos</li>
  <li>Contacto</li>
</ul>
Podemos navegar por la lista desde JavaScript:

const menu = document.getElementById('menu');
console.log(menu.firstElementChild.textContent);            // "Inicio"
const segundo = menu.firstElementChild.nextElementSibling;
console.log(segundo.textContent);                           // "Productos"
console.log(segundo.className);                             // "activo"
console.log(menu.lastElementChild.previousElementSibling===segundo); // true
En este ejemplo, seleccionamos el <ul> y luego accedemos a su primer hijo, luego al siguiente hermano, obteniendo información de los elementos. También comprobamos que el penúltimo elemento es el mismo que habíamos obtenido como segundo.

Ten en cuenta que las colecciones vivas (como las devueltas por getElementsByTagName o la propiedad .children) se actualizan automáticamente si el DOM cambia, mientras que las NodeList estáticas de querySelectorAll no cambian a menos que vuelvas a llamar el método. Según la necesidad, elige la opción adecuada.