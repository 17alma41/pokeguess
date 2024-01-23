//Script para capturar pokemons en la pokeAPI:
async function getPkmn() {
    const url = `https://pokeapi.co/api/v2/pokemon/1`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos
}

//Capturo el pokemón que yo quiero
async function mi_peticion(){
    const pkmm = await getPkmn()
    const urlImagenFrontal = pkmm.sprites.front_default;

    const imgPokemon = document.createElement("img")
    imgPokemon.src = urlImagenFrontal
    document.body.appendChild(imgPokemon)
}
mi_peticion()


function generarNumeroAleatorio(){
    let numeroAleatorio = Math.floor(Math.random() * 200) + 1;
    console.log(numeroAleatorio);
    //return numeroAleatorio;
}
