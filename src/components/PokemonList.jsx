
import Pokemon from "./Pokemon";
import usePokemonlist from "../Hooks/usePokemonList";

function PokemonList() {
  
    

    const url = "https://pokeapi.co/api/v2/pokemon";
    const { pokemonListDetail, setPokemonListDetail } = usePokemonlist();

    return (
      <>
        <h1>Pokemon list</h1>
        <div className="flex flex-wrap gap-4 justify-around px-25">
          {pokemonListDetail.isloding
            ? "Loding......"
            : pokemonListDetail.pokemonlist.map((p) => (
                <Pokemon key={p.id} name={p.name} image={p.image} id={p.id} />
              ))}
        </div>
        <div className="mb-10">
          {pokemonListDetail.prevUrl == null ? (
            " "
          ) : (
            <button
              onClick={() =>
                setPokemonListDetail(() => ({
                  ...pokemonListDetail,
                  pokemonUrl: pokemonListDetail.prevUrl,
                }))
              }
              className="text-2xl font-bold bg-blue-500 m-4 py-2 px-5 rounded-xl"
            >
              Prev
            </button>
          )}

          {pokemonListDetail.nextUrl == null ? (
            " "
          ) : (
            <button
              onClick={() =>
                setPokemonListDetail(() => ({
                  ...pokemonListDetail,
                  pokemonUrl: pokemonListDetail.nextUrl,
                }))
              }
              className="text-2xl font-bold bg-blue-500 m-4 py-2 px-5 rounded-xl"
            >
              next
            </button>
          )}
        </div>
      </>
    );
}

export default PokemonList;