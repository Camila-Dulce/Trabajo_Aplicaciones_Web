const lista = document.getElementById("lista");
const fecha = document.getElementById("fecha");
const input = document.getElementById("input");
const botonAgregar = document.getElementById("botonAgregar");
const hecho = "task_alt";
const pendiente = "radio_button_unchecked";
const subrayado = "subrayado";
let cont = 0;
const listaDatos = [];

//cracion de fecha//
const fechaActual = new Date ();
fecha.innerHTML = fechaActual.toLocaleDateString("es-CO", {weekday:"long", month: "short", day:"numeric"});


//agregar tarea//
function agregarTarea (tarea, cont, realizado, eliminado){

    if(eliminado){
        return
    }

    const validacionTarea = realizado ?hecho:pendiente;
    const subr = realizado ?subrayado:"";

    const nuevaLista = '<li id="nuevaLista"><span class="material-symbols-outlined" dato="realizado" id="'+ cont +'">'+ validacionTarea +'</span><p class="text '+ subr +'">' + tarea + '</p><span class="material-symbols-outlined" dato="eliminado" id="'+ cont +'">delete</span></li>';    
    lista.innerHTML += nuevaLista;

    //evento de click para cambiar estado de tarea//
    const nuevaTarea = lista.querySelectorAll("li");
    for (let i = 0; i < nuevaTarea.length; i++) {
    nuevaTarea[i].addEventListener("click", estado);
    }

}

//agregar con boton//
botonAgregar.addEventListener("click", () => {
    const tarea = input.value;
    if (tarea) {
        agregarTarea(tarea, cont, false, false);
        //agregar datos al array//
        listaDatos.push({
            nombre: tarea,
            cont: cont,
            realizado: false,
            eliminado:false,
        })
        input.value = "";
        cont++;
    } else {
        const error = "Ingresa una tarea válida";
        mensajeError(error);
    }
});

//mensaje tarea invalida//
function mensajeError (error){
    const mensaje = document.createElement("p");
    mensaje.textContent = error;
    mensaje.classList.add("error");
    const errorCont = document.querySelector(".mensajeError"); 
    errorCont.innerHTML = '';
    errorCont.appendChild(mensaje);

    //duracion de mensaje de error//
    setTimeout(function() {
        errorCont.innerHTML = ''; 
    }, 3000);
}

//agregar con enter//
document.addEventListener("keyup", function(tar){
    if(tar.key=="Enter"){
        const tarea = input.value;
        if (tarea) {
            agregarTarea(tarea, cont, false, false);
            //agregar datos al array//
        listaDatos.push({
            nombre: tarea,
            cont: cont,
            realizado: false,
            eliminado:false,
        })
            input.value = "";
            cont++
        } else {
            const error = "Ingresa una tarea válida";
            mensajeError(error);
        }
    }
});

//marcar hecho o pendiente//
function estado(tar){
    const tarea = tar.target;

    if (tarea.tagName === "SPAN"){
        if (tarea.textContent === pendiente){
            tarea.textContent = hecho;
            tarea.nextElementSibling.classList.add(subrayado);
            listaDatos[tarea.id].realizado = listaDatos[tarea.id].realizado ?false :true;
        } else if (tarea.textContent === hecho) {
            tarea.textContent = pendiente;
            tarea.nextElementSibling.classList.remove(subrayado); 
        }
    }
}

//eliminar tarea//
function eliminarTarea(tar) {
    if (tar.target.getAttribute("dato") === "eliminado") {
      tar.target.parentElement.remove();
      if (listaDatos[tar.id]) {
        listaDatos[tar.id].eliminado = true;
      } else {
        console.error("Elemento eliminado");
      }
    }
  }
  
  lista.addEventListener("click", eliminarTarea);