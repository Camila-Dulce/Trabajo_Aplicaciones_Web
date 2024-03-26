// obtener el array de tareas desde el almacenamiento local//
const listas = JSON.parse(localStorage.getItem("Taskhub"));

// mostrar las tareas en el div con id "listaTareas"
const listaTareasElement = document.getElementById("listaTareas");

// mostrar lista de tareas en esta página//
function mostrarTareasFiltros() {
    // limpiar contenido antes de mostrar//
    listaTareasElement.innerHTML = "";

    //recorrer el array de tareas y mostrar cada tarea//
    listas.forEach((tarea, index) => {
        const tareaElement = document.createElement("li");

        const iconoElement = document.createElement("span");
        iconoElement.setAttribute("class", "material-symbols-outlined");
        iconoElement.setAttribute("data", "eliminado");
        iconoElement.setAttribute("id", index);
        iconoElement.textContent = "radio_button_unchecked";

        const textoElement = document.createElement("p");
        textoElement.setAttribute("class", "text");
        textoElement.textContent = tarea.nombre, tarea.cont, tarea.realizado, tarea.eliminado; // cada propiedad del array

        const eliminarElement = document.createElement("span");
        eliminarElement.setAttribute("class", "material-symbols-outlined");
        eliminarElement.setAttribute("data", "eliminado");
        eliminarElement.setAttribute("id", index);
        eliminarElement.textContent = "delete";

        tareaElement.appendChild(iconoElement);
        tareaElement.appendChild(textoElement);
        tareaElement.appendChild(eliminarElement);

        listaTareasElement.appendChild(tareaElement);
    });
}

// llamar a la función para mostrar las tareas en la página filtros
mostrarTareasFiltros();



