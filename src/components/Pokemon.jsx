import React from "react";
import { Link } from "react-router-dom";

function Pokemon({name,id ,image}){
  return (
    <>
        <Link to={`/pokemon/${id}`}>
      <div className=" m-2 flex flex-col items-center border-1 rounded-2xl">
          <div className="bg-gray-400 border-1 rounded-2xl p-2">
            <img className="h-50 w-50" src={image} />
          </div>
          <h1 className="text-2xl font-bold ">{name.toUpperCase()}</h1>
      </div>
        </Link>
    </>
  );
}

export default Pokemon;