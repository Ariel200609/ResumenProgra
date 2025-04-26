2. Acceder a elementos del DOM
Para manipular un elemento, primero necesitas “encontrarlo” dentro del DOM. Existen diversos métodos para ello:

2.1 document.getElementById()
Devuelve el nodo que tenga el id especificado.

<h1 id="titulo">¡Hola, DOM!</h1>
    <script>
    const miTitulo = document.getElementById("titulo");
    console.log(miTitulo); // <h1 id="titulo">¡Hola, DOM!</h1>
    </script>
    
2.2 document.getElementsByClassName()
Devuelve una colección (HTMLCollection) con todos los elementos que posean la clase indicada.

<p class="texto">Párrafo 1</p>
    <p class="texto">Párrafo 2</p>
    <script>
    const parrafos = document.getElementsByClassName("texto");
    console.log(parrafos); // HTMLCollection(2) [p.texto, p.texto]
    </script>
    
Nota: getElementsByClassName() no devuelve un array “normal”; es un objeto con comportamiento parecido a una lista dinámica. Para iterarlo, puedes usar un bucle for tradicional o convertirlo en un array con Array.from().

2.3 document.getElementsByTagName()
Devuelve una colección con todos los elementos que coincidan con el nombre de la etiqueta.

<div>Primer div</div>
    <div>Segundo div</div>
    <script>
    const divs = document.getElementsByTagName("div");
    console.log(divs); // HTMLCollection(2) [div, div]
    </script>
    
2.4 document.querySelector() y document.querySelectorAll()
Permiten usar selectores CSS para encontrar elementos.

querySelector() retorna el primer elemento que cumpla con el selector.
querySelectorAll() retorna todos los elementos que cumplan con el selector, en un objeto NodeList.
Ejemplos:

<div id="contenedor">
    <p class="texto">Párrafo 1</p>
    <p class="texto">Párrafo 2</p>
    </div>

    <script>
    // Devuelve el primer elemento con la clase "texto"
    const primerParrafo = document.querySelector(".texto");
    console.log(primerParrafo); // <p class="texto">Párrafo 1</p>

    // Devuelve todos los elementos con la clase "texto"
    const todosLosParrafos = document.querySelectorAll(".texto");
    console.log(todosLosParrafos); // NodeList(2) [p.texto, p.texto]

    // Usando un selector más específico
    const contenedor = document.querySelector("#contenedor");
    console.log(contenedor); // <div id="contenedor">...</div>
    </script>