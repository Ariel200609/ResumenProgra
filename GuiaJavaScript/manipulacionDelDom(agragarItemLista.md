Resumen Para La prueba Ariel:

---------------------------------------------------------------------------------------------------------
document.getElementById(id): Obtiene un elemento por su atributo id (retorna un elemento único).

document.getElementsByClassName(clase): Retorna una HTMLCollection (similar a un arreglo) de todos los elementos que tengan esa clase.

document.getElementsByTagName(etiqueta): Retorna todos los elementos de un tipo de etiqueta dado.

Selectores modernos: document.querySelector(selector) devuelve el primer elemento que coincide con un selector de CSS dado, mientras document.querySelectorAll(selector) devuelve todos los elementos que coinciden (retorna una lista/NodeList estática).

 Estos métodos aceptan selectores avanzados de CSS, por ejemplo: .clase1.clase2 (elementos con dos clases), div#contenedor > ul.lista li.item:nth-child(2) (selector combinado por estructura), o input[name="email"] (selector por atributo). Esto nos da mucha flexibilidad para seleccionar elementos específicos sin recorrer manualmente el árbol DOM
----------------------------------------------------------------------------------------------------------
Crear elementos: Usamos document.createElement('tag') para crear un nuevo nodo de tipo elemento HTML completamente en memoria. 

Por ejemplo: const nuevoParrafo = document.createElement('p'). Si queremos agregar texto dentro, podemos crear un nodo de texto con document.createTextNode('Texto') y adjuntarlo, o más simplemente, asignar a nuevoParrafo.textContent = "Texto"; (o innerHTML si deseamos incluir HTML). En ambos casos, el nuevo elemento existe solo en memoria hasta que lo insertemos en el DOM visible.

Agregar al DOM: Para insertar un nodo creado, primero seleccionamos un elemento padre existente y luego usamos métodos como appendChild(nodo) (lo añade como último hijo) o prepend (para agregar como primer hijo, en navegadores modernos). Ejemplo: document.body.appendChild(nuevoParrafo). 
También existe parentElement.insertBefore(nuevoNodo, nodoReferencia) si queremos insertarlo antes de un elemento específico. Otra alternativa es element.insertAdjacentHTML(posición, htmlString) para insertar directamente HTML en una posición relativa a element (beforebegin, afterbegin, beforeend, afterend).

Modificar contenido o atributos: Con la referencia de un elemento, podemos cambiar su texto mediante la propiedad .textContent (preferido para insertar solo texto) o .innerHTML (para insertar HTML, teniendo cuidado con posibles inyecciones). 
Asimismo, podemos modificar atributos con element.setAttribute(nombre, valor) o propiedades directas (por ejemplo, element.href = "nuevo_enlace" para un <a>).

----- Para cambiar estilos, podemos alterar la propiedad element.style (por ejemplo, element.style.backgroundColor = "red"), aunque es mejor agregar/quitar clases CSS.-----


Clases CSS dinámicas: La propiedad element.classList facilita manipular las clases de un elemento. Por ejemplo, element.classList.add('resaltado') añade una clase, element.classList.remove('resaltado') la quita, y element.classList.toggle('activo') la alterna (la agrega si no está o la remueve si ya está). Esto permite activar/desactivar estilos CSS dinámicamente.



Eliminar elementos: Para remover un nodo del DOM, puedes llamar element.remove() directamente sobre el elemento a eliminar (método moderno), o también usar parent.removeChild(element) desde su padre (método tradicional). Si estás eliminando muchos nodos, una técnica avanzada es usar un DocumentFragment: insertas temporalmente nodos en un fragmento (fuera del DOM principal) y luego insertas el fragmento completo; esto mejora el rendimiento al reducir repaints/reflows múltiples.

-------------------------------------------------------------------------------------------------------------------------

Ejemplo práctico: Supongamos que tenemos un campo de texto donde el usuario escribe un ítem y un botón para agregar ese ítem a una lista en la página. Podemos crear dinámicamente un nuevo elemento <li> y agregarlo a una lista <ul> existente cada vez que se hace clic en "Agregar":

<input type="text" id="itemInput" placeholder="Nuevo ítem">
<button id="addItemBtn">Agregar</button>
<ul id="lista"></ul>

<script> const input = document.getElementById('itemInput'); 
const lista = document.getElementById('lista'); 

document.getElementById('addItemBtn').addEventListener('click', () => 
const texto = input.value.trim();
     if (texto !== "")){ 
            const li = document.createElement('li');// Crear nuevo elemento
            li.textContent = texto;
            lista.appendChild(li); // Establecer su texto interno lista.appendChild(li);
             input.value = "";  // Insertarlo como hijo al final de la lista
            }
</script>       

En el código anterior, cada vez que se pulsa el botón, se obtiene el texto del <input>, se crea un <li> con ese texto y se inserta en la lista <ul id="lista">. También se limpia el input para que el usuario pueda escribir otro ítem. Este ejemplo demuestra manipulación del DOM (creación y adición de nodos) y también anticipa el siguiente tema de manejo de eventos (ya que usamos addEventListener en el botón).