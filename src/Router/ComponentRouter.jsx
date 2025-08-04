import { Link, Route, Routes } from "react-router-dom";
import PokemonDetails from "../components/PokemonDetails";
import Home from "../components/home";

function ComponentRouter() {
    return (
      <>
        
          <Link to="/" className="flex justify-center items-center text-4xl font-bold mt-4">
           poekmon
          </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </>
    );
}
export default ComponentRouter;