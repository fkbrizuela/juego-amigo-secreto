// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo (){
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value;
    if (nombre == "") {
        alert("Por favor ingrese un nombre valido");
    } else {
        listaAmigos.push(nombre);
        mostrarAmigos();
    }
    inputNombre.value = "";
    cargarListaSorteo(listaAmigos)
}

function mostrarAmigos() {
    let elementoLista = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        elementoLista += `<li>${listaAmigos[i]}</li>`;
    }
    document.getElementById("listaAmigos").innerHTML = elementoLista;
}

function cargarListaSorteo(array) {
    let listaAmigosSorteo = [];
    if (array.length > 0) {        
        listaAmigosSorteo = array
    } 
    return listaAmigosSorteo
}

function sortearAmigo(){
    let sorteo = cargarListaSorteo(listaAmigos);
    let numeroAleatoreo = Math.floor(Math.random() * sorteo.length);
    let ganador = document.getElementById("resultado")
    ganador.innerHTML = `El amigo secreto sorteado es: ${sorteo[numeroAleatoreo]}`;
}
