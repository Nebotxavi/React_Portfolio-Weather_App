import React from "react";
import getHighlightedText from "./getHighlightedText";

const ListItem = ({ item, active, submitClickedItem, query, setHovered }) => (
  <div
    className={active ? "autocomplete-active" : ""}
    data-id={item.id}
    onClick={submitClickedItem}
    onMouseEnter={() => setHovered(item)}
    onMouseLeave={() => setHovered(undefined)}
  >
    <span>{getHighlightedText(item.name, query)}</span>
  </div>
);

export default ListItem;
