4. Crear y eliminar nodos en el DOM
4.1 Creación de elementos
Para crear un nuevo elemento:

Usar document.createElement().
Configurar contenido o atributos.
Insertarlo en el DOM con appendChild(), prepend(), insertBefore(), etc.
<div id="contenedor"></div>
    <script>
    const contenedor = document.getElementById("contenedor");

    // 1. Crear un nuevo elemento <p>
    const nuevoParrafo = document.createElement("p");

    // 2. Añadir contenido de texto
    nuevoParrafo.textContent = "Soy un párrafo creado dinámicamente";

    // 3. Insertar dentro de #contenedor
    contenedor.appendChild(nuevoParrafo);
    </script>
---------------------------------------------------------------------------------------------
    4.2 Eliminar elementos
Para eliminar un nodo, se puede usar removeChild() o el método remove() directamente sobre el elemento:

<div id="contenedor">
    <p id="textoAEliminar">Este texto será eliminado</p>
    </div>
    <script>
    // Opción 1: removeChild()
    const contenedor = document.getElementById("contenedor");
    const parrafo = document.getElementById("textoAEliminar");
    contenedor.removeChild(parrafo);

    // Opción 2: remove() directamente
    // parrafo.remove();  // Comenta la opción 1 y descomenta esta para usar la opción 2.
    </script>
------------------------------------------------------------------------------------------------
4.3 Clonar y reubicar elementos
También puedes clonar un elemento con cloneNode() y reubicarlo en otro lugar del DOM:

<div id="original">
    <p id="parrafoOriginal">Texto original</p>
    </div>
    <div id="destino"></div>
    <script>
    const parrafoOriginal = document.getElementById("parrafoOriginal");
    // Clonar el párrafo (true para clonar también hijos)
    const clon = parrafoOriginal.cloneNode(true);

    // Insertar el clon en otro lugar
    document.getElementById("destino").appendChild(clon);
    </script>    