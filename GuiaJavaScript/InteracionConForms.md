Interacción con formularios: Los formularios suelen manejarse interceptando el evento "submit" del <form>. Por ejemplo, para prevenir que el formulario recargue la página y manejarlo vía AJAX:

<form id="miForm">
  <label>Nombre: 
    <input type="text" id="nombre">
  </label>
  <button type="submit">Enviar</button>
</form>

<p id="mensaje"></p>

<script>
  const form = document.getElementById('miForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    const nombre = document.getElementById('nombre').value;
    
    document.getElementById('mensaje').textContent = "Hola, " + nombre + "!";
  });
</script>


Aquí capturamos submit en el formulario, usamos preventDefault() para que no recargue, y luego accedemos al valor del input para mostrar un saludo personalizado en un <p>. Este tipo de manejo es fundamental para validar formularios en cliente o enviar datos con fetch (como veremos en comunicación asíncrona) en vez de un postback completo.