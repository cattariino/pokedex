
// const myform = document.querySelector("#myForm");
// const input = document.querySelector("#inputName");
// const divContainerImgPokemon = document.querySelector(".pokemon--image");
// const divContainerDescriptionPokemon = document.querySelector(".pokemon--description");

// function getPokemonImg(pokemonNameOrId,done){
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         const imgUrl = data.sprites.front_default;
//         console.log(data)
//         done(imgUrl);
//     })
// }

// myform.addEventListener("submit", e => {
//     e.preventDefault();
// })

// input.addEventListener("input", e => {
//     e.preventDefault();
//     const pokemonNameOrId= e.target.value;
//     getPokemonImg(pokemonNameOrId, imgUrl => {
//         divContainerImgPokemon.innerHTML = "";
//         const divImgPokemon = document.createElement("img");
//         divImgPokemon.className = "img-Pokemon";
//         divImgPokemon.src = imgUrl;
//         divContainerImgPokemon.append(divImgPokemon);
//     })
// })

const myform = document.querySelector("#myForm");
const input = document.querySelector("#inputName");
const divContainerImgPokemon = document.querySelector(".pokemon--image");
const divContainerDescriptionPokemon = document.querySelector(".pokemon--description");

function getPokemonImg(pokemonNameOrId, done) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imgUrl = data.sprites.front_default;
            done(imgUrl, data.name, data.abilities.map(ability => ability.ability.name));
        });
}

myform.addEventListener("submit", e => {
    e.preventDefault();
});

input.addEventListener("input", e => {
    e.preventDefault();
    const pokemonNameOrId = e.target.value;
    getPokemonImg(pokemonNameOrId, (imgUrl, name, abilities) => {
        divContainerImgPokemon.innerHTML = "";
        const divImgPokemon = document.createElement("img");
        divImgPokemon.className = "img-Pokemon";
        divImgPokemon.src = imgUrl;
        divContainerImgPokemon.appendChild(divImgPokemon);

        divContainerDescriptionPokemon.innerHTML = ""; // Limpiar el contenedor antes de agregar nueva información

        const pName = document.createElement("p");
        pName.textContent = `Nombre: ${name}`;
        pName.className = "descripcion"
        divContainerDescriptionPokemon.appendChild(pName);

        const pAbilities = document.createElement("p");
        pAbilities.className = "descripcion"
        pAbilities.textContent = `Habilidades: ${abilities.join(", ")}`;
        divContainerDescriptionPokemon.appendChild(pAbilities);
    });
});



