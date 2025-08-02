import axios from "axios";
import { useEffect, useState } from "react";


function usePokemonlist(){
     const [pokemonListDetail, setPokemonListDetail] = useState({
       pokemonlist: [],
       isloding: false,
       pokemonUrl: "https://pokeapi.co/api/v2/pokemon",
       prevUrl: "",
       nextUrl: "",
      
     });
    
      async function Download() {
        
       
          const response = await axios.get(pokemonListDetail.pokemonUrl);
          const pokemonResult = response.data.results;
          setPokemonListDetail(() => ({
            ...pokemonListDetail,
            prevUrl: response.data.previous,
            nextUrl: response.data.next,
          }));
          const promisePokemon = pokemonResult.map((pokemon) =>
            axios.get(pokemon.url)
          );
          const pokemonData = await axios.all(promisePokemon);
          const res = pokemonData.map((poke) => {
            const data = poke.data;
            return {
              id: data.id,
              name: data.name,
              image: data.sprites.other.dream_world.front_default,
            };
          });
          setPokemonListDetail(() => ({
            ...pokemonListDetail,
            prevUrl: response.data.previous,
            nextUrl: response.data.next,
            pokemonlist: res,
          }));
        
    }
      
        useEffect(() => {
          Download();
          setPokemonListDetail(()=>({ ...pokemonListDetail, isloding: false }));
        }, [pokemonListDetail.pokemonUrl]);
        return { pokemonListDetail, setPokemonListDetail };
}
export default usePokemonlist;