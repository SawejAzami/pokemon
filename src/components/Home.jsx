

import { useState } from "react";
import Search from "./Search";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";


function Home(){
    const [searchTerm, setSearchTerm] = useState("");
     return (
       <>
         <div className="flex flex-col items-center mt-5">
           <Search searchUpdate={setSearchTerm} />
           {searchTerm.length == 0 ? (
             <PokemonList />
           ) : (
             <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
           )}
         </div>
       </>
     );
     
}

export default Home