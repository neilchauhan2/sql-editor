import React from "react";

const Search = ({ handleSearch, keyword }) => {
  return (
    <div className="container search">
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={handleSearch}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-search"></i>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Search;
