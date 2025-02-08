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
}

function mostrarAmigos() {
    let elementoLista = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        elementoLista += `<li>${listaAmigos[i]}</li>`;
    }
    document.getElementById("listaAmigos").innerHTML = elementoLista;
}

