import React, { useState } from "react";
import { getCity } from "../services/cityService";
import Input from "./common/input/input";
import ManageClickOutside from "./common/manageClickOutside";

export function SearchForm(props) {
  const [query, setQuery] = useState("");

  const handleClickOutside = () => {
    setQuery("");
  };

  const submitClickedItem = ({ currentTarget: input }) => {
    const cityID = input.attributes[1].nodeValue;
    setQuery("");
    props.submitSearch(cityID);
  };

  const handleSubmit = cityID => {
    if (cityID) {
      setQuery("");
      props.submitSearch(cityID);
    } else if (query) {
      const { id: cityID } = getCity(query)[0] || "";
      setQuery("");
      props.submitSearch(cityID);
    }
  };

  return (
    <ManageClickOutside onClick={handleClickOutside}>
      <Input
        query={query}
        handleChange={e => setQuery(e.target.value)}
        handleSubmit={handleSubmit}
        submitClickedItem={submitClickedItem}
        placeholder="location"
      />
    </ManageClickOutside>
  );
}
