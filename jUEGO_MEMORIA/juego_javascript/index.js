let botones = document.getElementsByClassName('seleccionar');

let imageUrls = {
  0: 'https://i.pinimg.com/originals/09/fe/30/09fe30bee5617384271213308361279c.jpg',
  1: 'https://i.pinimg.com/originals/a9/8c/ef/a98cef81d9968637981fed0a46fccd9b.png',
  2: 'https://i.pinimg.com/originals/61/de/ba/61deba51ec625493d1956063bac219fb.jpg'
};

let puntos = 0;
let comparcion = false;
let contadorClick = 0;
let valueAnt = -1;
let startiempo= false;
 
function accigarNumeroAleatorio() {
  let contador = [0, 0, 0]; // Contador para cada número
  for (let i = 0; i < botones.length; i++) {
    let num;
    do {
      num = Math.floor(Math.random() * 3); // Genera un número aleatorio del 0 al 2
    } while (contador[num] >= 2); // Repite si el número ya se ha asignado dos veces
    botones[i].value = num;
    contador[num]++;
  }
};
accigarNumeroAleatorio();

function buscar(){
  let comparcion = false;
  let contadorClick = 0;
  let valueAnt = -1;
  [...botones].forEach(boton=>{
    boton.addEventListener('click',(event)=>{
      startiempo = true;
      const value = boton.getAttribute('value');
      contadorClick++;
      if(contadorClick==1){
        valueAnt = value;
      }else if(contadorClick==2){
        comparcion = valueAnt==value;
        if(comparcion){
          sumarPuntos();
          buscar();
        }else{
          buscar();
        }
      }    console.log(value);
    })
  });
}
buscar();


function sumarPuntos() {
  puntos += 50;
  document.getElementById('punto').innerText = "puntos"+puntos;
}

let segundos = 0;
function incrementarContador() {
  if (startiempo){
    segundos++;
    document.getElementById('tiempo').innerText = "Tiempo"+segundos;
  }
}
const intervalo = 1000; 

setInterval(incrementarContador, intervalo);

