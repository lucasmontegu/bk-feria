import React, { useState } from "react";
// import { useLocation } from "react-router";
// import queryString from "query-string";
// import { useForm } from "../../hooks/useForm";

export const InputSearch = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="customSearch">
      <input
        type="text"
        placeholder="Buscar"
        value={searchValue}
        onChange={handleSearchInputChanges}
        className="inputSearchCustom"
      />
      <button
        className="btn btn-search"
        onClick={callSearchFunction}
        type="submit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <g data-name="search">
              <rect width="24" height="24" opacity="0" />
              <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
            </g>
          </g>
        </svg>
      </button>
    </form>
  );
};
