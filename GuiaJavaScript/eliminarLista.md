Ejemplo de delegación: supongamos una lista de tareas donde cada ítem <li> tiene un botón "Eliminar". En vez de asignar click a cada botón individual, podemos asignar una función al <ul> contenedor:

<ul id="tareas">
  <li>Tarea 1 <button class="del-btn">X</button></li>
  <li>Tarea 2 <button class="del-btn">X</button></li>
</ul>

<script>
  const listaTareas = document.getElementById('tareas');

  listaTareas.addEventListener('click', (event) => {
    if (event.target.matches('.del-btn')) {
      // Verifica si el clic fue en un botón de eliminar
      const item = event.target.closest('li');
      if (item) {
        item.remove(); // Elimina la tarea del DOM
      }
    }
  });
</script>


En este ejemplo, usando event.target y comprobando su clase podemos determinar si el click provino de un botón "X". Si es así, buscamos el <li> padre (con closest) y lo eliminamos. Así, un solo listener en <ul> maneja cualquier cantidad de botones hijos, incluso los agregados en el futuro.