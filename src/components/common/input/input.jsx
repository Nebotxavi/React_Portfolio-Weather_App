import React from "react";
import ListSuggestions from "./listSuggestions";

const Input = ({
  query,
  handleChange,
  handleSubmit,
  submitClickedItem,
  placeholder
}) => {
  return (
    <div className="searchForm-container">
      <form
        action=""
        autoComplete="off"
        onSubmit={function preventDefaultSubmit(e) {
          e.preventDefault();
        }}
      >
        <div className="autocomplete" style={{ width: 300 }}>
          <input
            type="text"
            name={placeholder}
            value={query}
            onChange={handleChange}
            placeholder={`Search for a ${placeholder}...`}
          ></input>
          <div className="autocomplete-items">
            {
              <ListSuggestions
                query={query}
                submitClickedItem={submitClickedItem}
                handleSubmit={handleSubmit}
              />
            }
          </div>
        </div>
        <input
          type="submit"
          value="Search"
          onClick={() => handleSubmit()}
        ></input>
      </form>
    </div>
  );
};

export default Input;
