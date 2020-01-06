var tituloDinamico = document.querySelector('#titulo-idica-accion');
var formularioEligeJugador = document.querySelector('#elige-jugador');
var tablero = document.querySelector('#tablero');

//Junto los dos inputs en un array para recorrerlos, y de esta forma condicionar el evento click.
var jugadores = Array.prototype.slice.call(document.querySelectorAll('input[name=Elecciones]'));
jugadores.forEach(function(choice){
  choice.addEventListener('click', setearJugadores, false);
});

function setearJugadores(){
  iniciarContador();
  jugador = this.value; //le seteamos el valor del input al cual se le hizo click
  tituloDinamico.textContent = "Juegas con " + jugador;
  formularioEligeJugador.style.display = "none";
  crearTablero();
}

function iniciarContador(){
  var n = 0;
  var timeTraking = document.getElementById("time-traking");
  var timeTrakingid = window.setInterval(function(){
    timeTraking.innerHTML = n;
    n++;
    if(esGanador()){
      clearInterval(timeTrakingid)
    }
  },1000);
}

function crearTablero(){
  for(var i=0; i<9; i++){
    var casilla = document.createElement('div');
    casilla.id = "casilla"+i;
    casilla.className = "casillas"
    casilla.addEventListener('click', movimientoJugador, false);
    tablero.appendChild(casilla);
  }
  casillas = Array.prototype.slice.call(document.querySelectorAll('.casillas'));
}

function movimientoJugador(){
  if(this.textContent === ""){
    this.textContent = jugador;
    if(esGanador()){
      swal(" El ganador es "+ jugador);
      return;
    };
    cambiarJugador();
    movimientoComputadora()
  }
}

function esGanador(){
  ganador = false;
  var combinaciones = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
  ];
  for(var i = 0; i < combinaciones.length; i++){
    combinacion = combinaciones[i]
    if(
      document.getElementById('casilla'+combinacion[0]).textContent === jugador &&
      document.getElementById('casilla'+combinacion[1]).textContent === jugador &&
      document.getElementById('casilla'+combinacion[2]).textContent === jugador
    ){
      ganador = true;
    }
  }
  return ganador
}

function cambiarJugador(){
  if (jugador == 'X') {
    jugador = 'O';
  } else {
    jugador = 'X';
  }
}

//Para que juegue la computadora, vamos a crear un arreglo con todas las celdas que esten vacias. De esas celdas va a seleccionar una aleatoriamente para marcarla.
function movimientoComputadora(){
  casillasVacias = [];
  casillas.forEach(function(casilla){
    if(casilla.textContent === ""){
      casillasVacias.push(casilla);
    }
  })

  //Va a alegir un numero al azar el cual va a dar como resultado el indice del arreglo de las cassillas que estan vacias y va a completar con una marca.
  var random = Math.ceil(Math.random() * casillasVacias.length) - 1;
  casillasVacias[random].textContent = jugador;

  if(esGanador()){
    swal(" El ganador es "+ jugador);
    return;
  };
  cambiarJugador();
}

var botonResetar = document.querySelector('#resetear')
botonResetar.addEventListener('click', resetear, false);

function resetear(){
  casillas.forEach(function(casilla){
    casilla.textContent = "";
  })
}
