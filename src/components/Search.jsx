import React, { useState } from "react";
import useDebounce from "../Hooks/useDebounce";

function Search({ searchUpdate }) {
  const debounceCallBack = useDebounce((e) => {
            searchUpdate(e.target.value);
          })
  return (
    <>
      <div className="flex flex-col items-center mb-2">
        <input
          onChange={debounceCallBack}
          className="bg-amber-100 px-40 py-4 border-1 outline-none mt-5 text-2xl"
          placeholder="Enter Pokemon Name......"
          type="text"
        />
      </div>
    </>
  );
}

export default Search;