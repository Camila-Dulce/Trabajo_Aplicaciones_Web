let botones = document.getElementsByClassName('seleccionar');

let imageUrls = {
  0: 'https://i.pinimg.com/originals/09/fe/30/09fe30bee5617384271213308361279c.jpg',
  1: 'https://i.pinimg.com/originals/a9/8c/ef/a98cef81d9968637981fed0a46fccd9b.png',
  2: 'https://i.pinimg.com/originals/a9/8c/ef/a98cef81d9968637981fed0a46fccd9b.png',
  3: 'https://i.pinimg.com/originals/61/de/ba/61deba51ec625493d1956063bac219fb.jpg',
};

let puntos = 0;
let startiempo = false;

function accigarNumeroAleatorio() {
  let contador = [0, 0, 0, 0]; // Contador para cada número
  for (let i = 0; i < botones.length; i++) {
    let num;
    do {
      num = Math.floor(Math.random() * 4); // Genera un número aleatorio del 0 al 2
    } while (contador[num] >= 2); // Repite si el número ya se ha asignado dos veces
    botones[i].value = num;
    contador[num]++;

  }
};


accigarNumeroAleatorio();

function buscar() {
  let comparcion = false;
  let contadorClick = 0;
  let valueAnt = -1;
  let botonesSeleccionados = [];
  const botones = document.querySelectorAll('button');
  botones.forEach(boton => {
    boton.addEventListener('click', (event) => {

      if (botonesSeleccionados.includes(boton)) {
        return;
      }

      startiempo = true;
      const value = boton.getAttribute('value');
      contadorClick++;
      if (contadorClick == 1) {
        boton.style.backgroundImage = `url('${imageUrls[value]}')`;
        valueAnt = value;
        botonesSeleccionados.push(boton);
      } else if (contadorClick == 2) {
        boton.style.backgroundImage = `url('${imageUrls[value]}')`;
        comparcion = valueAnt == value;
        botonesSeleccionados.push(boton);
        if (comparcion) {
          botonesSeleccionados.forEach(boton => {
            boton.style.cursor = "not-allowed";
            boton.disabled = true;
          });
          sumarPuntos();
          buscar();
        } else {
          setTimeout(function () {
            botonesSeleccionados.forEach(boton => {
              boton.style.backgroundImage = `url('https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/256/add-1-icon.png')`;
            });
          }, 500);
          buscar();
        }
      }
      console.log(value);
    })
  });
}

buscar();


function sumarPuntos() {
  puntos += 50;
  document.getElementById('punto').innerText = "puntos" + puntos;
}

let segundos = 0;
function incrementarContador() {
  if (startiempo && (puntos < 200)) {
    segundos++;
    document.getElementById('tiempo').innerText = "Tiempo" + segundos;
  }
}
const intervalo = 1000;
setInterval(incrementarContador, intervalo);

