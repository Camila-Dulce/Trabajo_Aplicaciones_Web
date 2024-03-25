const lista = document.getElementById("lista");
const fecha = document.getElementById("fecha");
const input = document.getElementById("input");
const botonAgregar = document.getElementById("botonAgregar");
const hecho = "task_alt";
const pendiente = "radio_button_unchecked";
const subrayado = "subrayado";
let cont = 0;


//agregar tarea//
function agregarTarea (tarea, cont, realizado, eliminado){

    if(eliminado){
        return
    }

    const validacionTarea = realizado ?hecho:pendiente;
    const subr = realizado ?subrayado:"";

    const nuevaLista = '<li id="nuevaLista"><span class="material-symbols-outlined" dato="eliminado" id="'+ cont +'">'+ validacionTarea +'</span><p class="text '+ subr +'">' + tarea + '</p><span class="material-symbols-outlined" dato="eliminado" id="'+ cont +'">delete</span></li>';    
    lista.innerHTML += nuevaLista;

    //evento de click para cambiar estado de tarea//
    const nuevaTarea = lista.querySelectorAll("li");
    nuevaTarea[nuevaTarea.length-1].addEventListener("click", estado)
}

//agregar con boton//
botonAgregar.addEventListener("click", () => {
    const tarea = input.value;
    if (tarea) {
        agregarTarea(tarea, cont, false, false);
        input.value = "";
        cont++;
    } else {
        console.log("Ingresa una tarea valida");
    }
});

//agregar con enter//
document.addEventListener("keyup", function(tar){
    if(tar.key=="Enter"){
        const tarea = input.value;
        if (tarea) {
            agregarTarea(tarea, id, false, false);
            input.value = "";
            cont++
        } else {
            console.log("Ingresa una tarea valida");
        }
    }
});

//marcar hecho o pendiente

function estado(tar){
    const tarea = tar.target;

    if (tarea.tagName === "SPAN"){
        if (tarea.textContenido === pendiente){
            tarea.textContenido = hecho;
        } else if (elemento.textContent === hecho) {
            elemento.textContent = pendiente;
        }
    }
}


