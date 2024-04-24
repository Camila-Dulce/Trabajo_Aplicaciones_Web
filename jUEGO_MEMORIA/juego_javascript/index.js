let botones = document.getElementsByClassName('seleccionar');

let imageUrls = {
  0: 'https://i.pinimg.com/originals/09/fe/30/09fe30bee5617384271213308361279c.jpg',
  1: 'https://i.pinimg.com/originals/a9/8c/ef/a98cef81d9968637981fed0a46fccd9b.png',
  2: 'https://i.pinimg.com/originals/df/fe/87/dffe8757a9fd8c967d904b13ab14f8c3.jpg',
  3: 'https://i.pinimg.com/originals/61/de/ba/61deba51ec625493d1956063bac219fb.jpg',
  4: 'https://i.pinimg.com/originals/9c/97/ce/9c97ce4bbdc7721eb596aaaff659dce8.jpg',
  5: 'https://i.pinimg.com/originals/98/da/9d/98da9d67e3359e6b8218d14b76831ba0.jpg',
};

let puntos = 0;
let startiempo = false;

function accigarNumeroAleatorio() {
  let contador = [0, 0, 0, 0, 0 ,0]; // Un arreglo para contar cuantas veces se ha asignado cada numero
  for (let i = 0; i < botones.length; i++) {// ciclo sobre cada elemento del arreglo botones
    let num;
    do {

      num = Math.floor(Math.random() * 6); // Genera un número aleatorio del 0 al 3

    } while (contador[num] >= 2); // Repite si el número ya se ha asignado dos veces
    botones[i].value = num;// Asigna el número aleatorio al valor del botón
    contador[num]++;// Incrementa el contador para el número asignado
  }
};

accigarNumeroAleatorio();


accigarNumeroAleatorio();// Llama a la función para asignar números aleatorios


function buscar() {
  let comparcion = false; // Variable para comparar si dos botones seleccionados tienen el mismo valor
  let contadorClick = 0; // Contador de clics en botones
  let valueAnt = -1; // Valor del botón seleccionado previamente
  let botonesSeleccionados = []; // Arreglo para almacenar los botones seleccionados
  const botones = document.querySelectorAll('button'); // Selecciona todos los elementos de botón en el documento
  botones.forEach(boton => { // Para cada botón seleccionado, se agrega un EventListener
    boton.addEventListener('click', (event) => {
      if (botonesSeleccionados.includes(boton)) { // Verifica si el botón ya ha sido seleccionado
        return; // Si el botón ya ha sido seleccionado, sale de la función
      }
      startiempo = true; // Inicia el temporizador del juego
      let value = boton.getAttribute('value'); // Obtiene el valor del atributo 'value' del botón
      contadorClick++; // Incrementa el contador de clics
      if (contadorClick == 1) { // Si es el primer clic en un botón
        boton.style.backgroundImage = `url('${imageUrls[value]}')`; // Cambia el fondo del botón al valor correspondiente
        valueAnt = value; // Almacena el valor del botón seleccionado
        botonesSeleccionados.push(boton); // Agrega el botón al arreglo de botones seleccionados
      } else if (contadorClick == 2) { // Si es el segundo clic en un botón
        boton.style.backgroundImage = `url('${imageUrls[value]}')`; // Cambia el fondo del botón al valor correspondiente
        comparcion = valueAnt == value; // Compara el valor del botón actual con el valor del botón anterior
        botonesSeleccionados.push(boton); // Agrega el botón al arreglo de botones seleccionados
        if (comparcion) { // Si los valores de los dos botones son iguales
          botonesSeleccionados.forEach(boton => { // Para cada botón seleccionado
            boton.style.cursor = "not-allowed"; // Cambia el cursor del ratón
            boton.disabled = true; // Deshabilita el botón
          });
          sumarPuntos(); // Suma puntos al jugador
          buscar(); // Reinicia la búsqueda de botones
        } else { // Si los valores de los dos botones son diferentes
          setTimeout(function () { // Espera 500 milisegundos
            botonesSeleccionados.forEach(boton => {
              boton.style.backgroundImage = `url('https://i.pinimg.com/originals/b9/3b/25/b93b25589be5451f2179ccb168354ca3.jpg')`; // Cambia el fondo del botón
            });
          }, 500);
          buscar(); // Reinicia la búsqueda de botones
        }
      }
    })
  });
}

buscar();  // Llama a la función buscar() para iniciar el juego


function sumarPuntos() {
  puntos += 50;
  document.getElementById('punto').innerText = "puntos" + puntos;
}

let segundos = 0;
function incrementarContador() {
  if (startiempo && (puntos < 300)) {
    segundos++;
    document.getElementById('tiempo').innerText = "Tiempo" + segundos;
  }
}
const intervalo = 1000;
setInterval(incrementarContador, intervalo);

document.querySelector(".reiniciar").addEventListener("click", function() {
  recargarPaguina();
});

function recargarPaguina(){
  location.reload();
}
