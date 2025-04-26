3. Modificar elementos del DOM
3.1 Cambiar texto (textContent e innerText)
Para modificar el texto de un elemento, puedes usar las propiedades textContent o innerText.

textContent obtiene o establece el contenido de texto tal cual (incluyendo espacios en blanco o saltos de línea).
innerText suele respetar el estilo CSS (ocultando texto, saltos de línea, etc.), por lo que a veces puede diferir.
<h1 id="titulo">Título original</h1>
    <script>
    const miTitulo = document.getElementById("titulo");
    miTitulo.textContent = "Título modificado";
    </script>
 -------------------------------------------------------------------------------------------------------------   
3.2 Cambiar HTML interno (innerHTML)
Para insertar o modificar contenido HTML (incluyendo otras etiquetas), se puede usar innerHTML:

<div id="contenedor">
    <p>Texto inicial</p>
    </div>
    <script>
    const divContenedor = document.getElementById("contenedor");
    divContenedor.innerHTML = `
        <h2>Nuevo encabezado</h2>
        <p>Nuevo párrafo dentro del div</p>
    `;
    </script>
---------------------------------------------------------------------------------------------------------------
3.3 Modificar atributos de un elemento
Puedes acceder a los atributos (e.g., src, href, alt, id, class, etc.) usando setAttribute() o directamente las propiedades del nodo.

<img id="imagen" src="imagen_inicial.png" alt="Imagen inicial" />
    <script>
    const img = document.getElementById("imagen");

    // Opción 1: setAttribute
    img.setAttribute("src", "nueva_imagen.png");

    // Opción 2: acceso directo a la propiedad
    img.alt = "Nuevo texto alternativo";
    </script>
-----------------------------------------------------------------------------------------------------------------
3.4 Modificar estilos (inline style)
Puedes modificar propiedades de estilo a través de la propiedad style del elemento.

<p id="miParrafo">Texto de ejemplo</p>
    <script>
    const p = document.getElementById("miParrafo");
    p.style.color = "red";
    p.style.fontSize = "20px";
    </script>
    
Se recomienda usar clases CSS para mantener la separación de responsabilidades, pero a veces modificar estilos inline puede ser útil para cambios dinámicos específicos.
