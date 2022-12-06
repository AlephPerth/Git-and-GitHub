let vp = document.getElementById ("VillaPlatzi");
let papel = vp.getContext("2d");
let mapa = "/JS - Platzi/Proyecto 3 - Villa Platzi/IMG/tile.png"

let fondo = new Image(); // esto crea un objeto que esta asociado a la VAR fondo
fondo.src = mapa;  // con esto estoy invocando la img desde la ruta que esta asociada a la VAR mapa
addEventListener("load",dibujar) // LOAD es el evento de carga de un objeto mientras que dibujar es el nombre de la funcion.

function dibujar () { // En el caso del evento LOAD no es necesario pasar el parametro

    papel.drawImage(fondo, 0, 0) // Desde el contexto papel llamo a los parametros fondo y las posicion en X y en Y

}