var tituloDinamico = document.querySelector('.titulo-idica-accion');
var jugadorX = document.querySelector('.jugador-1');
var jugadorO = document.querySelector('.jugador-2');


function startGame(){

}

function elegirJugador(){
    jugadorX.addEventListener('click', function(){return "X"});
    jugadorO.addEventListener('click', function(){return "O"})
}
console.log(elegirJugador)