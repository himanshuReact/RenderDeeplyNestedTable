import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <div>
        <input type="text" onKeyUp={handleSearch} />
      </div>
    </div>
  );
};

export default Search;
