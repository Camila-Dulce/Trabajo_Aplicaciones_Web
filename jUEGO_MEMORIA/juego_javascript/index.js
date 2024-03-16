let botones = document.getElementsByClassName('seleccionar');

let imageUrls = {
  1: 'https://i.pinimg.com/originals/09/fe/30/09fe30bee5617384271213308361279c.jpg',
  2: 'https://i.pinimg.com/originals/a9/8c/ef/a98cef81d9968637981fed0a46fccd9b.png',
  3: 'https://i.pinimg.com/originals/61/de/ba/61deba51ec625493d1956063bac219fb.jpg'
};

let segundos = 0;
let puntos = 0;
let comparcion = false;
let contadorClick = 0;
let valueAnt = -1;
 
function accigarNumeroAleatorio() {
  for (let i = 0; i < botones.length; i++) {
    let num = Math.floor(Math.random() * 3); 
    botones[i].value = num; 
  }
};
accigarNumeroAleatorio();

function buscar(){
  //let seleccionados = [];
  [...botones].forEach(boton=>{
    boton.addEventListener('click',(event)=>{
      const value = boton.getAttribute('value');
      contadorClick++;
      if(contadorClick==1){
        valueAnt = value;
      }else if(contadorClick==2){
        comparcion = valueAnt==value;
        if(comparcion){
          //si es verdera sumar puntos
        }else{
          //reatuarar datos iniciles 
        }
      }
      console.log()
    })
  });
}
buscar();


function sumarPuntos() {
  // si el boton1 y boton2 sen igual sumar puntos 
  
}

function tiempo() {

  // cuando se realice el primer clik comiense el contador 
  [...botons].forEach(boton=>{
    boton.addEventListener('click',()=>{

    })
  });
}

