// Recargar la página / obtener el array de tareas desde el almacenamiento local
const listas = JSON.parse(localStorage.getItem("Taskhub"));

// mostrar las tareas en el div con id "listaTareas"
const listaTareasElement = document.getElementById("listaTareas");


// mostrar lista de tareas en esta página excluyendo las marcadas como eliminadas
function mostrarTareasFiltros() {
    // limpiar contenido antes de mostrar
    listaTareasElement.innerHTML = "";

    // Filtrar las tareas excluyendo las marcadas como eliminadas
    const tareasActivas = listas.filter(tarea => tarea.eliminado !== true && tarea.realizado !== true &&  tarea.nombre !== true);


    // Recorrer las tareas activas y mostrar cada tarea
    tareasActivas.forEach((tarea, index) => {
        const tareaElement = document.createElement("li");

        const iconoElement = document.createElement("span");
        iconoElement.setAttribute("class", "material-symbols-outlined");
        iconoElement.setAttribute("data", "eliminado");
        iconoElement.setAttribute("id", index);
        iconoElement.textContent = "radio_button_unchecked";

        const textoElement = document.createElement("p");
        textoElement.setAttribute("class", "text");
        textoElement.textContent = tarea.nombre, tarea.cont, tarea.realizado, tarea.eliminado;

        const eliminarElement = document.createElement("span");
        eliminarElement.setAttribute("class", "material-symbols-outlined");
        eliminarElement.setAttribute("data", "eliminado");
        eliminarElement.setAttribute("id", index);
        eliminarElement.textContent = "delete";

        tareaElement.appendChild(textoElement); //traer solo el texto sin los iconos 

        listaTareasElement.appendChild(tareaElement);
    });
}

// Llamar a la función para mostrar las tareas activas en la página filtros
mostrarTareasFiltros();


//buscar tareas

const inputBuscar = document.getElementById("input");

inputBuscar.addEventListener('keyup', ()=>{
    const caracter = inputBuscar.value.trim()
    busqueda(caracter)
})

const busqueda = (cadena) => {

        let arreglo = Array.from(listaTareas.children);

        arreglo
        .filter(texto => !texto.textContent.toLowerCase().includes(cadena))
        .forEach (cadenaFiltrada => {
            cadenaFiltrada.classList.add("textoFiltrado")
        })

        //devolver cuando se borra
        arreglo
        .filter(texto => texto.textContent.toLowerCase().includes(cadena))
        .forEach (cadenaFiltrada => {
            cadenaFiltrada.classList.remove("textoFiltrado")
        })
};



