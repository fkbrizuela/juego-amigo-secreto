// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo (){
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value;
    console.log(nombre);
    if (nombre == "") {
        alert("Por favor ingrese un nombre valido");
    } else {
        listaAmigos.push(nombre);
    }
    console.log(listaAmigos);
    inputNombre.value = "";
    return listaAmigos;
}


