import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import usepokemonDetails from "../Hooks/usepokemonDetails";

function PokemonDetails({pokemonName}){
  const { id } = useParams();
  const { pokemons } = usepokemonDetails(id, pokemonName);

  if (Object.keys(pokemons).length === 0) {
    return <h1>Loading...</h1>;
  }


  return (
    <>
     
      <div className="mt-10 flex justify-center items-center  ">
        <div className=" p-10 text-2xl rounded-2xl bg-blue-400 flex justify-center items-center flex-col">
          <h1 className="text-2xl font-medium">
            {pokemons.name?.toUpperCase()}
          </h1>
          <img className="p-3" src={pokemons.image} />
          <div>HEIGHT: {pokemons.height}</div>
          <div>WEIGHT:{pokemons.weight}</div>
          <ul className="flex gap-2">
            Types:
            {pokemons.types &&
              pokemons.types.map((t) => (
                <li className="bg-blue-400 " key={t}>
                  {t},
                </li>
              ))}
          </ul>

          <ul className=" bg-blue-200 p-2 rounded-2xl text-center mt-2">
            Similar types of Pokemon
            {pokemons.types &&
              pokemons.similarpokemon &&
              pokemons.similarpokemon.map((t) => (
                <li
                  className="bg-blue-300 m-2 rounded-xl p-1"
                  key={t.pokemon.name}
                >
                  {t.pokemon.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default PokemonDetails