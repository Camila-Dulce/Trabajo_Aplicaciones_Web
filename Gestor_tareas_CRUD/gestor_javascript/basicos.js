const lista = document.getElementById("lista");
const fecha = document.getElementById("fecha");
const input = document.getElementById("input");
const botonAgregar = document.getElementById("botonAgregar");
const hecho = "task_alt";
const pendiente = "radio_button_unchecked";
const subrayado = "subrayado";
const editar = "edit";
let listas = JSON.parse(localStorage.getItem("Taskhub")) || [];
let cont = listas.length;

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

    const nuevaLista = '<li id="nuevaLista"><span class="material-symbols-outlined" dato="realizado"  id="'+ cont +'">'+ validacionTarea +'</span><p class="text '+ subr +'">' + tarea + '</p><span class="material-symbols-outlined borrar" dato="eliminado" id="'+ cont +'">delete</span><span class="material-symbols-outlined editar" dato="editado" id="editar"><i class="fas fa-edit"></i></span></li>';
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
        listas.push({
            nombre: tarea,
            cont: cont,
            realizado: false,
            eliminado:false,
        })
        //guardar tareas incluso si se recarga la pagina//
        localStorage.setItem("Taskhub", JSON.stringify(listas));

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
    if(tar.key == "Enter"){
        const tarea = input.value;
        if (tarea) {
            agregarTarea(tarea, cont, false, false);

            //agregar datos al array//
        listas.push({
            nombre: tarea,
            cont: cont,
            realizado: false,
            eliminado:false,
        })
            //guardar tareas incluso si se recarga la pagina//
            localStorage.setItem("Taskhub", JSON.stringify(listas));

            input.value = "";
            cont++
        } else {
            const error = "Ingresa una tarea válida";
            mensajeError(error);
        }
    }
});

//marcar hecho o pendiente//
function estado(tar) {
    const tarea = tar.target;

    if (tarea.tagName === "SPAN") {
        const id = parseInt(tarea.id);

        if (tarea.textContent === pendiente) {
            tarea.textContent = hecho;
            tarea.nextElementSibling.classList.add(subrayado);
            listas[id].realizado = true;
        } else if (tarea.textContent === hecho) {
            tarea.textContent = pendiente;
            tarea.nextElementSibling.classList.remove(subrayado);
            listas[id].realizado = false;
        }

        // Guardar el estado actualizado en el almacenamiento local
        localStorage.setItem("Taskhub", JSON.stringify(listas));
    }
}

//eliminar tarea//
function eliminarTarea(tar) {
    if (tar.target.getAttribute("dato") === "eliminado") {
      tar.target.parentElement.remove();
      const id = parseInt(tar.target.id);
      if (listas[id]) {
        listas[id].eliminado = true;

        //guardar tareas incluso si se recarga la pagina//
        localStorage.setItem("Taskhub", JSON.stringify(listas));
      } 
    }
  }
  lista.addEventListener("click", eliminarTarea);

  
// Recuperar datos del localStorage al cargar la página
window.addEventListener("load", function() {
    listas = JSON.parse(localStorage.getItem("Taskhub")) || [];
    listas.forEach(function(tarea) {
        if (!tarea.eliminado) {
            agregarTarea(tarea.nombre, tarea.cont, tarea.realizado, tarea.eliminado);
        }
    });
});






document.querySelector('.editar').addEventListener('click', function(event) {
    const idElemento = event.target.parentNode.getAttribute('.editar');

    const indice = lista.findIndex(elemento => elemento.editar === idElemento);

    if (indice !== -1) {
        lista[indice].propiedad = 'nuevo valor';
        console.log('Elemento modificado:', lista[indice]);
    } else {
        console.log('Elemento no encontrado en el array.');
    }
});