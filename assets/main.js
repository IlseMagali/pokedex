function Pokemon(nombre,color,puntosAtaque,puntosVida){
	this.nombre = nombre;
	this.color = color;
	this.puntosAtaque = puntosAtaque;
	this.vida = puntosVida;
	this.pelear = function(pokemonObjeto){
		pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque;
	}
}

var pokemons = [];


function crearPokemon(){
	var pokemonNombre = document.getElementById("nombrePokemon");
	var pokemonPuntosAtaque = document.getElementById("puntosAtaquePokemon");
	var pokemonColor = document.getElementById("colorPokemon");
	var pokemonPuntosVida = document.getElementById("vidaPokemon");

	// instancia de la clase Pokemon, objeto pokemon:
	var pokemon = new Pokemon(pokemonNombre.value,
							  pokemonColor.value,
							  parseInt(pokemonPuntosAtaque.value),
								parseInt(pokemonPuntosVida.value)
							  )


	console.log(pokemons);
	pokemons.push(pokemon); // agregar pokemon al array pokemons
	mostrarPokemonSelectorUno();
	mostrarPokemonSelectorDos();
}

/* ------ Agregar a selector con FOREACH -------- */
/*function mostrarPokemon(){
	var selector = document.getElementById("pokeOponenteUno");

	pokemons.forEach(function(pokemon){
		var optionSelector = document.createElement("option");
		optionSelector.innerText = pokemon.nombre;
		selector.appendChild(optionSelector);
	});
}*/

/* ------ Agregar a selector con textNode -------- */
function mostrarPokemonSelectorUno(){
	var pokemonNombre = document.getElementById("nombrePokemon");
	var pokemonPuntosAtaque = document.getElementById("puntosAtaquePokemon");

	var optionSelector = document.createElement("option");
	var pokemonsOptions = document.createTextNode(pokemonNombre.value);
	optionSelector.appendChild(pokemonsOptions);
	pokemonsOptions.value = parseInt(pokemonPuntosAtaque.value);
	console.log(pokemonsOptions.value);
	var selectorPokemons = document.getElementById("pokeOponenteUno").appendChild(optionSelector);

}

function mostrarPokemonSelectorDos(){
	var pokemonNombre = document.getElementById("nombrePokemon");
	var pokemonPuntosAtaque = document.getElementById("puntosAtaquePokemon");

	var optionSelector = document.createElement("option");
	var pokemonsOptions = document.createTextNode(pokemonNombre.value);
	optionSelector.appendChild(pokemonsOptions);
	pokemonsOptions.value = parseInt(pokemonPuntosAtaque.value);
	var selectorPokemons = document.getElementById("pokeOponenteDos").appendChild(optionSelector);

}

function pokeBatalla(){
	var pokemonElegidoUno = document.getElementsByTagName("option");
	var pokemonElegidoDos = document.getElementsByTagName("option");

	if (pokemonElegidoUno.value != pokemonElegidoDos.value){
		console.log(pokemonElegidoUno.value + pokemonElegidoDos.value);
	}
	else {;
		alert("no sale por ahora")
	}



}
