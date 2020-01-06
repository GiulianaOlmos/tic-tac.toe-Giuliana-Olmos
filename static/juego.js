var tituloDinamico = document.querySelector('#titulo-idica-accion');
var formularioEligeJugador = document.querySelector('#elige-jugador');

//Junto los dos inputs en un array para recorrerlos, y de esta forma condicionar el evento click.
var jugadores = Array.prototype.slice.call(document.querySelectorAll('input[name=Elecciones]'));
jugadores.forEach(function(choice){
  choice.addEventListener('click', setearJugadores, false);
});

function setearJugadores(){
    jugador = this.value; //le seteamos el valor del input al cual se le hizo click
    tituloDinamico.textContent = "Juegas con " + jugador;
    formularioEligeJugador.style.display = "none";
    crearTablero();
}

function crearTablero(){
    
}
    