//Script para capturar pokemons en la pokeAPI:
async function getPkmn(numeroAleatorio) {
    const url = `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos

}


async function mi_peticion(){
    //Sale un número aleatorio que genera la imagen de un pokemon
    const numeroAleatorio = generarNumeroAleatorio();
    const pkmm = await getPkmn(numeroAleatorio);
    const urlImagenFrontal = pkmm.sprites.front_default;

    const imgPokemon = document.getElementById("imgPokemon");
    imgPokemon.src = urlImagenFrontal;
    document.body.appendChild(imgPokemon);

    //Accedo a la informacion de nombre de la API para que me cambie el nombre de pokemon en el botón
    mostrarNombrePokemon(pkmm.name);
}

function mostrarNombrePokemon(nombrePokemon) {
    //Modifico la información del botón del HTML
    const btnObtenerPokemon = document.getElementById("btnObtenerPokemon");
    btnObtenerPokemon.innerHTML = `${nombrePokemon}`;
    console.log(nombrePokemon)
}

function generarNumeroAleatorio(){
    return Math.floor(Math.random() * 200) + 1;
}

const btnObtenerPokemon = document.getElementById("btnObtenerPokemon");
//Agregar un event listener para ejecutar mi_peticion al hacer click en el botón
btnObtenerPokemon.addEventListener("click", mi_peticion);

