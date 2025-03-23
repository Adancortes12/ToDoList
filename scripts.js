function agregarTarea() {
    let nuevaTareaT = document.getElementById("nuevaTarea").value;

    // Validar campo vacío
    if (nuevaTareaT === "") {
        alert("Ingrese una tarea");
        return;
    }

    // Crear elemento <li>
    let nuevaTarea = document.createElement("li");
    nuevaTarea.className = "tarea-item"; // Clase para estilos

    // Crear checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check-tarea";
    checkbox.onchange = function () {
        if (checkbox.checked) {
            textoTarea.classList.add("tachado");
        } else {
            textoTarea.classList.remove("tachado");
        }
    };

    // Crear texto de la tarea
    let textoTarea = document.createElement("span");
    textoTarea.textContent = nuevaTareaT;
    textoTarea.className = "texto-tarea"; // Clase para estilos

    // Botón de eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "-";
    btnEliminar.className = "btn-delete";
    btnEliminar.onclick = function () {
        nuevaTarea.remove();
    };

    // Agregar elementos al <li> en orden: checkbox, texto, botón
    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(btnEliminar);

    // Agregar la tarea al principio de la lista
    let lista = document.getElementById("listaTareas");
    lista.prepend(nuevaTarea); // Ahora las nuevas tareas van arriba

    // Limpiar input
    document.getElementById("nuevaTarea").value = "";

}
