import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonlist from "./usePokemonList";

function usepokemonDetails(id,pokemonName) {
  const [pokemons, setPokemon] = useState({});
  async function DownloadPokemon() {
    let response;
    if(pokemonName){

      response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    }else{
      response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    }

    const pokemonOfSametype = await axios.get(
      `https://pokeapi.co/api/v2/type/${
        response.data.types ? response.data.types[0].type.name : ''
      }`
    );
    setPokemon({
      name: response.data.name,
      image:
        response.data.sprites.other.dream_world.front_default ||
        response.data.sprites.front_shiny,
      height: response.data.height,
      weight: response.data.weight,
      types: response.data.types.map((t) => t.type?.name),
      similarpokemon: pokemonOfSametype.data.pokemon.slice(0, 5),
    });
  }
  useEffect(() => {
    DownloadPokemon();
  }, []);

  return { pokemons };
}

export default usepokemonDetails;
