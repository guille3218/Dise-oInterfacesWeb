console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

var contadorRebotes = 0;

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 10;

//-- Velocidades del objeto
let velx = 10;
let vely = 10;

//-- Funcion principal de animacion
function update() 
{

  //Cada 5 rebotes se reduce la velocidad de ambos lados
  if(contadorRebotes == 5){
    
    //Si la velocidad es positiva, se resta, y si es negativa, se suma.
    if(velx >0){
      velx = velx-0.25;
    }else{
      velx = velx+0.25;
    }
    
    if(vely>0){
      vely = vely-0.25;
    }else{
      vely = vely+0.25;
    }
    
    //Se resetea el contador de rebotes
    contadorRebotes=0;
  }
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condicion de rebote en extremos verticales del canvas
   if (x < 0 || x >= (canvas.width - 20) ) {

    //Se suma uno al contador de rebotes
    contadorRebotes = contadorRebotes+1;
  
    velx = -velx;
  }

  //-- Condición de rebote en extremos horizontales del canvas
  if (y <= 0 || y > canvas.height - 20) {

  //Se suma uno al contador de rebotes
    contadorRebotes = contadorRebotes+1;
    vely = -vely;
  }

  //-- Actualizar la posición
  x = x + velx;
  y = y + vely;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 20, 20);

   //-- Dibujar
   ctx.fillStyle = 'red'
    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();