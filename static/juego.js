var tituloDinamico = document.querySelector('.titulo-idica-accion');
var jugadorX = document.querySelector('.jugador-1');
var jugadorO = document.querySelector('.jugador-2');


function startGame(){
    if(elegirJugador()){
        tituloDinamico.innerHTML ="Juegas con " +  elegirJugador();
    }
}

function elegirJugador(){
    jugadorX.addEventListener('click', function(){return "X"});
    jugadorO.addEventListener('click', function(){return "O"})
}
elegirJugador();
console.log(elegirJugador())
