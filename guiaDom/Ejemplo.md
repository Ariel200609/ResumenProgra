6. Ejemplo completo paso a paso
Para asentar los conceptos, veamos un ejemplo que crea, modifica y elimina elementos en respuesta a un clic en un botón.

<!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8" />
    <title>DOM - Ejemplo completo</title>
    <style>
        .resaltado {
        border: 2px solid green;
        padding: 10px;
        margin: 5px;
        }
    </style>
    </head>
    <body>
    <h1 id="titulo">Manipulación del DOM</h1>
    <button id="btnCrear">Crear párrafo</button>
    <button id="btnEliminar">Eliminar último párrafo</button>
    <div id="contenedor"></div>
    <script>
        const titulo = document.getElementById("titulo");
        const btnCrear = document.getElementById("btnCrear");
        const btnEliminar = document.getElementById("btnEliminar");
        const contenedor = document.getElementById("contenedor");
        // Cambiamos el texto del título
        titulo.textContent = "Ejemplo dinámico con DOM";
        // Evento: Crear un nuevo párrafo al hacer clic en btnCrear
        btnCrear.addEventListener("click", () => {
        // Creamos un <p> nuevo
        const nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = "Soy un párrafo creado al hacer clic.";
        // Le añadimos una clase CSS
        nuevoParrafo.classList.add("resaltado");
        // Lo insertamos en el contenedor
        contenedor.appendChild(nuevoParrafo);
        });
        // Evento: Eliminar el último párrafo al hacer clic en btnEliminar
        btnEliminar.addEventListener("click", () => {
        // Obtenemos todos los párrafos dentro de #contenedor
        const parrafos = contenedor.getElementsByTagName("p");
        if (parrafos.length > 0) {
            // Seleccionamos el último párrafo
            const ultimoParrafo = parrafos[parrafos.length - 1];
            // Lo eliminamos del DOM
            contenedor.removeChild(ultimoParrafo);
        } else {
            alert("No hay más párrafos para eliminar.");
        }
        });
    </script>
    </body>
    </html>
    
Funcionamiento:

El título cambia su contenido apenas se carga la página.
Al hacer clic en "Crear párrafo", se crea dinámicamente un <p> con la clase .resaltado y se coloca en #contenedor.
Al hacer clic en "Eliminar último párrafo", se elimina el último <p> creado.