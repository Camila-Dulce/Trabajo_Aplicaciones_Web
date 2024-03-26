function crearNuevoEspacio() {
    let nuevoEspacio = document.createElement("div");
    nuevoEspacio.classList.add("espacioTarea");
    const nuevaTarea = '<a href="basicos.html" target="_blank"><button class="crear" data="si" onclick="crearNuevoEspacio()"><span class="material-symbols-outlined">note_stack_add</span></button></a>';
    nuevoEspacio.innerHTML = nuevaTarea;
    
    document.getElementById("contenedorEspaciosTarea").appendChild(nuevoEspacio);
}