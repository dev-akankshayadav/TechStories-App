import React from "react";
import { useGlobalContext } from "../context";
const Search = () => {
  const {query, searchPost} = useGlobalContext();

  return (
    <>
      <h1> Tech Stories </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search tech stories"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
