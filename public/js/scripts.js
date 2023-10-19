let infos = document.querySelector('#infos');
let abilities = document.querySelector('#abilities');
let photoRecto = document.querySelector('#photoRecto');
let photoVerso = document.querySelector('#photoVerso');
let liste30premiers = document.querySelector('#liste30premiers');

liste30premiers.innerHTML = "";

showPokemon(30)

for(id=1; id<=30; id++ ) {
    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then( (response) => response.json())
    .then( (data) => useDatas2( data ))
    .catch( (error) => console.log(error))
};

function useDatas2( data ) {
    console.log(data)
    liste30premiers.innerHTML += "<a href='javascript:showPokemon( " + data.id + " );'><div class='card'><img alt='Vue de face' src='" + data.sprites.front_default + "'><div class='name'>" + data.name + "</div><div class='experience'>Base XP: " + data.base_experience + "</div></div></a>"
}

function showPokemon( id1 ) {
    fetch("https://pokeapi.co/api/v2/pokemon/"+id1)
    .then( (response) => response.json())
    .then( (data) => useDatas1( data ))
    .catch( (error) => console.log(error))
}

function useDatas1( data ) {
    console.log(data)
    photoRecto.src = data.sprites.front_default
    photoVerso.src = data.sprites.back_default
    infos.innerHTML = "Name : " + data.name + "<br>"
    + "Height : " + data.height + "<br>"
    + "Base esperience : " + data.base_experience + "<br>"
    abilities.innerHTML = ""
    data.abilities.forEach( (element) => {
        abilities.innerHTML += element.ability.name + "<br>"
    });
}
