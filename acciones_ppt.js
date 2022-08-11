function aleatorio(min, max) { //min y max son parámetros de la función aleatorio
    return Math.floor(Math.random() * (max - min + 1) + min) //numero aleatorio sin decimales, entre 1 y 3
}

function eleccion(jugada) { //jugada es el parámetro a crear dentro de la función eleccion
    let resultado = ""
    if (jugada == 1) {
      resultado = "Piedra 🥌"
    } else if (jugada == 2) {
      resultado = "Papel 📰"
    } else if (jugada == 3) {
      resultado = "Tijera ✂"
    } else {
      resultado = "Parece que no quieres jugar 😒, elige una opción válida"
    }
    return resultado // esta función se enfoca en mostrar el resultado de la elección
}

//Opciones: 1 para Piedra, 2 para Papel y 3 para Tijera

//Declaración de variables
let jugador = 0 //variable inicializada en 0 
let pc = 0
let triunfos = 0 //contabiliza las victorias del jugador
let derrotas = 0
let empates = 0

while (triunfos < 3 && derrotas < 3 && empates < 3) { 
    pc = aleatorio(1,3) //la elección de la pc
    //Permitir que el jugador elija su opción
    jugador = prompt("Elige tu opción favorita:\n-1 para Piedra (🥌),\n-2 para Papel (📰) ó,\n-3 para Tijera (✂)")

    alert("Jugador elegiste: " + eleccion(jugador)) 
    alert("PC eligió: " + eleccion(pc))      

    //Combate
    if (pc == jugador) {
      alert("¡EMPATE!")
      empates = empates + 1
    } else if (jugador == 1 && pc == 3) {
      alert("¡Felicitaciones Jugador, GANASTE! 🎉")
      triunfos = triunfos + 1 //incrementa para evitar ciclo infinito
    } else if (jugador == 2 && pc == 1) {
      alert("¡Felicitaciones Jugador, GANASTE! 🎉")
      triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
      alert("¡Felicitaciones Jugador, GANASTE! 🎉")
      triunfos = triunfos + 1
    } else {
      alert("Jugador mejor suerte la próxima, PERDISTE 😢")
      derrotas = derrotas + 1
    }    
}

alert("Resultado final:\nJugador:\n-Ganaste un total de: " + triunfos + " veces,\n-Perdiste un total de: " + derrotas + " veces y\n-Empataste un total de: " + empates + " veces.")