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
    const numeroAleatorio1 = generarNumeroAleatorio();
    const numeroAleatorio2 = generarNumeroAleatorio();
    const numeroAleatorio3 = generarNumeroAleatorio();
    
    const pkmn = await getPkmn(numeroAleatorio);
    const pkmn1 = await getPkmn(numeroAleatorio1);
    const pkmn2 = await getPkmn(numeroAleatorio2);
    const pkmn3 = await getPkmn(numeroAleatorio3);

    const {front_default} = pkmn.sprites
    const urlImagenFrontal = front_default
    
    const imgPokemon = document.getElementById("imgPokemon");
    imgPokemon.src = urlImagenFrontal;

    //Accedo a la informacion de nombre de la API para que me cambie el nombre de pokemon en el botón
    mostrarNombrePokemon(pkmn.name, pkmn1.name, pkmn2.name, pkmn3.name);
}
mi_peticion()

function mostrarNombrePokemon(nombrePokemon, nombrePokemon1, nombrePokemon2, nombrePokemon3) {
    //Modifico la información del botón del HTML
    const btnObtenerPokemon = document.getElementById("btnObtenerPokemon");
    const btnObtenerPokemon1 = document.getElementById("btnObtenerPokemon1");
    const btnObtenerPokemon2 = document.getElementById("btnObtenerPokemon2");
    const btnObtenerPokemon3 = document.getElementById("btnObtenerPokemon3");
    
    btnObtenerPokemon.value = `${nombrePokemon}`;
    btnObtenerPokemon1.value = `${nombrePokemon1}`;
    btnObtenerPokemon2.value = `${nombrePokemon2}`;
    btnObtenerPokemon3.value = `${nombrePokemon3}`;
}

function generarNumeroAleatorio(){
    return Math.floor(Math.random() * 200) + 1;
}

const btnObtenerPokemon = document.getElementById("btnObtenerPokemon");
//Agregar un event listener para ejecutar mi_peticion al hacer click en el botón
btnObtenerPokemon.addEventListener("click", mi_peticion);

